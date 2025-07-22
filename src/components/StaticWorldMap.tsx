
import React, { useState, useEffect, useRef } from 'react';
import { Map, X } from 'lucide-react';
import { Beach } from '../types/Beach';

interface StaticWorldMapProps {
  beaches: Beach[];
  onBeachSelect: (beach: Beach) => void;
  selectedBeach: Beach | null;
}

interface PopupState {
  beach: Beach | null;
  position: { x: number; y: number };
}

const StaticWorldMap = ({ beaches, onBeachSelect, selectedBeach }: StaticWorldMapProps) => {
  const [activePopup, setActivePopup] = useState<PopupState>({ beach: null, position: { x: 0, y: 0 } });
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const mapRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Region definitions with filtering logic
  const regions = {
    'All Regions': () => true,
    'Caribbean': (beach: Beach) => beach.coordinates.lat >= 10 && beach.coordinates.lat <= 28 && beach.coordinates.lng >= -90 && beach.coordinates.lng <= -60,
    'Europe': (beach: Beach) => beach.coordinates.lat >= 35 && beach.coordinates.lat <= 70 && beach.coordinates.lng >= -10 && beach.coordinates.lng <= 40,
    'Asia Pacific': (beach: Beach) => beach.coordinates.lat >= -50 && beach.coordinates.lat <= 50 && beach.coordinates.lng >= 100 && beach.coordinates.lng <= 180,
    'North America': (beach: Beach) => beach.coordinates.lat >= 25 && beach.coordinates.lat <= 60 && beach.coordinates.lng >= -140 && beach.coordinates.lng <= -60,
    'Indian Ocean': (beach: Beach) => beach.coordinates.lat >= -40 && beach.coordinates.lat <= 20 && beach.coordinates.lng >= 40 && beach.coordinates.lng <= 100
  };

  // Use the beaches prop directly (already filtered by categories) and only apply region filter on top
  const filteredBeaches = activeRegion === 'All Regions' 
    ? beaches 
    : beaches.filter(regions[activeRegion as keyof typeof regions]);

  // Convert lat/lng to SVG coordinates - Fixed static positioning
  const coordsToSVG = (lat: number, lng: number) => {
    // Ensure coordinates are always calculated the same way for static positioning
    const x = Math.max(0, Math.min(800, ((lng + 180) / 360) * 800));
    const y = Math.max(0, Math.min(400, 200 - (lat / 90) * 200));
    return { x, y };
  };

  const getPinColor = (beach: Beach) => {
    if (selectedBeach?.id === beach.id) return '#f97316'; // orange-500 for selected
    if (beach.rating >= 95) return '#10b981'; // green-500
    if (beach.rating >= 90) return '#f59e0b'; // yellow-500
    return '#3b82f6'; // blue-500
  };

  const handlePinClick = (beach: Beach, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Pin clicked for beach:', beach.name);
    
    const containerRect = containerRef.current?.getBoundingClientRect();
    const svgRect = mapRef.current?.getBoundingClientRect();
    
    if (!containerRect || !svgRect) {
      console.log('Could not get container or SVG bounds');
      return;
    }

    const coords = coordsToSVG(beach.coordinates.lat, beach.coordinates.lng);
    // Calculate position relative to the container
    const x = (coords.x / 800) * svgRect.width + (svgRect.left - containerRect.left);
    const y = (coords.y / 400) * svgRect.height + (svgRect.top - containerRect.top) - 80; // Position popup above the pin

    console.log('Setting popup position:', { x, y });
    
    setActivePopup({
      beach,
      position: { x, y }
    });
    
    // Call the beach selection handler
    onBeachSelect(beach);
    
    // Scroll to beach card
    setTimeout(() => {
      const beachCard = document.getElementById(`beach-${beach.id}`);
      console.log('Attempting to scroll to beach card:', `beach-${beach.id}`, beachCard);
      if (beachCard) {
        beachCard.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        console.log('Scrolled to beach card for:', beach.name);
      }
    }, 200);
  };

  const closePopup = () => {
    setActivePopup({ beach: null, position: { x: 0, y: 0 } });
  };

  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    closePopup();
  };

  // Reset region filter when beaches prop changes
  useEffect(() => {
    console.log('Beaches prop changed, total beaches:', beaches.length);
    console.log('Filtered beaches for map:', filteredBeaches.length);
    if (activeRegion !== 'All Regions') {
      setActiveRegion('All Regions');
    }
  }, [beaches.length]);

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    if (activePopup.beach) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [activePopup.beach]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      closePopup();
    };

    if (activePopup.beach) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activePopup.beach]);

  return (
    <div ref={containerRef} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Map className="w-6 h-6 mr-2 text-blue-500" />
          Interactive World Beach Map
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Click on pins to explore beaches • Navigate by region</p>
        {selectedBeach && (
          <div className="mt-2 p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700">
            <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
              🏖️ Selected: {selectedBeach.name}, {selectedBeach.country} (Rating: {selectedBeach.rating}/100)
            </p>
          </div>
        )}
      </div>
      
      {/* Region Filter Bar */}
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {Object.keys(regions).map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === region
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredBeaches.length} of {beaches.length} beaches matching your filters
        </div>
      </div>
      
      {/* SVG Map Container - Static positioning */}
      <div className="relative h-96 bg-gradient-to-br from-blue-200 to-blue-300 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 overflow-visible">
        <svg
          ref={mapRef}
          viewBox="0 0 800 400"
          className="w-full h-full"
          style={{ background: 'transparent' }}
        >
          {/* World Map Background - Static continents */}
          <defs>
            <pattern id="water" patternUnits="userSpaceOnUse" width="4" height="4">
              <rect width="4" height="4" fill="#D0F0F8" className="dark:fill-gray-800" />
            </pattern>
          </defs>
          
          {/* Simplified static world map shapes */}
          <rect width="800" height="400" fill="url(#water)" />
          
          {/* Static continents (fixed positions) */}
          <g fill="#8FBC8F" className="dark:fill-gray-600">
            {/* North America */}
            <path d="M80,100 L220,90 L210,220 L90,210 Z" />
            {/* South America */}
            <path d="M140,220 L200,210 L180,350 L120,340 Z" />
            {/* Europe */}
            <path d="M380,80 L480,85 L470,180 L390,175 Z" />
            {/* Africa */}
            <path d="M400,180 L500,175 L480,320 L410,315 Z" />
            {/* Asia */}
            <path d="M480,70 L720,75 L700,220 L490,215 Z" />
            {/* Australia */}
            <path d="M600,300 L720,295 L710,340 L610,335 Z" />
          </g>
          
          {/* Static Beach Pins - Fixed positions */}
          {filteredBeaches.map((beach) => {
            const coords = coordsToSVG(beach.coordinates.lat, beach.coordinates.lng);
            const isSelected = selectedBeach?.id === beach.id;
            return (
              <g key={beach.id}>
                {/* Glow effect for selected beach */}
                {isSelected && (
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r="18"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                    className="animate-pulse"
                    opacity="0.6"
                  />
                )}
                {/* Static pin with fixed position */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="12"
                  fill={getPinColor(beach)}
                  stroke="white"
                  strokeWidth="3"
                  className="cursor-pointer hover:scale-110 transition-transform duration-200 drop-shadow-lg"
                  onClick={(e) => handlePinClick(beach, e)}
                />
                {/* Beach emoji - static */}
                <text
                  x={coords.x}
                  y={coords.y + 4}
                  textAnchor="middle"
                  className="text-xs fill-white font-bold pointer-events-none drop-shadow-sm"
                  style={{ fontSize: '10px' }}
                >
                  🏖️
                </text>
              </g>
            );
          })}
        </svg>
        
        {/* Enhanced Popup with beach details */}
        {activePopup.beach && (
          <div
            className="absolute z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-2 border-blue-200 dark:border-blue-600 p-5 min-w-[300px] max-w-[350px] transform -translate-x-1/2"
            style={{
              left: `${activePopup.position.x}px`,
              top: `${activePopup.position.y}px`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>
            
            {/* Beach Name */}
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 pr-8 leading-tight">
              {activePopup.beach.name}
            </h3>
            
            <p className="text-base text-gray-700 dark:text-gray-300 mb-3 flex items-center font-medium">
              📍 {activePopup.beach.country}
            </p>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-3">
                {'★'.repeat(Math.floor(activePopup.beach.rating / 20))}
                {'☆'.repeat(5 - Math.floor(activePopup.beach.rating / 20))}
              </div>
              <span className="text-base font-bold text-gray-800 dark:text-gray-200">
                {activePopup.beach.rating}/100
              </span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic leading-relaxed">
              {activePopup.beach.tagline}
            </p>
            
            {/* Beach categories */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {activePopup.beach.categories.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={activePopup.beach.planLink}
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 dark:from-blue-600 dark:to-teal-700 dark:hover:from-blue-700 dark:hover:to-teal-800 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full text-center shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {activePopup.beach.planText || 'Plan Visit'} ✈️
            </a>
          </div>
        )}
      </div>
      
      {/* Legend */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center justify-between text-sm flex-wrap gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Selected</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Top Rated (95+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Excellent (90+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Great (&lt;90)</span>
            </div>
          </div>
          <span className="text-gray-600 dark:text-gray-400">{filteredBeaches.length} beaches shown</span>
        </div>
        
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Click any beach pin to see details and highlight it in the list below
        </div>
      </div>
    </div>
  );
};

export default StaticWorldMap;
