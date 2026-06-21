import React, { useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Beach } from '@/types/Beach';

interface LeafletBeachMapProps {
  beaches: Beach[];
  onBeachSelect: (beach: Beach) => void;
  selectedBeach: Beach | null;
}

const getRatingColor = (rating: number) => {
  if (rating >= 95) return '#10b981';
  if (rating >= 90) return '#f59e0b';
  return '#3b82f6';
};

const LeafletBeachMap = ({ beaches, onBeachSelect, selectedBeach }: LeafletBeachMapProps) => {
  const center = useMemo<[number, number]>(() => {
    if (beaches.length === 0) return [10, 0];
    const lat = beaches.reduce((s, b) => s + b.coordinates.lat, 0) / beaches.length;
    const lng = beaches.reduce((s, b) => s + b.coordinates.lng, 0) / beaches.length;
    return [lat, lng];
  }, [beaches]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-teal-500" />
          Explore Beaches on the Live Map
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Pan, zoom, and click a pin to discover each beach paradise.
        </p>
      </div>

      <div className="relative h-[28rem]">
        <MapContainer
          center={center}
          zoom={2}
          scrollWheelZoom={false}
          worldCopyJump
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          {beaches.map((beach) => {
            const color = getRatingColor(beach.rating);
            const isSelected = selectedBeach?.id === beach.id;
            return (
              <CircleMarker
                key={beach.id}
                center={[beach.coordinates.lat, beach.coordinates.lng]}
                radius={isSelected ? 12 : 8}
                pathOptions={{
                  color: '#ffffff',
                  weight: 2,
                  fillColor: color,
                  fillOpacity: 0.9,
                }}
                eventHandlers={{ click: () => onBeachSelect(beach) }}
              >
                <Tooltip direction="top" offset={[0, -6]}>
                  {beach.name}
                </Tooltip>
                <Popup>
                  <div className="min-w-[180px]">
                    <img
                      src={beach.image}
                      alt={beach.name}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-semibold text-gray-800 text-base mb-0.5">{beach.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">{beach.country}</p>
                    <div className="flex items-center text-amber-500 text-sm mb-2">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span>{beach.rating}/100</span>
                    </div>
                    <Link
                      to={beach.planLink}
                      className="inline-block w-full text-center bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
                    >
                      Plan Visit
                    </Link>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Top Rated (95+)</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Excellent (90+)</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Great (&lt;90)</span>
            </div>
          </div>
          <span className="text-gray-600 dark:text-gray-400">{beaches.length} beaches shown</span>
        </div>
      </div>
    </div>
  );
};

export default LeafletBeachMap;
