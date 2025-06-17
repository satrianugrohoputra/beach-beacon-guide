
import React from 'react';
import { Map } from 'lucide-react';
import { Beach } from '../types/Beach';

interface WorldMapProps {
  beaches: Beach[];
  onBeachSelect: (beach: Beach) => void;
  selectedBeach: Beach | null;
}

const WorldMap = ({ beaches, onBeachSelect, selectedBeach }: WorldMapProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
          <Map className="w-6 h-6 mr-2 text-blue-500" />
          World Beach Map
        </h2>
        <p className="text-gray-600 mt-1">Click on pins to explore beaches</p>
      </div>
      
      <div className="relative h-96 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 overflow-hidden">
        {/* Simplified world map background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Continents simplified shapes */}
            <path d="M100 200 L200 180 L280 220 L250 280 L150 290 Z" fill="#065f46" opacity="0.6" />
            <path d="M300 150 L450 140 L480 200 L420 250 L320 240 Z" fill="#065f46" opacity="0.6" />
            <path d="M500 180 L650 170 L680 230 L620 280 L520 270 Z" fill="#065f46" opacity="0.6" />
            <path d="M700 200 L800 190 L830 250 L780 300 L720 290 Z" fill="#065f46" opacity="0.6" />
          </svg>
        </div>
        
        {/* Beach pins */}
        {beaches.map((beach) => {
          const x = ((beach.coordinates.lng + 180) / 360) * 100;
          const y = ((90 - beach.coordinates.lat) / 180) * 100;
          
          return (
            <button
              key={beach.id}
              onClick={() => onBeachSelect(beach)}
              className={`absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300 hover:scale-110 ${
                selectedBeach?.id === beach.id ? 'scale-125' : ''
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                selectedBeach?.id === beach.id 
                  ? 'bg-orange-500' 
                  : beach.rating >= 95 
                    ? 'bg-green-500' 
                    : beach.rating >= 90 
                      ? 'bg-yellow-500' 
                      : 'bg-blue-500'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                {beach.name}
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Top Rated (95+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span>Excellent (90+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span>Great (&lt;90)</span>
            </div>
          </div>
          <span className="text-gray-600">{beaches.length} beaches shown</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
