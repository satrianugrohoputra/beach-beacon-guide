import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Star } from 'lucide-react';
import { Beach } from '../types/Beach';

interface InteractiveWorldMapProps {
  beaches: Beach[];
  onBeachSelect: (beach: Beach) => void;
  selectedBeach: Beach | null;
}

const InteractiveWorldMap = ({ beaches, onBeachSelect, selectedBeach }: InteractiveWorldMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [activeRegion, setActiveRegion] = useState('All Regions');

  // Region definitions with bounding boxes
  const regions = {
    'All Regions': { bbox: [[-180, -85], [180, 85]] as [[number, number], [number, number]] },
    'Caribbean': { bbox: [[-90, 10], [-60, 28]] as [[number, number], [number, number]] },
    'Europe': { bbox: [[-10, 35], [40, 70]] as [[number, number], [number, number]] },
    'Asia Pacific': { bbox: [[100, -50], [180, 50]] as [[number, number], [number, number]] },
    'North America': { bbox: [[-140, 25], [-60, 60]] as [[number, number], [number, number]] },
    'Indian Ocean': { bbox: [[40, -40], [100, 20]] as [[number, number], [number, number]] }
  };

  const getMarkerColor = (rating: number) => {
    if (rating >= 95) return '#10b981'; // green-500
    if (rating >= 90) return '#f59e0b'; // yellow-500
    return '#3b82f6'; // blue-500
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    // Custom map style with proper typing
    const mapStyle = {
      version: 8 as const,
      sources: {
        'raster-tiles': {
          type: 'raster' as const,
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '© OpenStreetMap contributors'
        }
      },
      layers: [
        {
          id: 'background',
          type: 'background' as const,
          paint: {
            'background-color': '#D0F0F8' // Water color
          }
        },
        {
          id: 'raster-layer',
          type: 'raster' as const,
          source: 'raster-tiles',
          paint: {
            'raster-opacity': 0.7
          }
        }
      ]
    };

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [0, 20],
      zoom: 2,
      projection: 'mercator'
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false
      }),
      'top-right'
    );

    map.current.on('load', () => {
      if (!map.current) return;

      // Add beaches source
      map.current.addSource('beaches', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: beaches.map(beach => ({
            type: 'Feature',
            properties: {
              id: beach.id,
              name: beach.name,
              country: beach.country,
              rating: beach.rating,
              planLink: beach.planLink,
              planText: beach.planText
            },
            geometry: {
              type: 'Point',
              coordinates: [beach.coordinates.lng, beach.coordinates.lat]
            }
          }))
        },
        cluster: true,
        clusterMaxZoom: 10,
        clusterRadius: 50
      });

      // Add cluster circles
      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'beaches',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#3b82f6',
            10,
            '#f59e0b',
            30,
            '#ef4444'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            10,
            30,
            30,
            40
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

      // Add cluster count labels
      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'beaches',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        },
        paint: {
          'text-color': '#ffffff'
        }
      });

      // Add individual beach markers
      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'beaches',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': [
            'case',
            ['>=', ['get', 'rating'], 95], '#10b981',
            ['>=', ['get', 'rating'], 90], '#f59e0b',
            '#3b82f6'
          ],
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

      // Click handlers for clusters
      map.current.on('click', 'clusters', (e) => {
        if (!map.current) return;
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        const clusterId = features[0].properties?.cluster_id;
        (map.current.getSource('beaches') as mapboxgl.GeoJSONSource).getClusterExpansionZoom(
          clusterId,
          (err, zoom) => {
            if (err) return;
            if (map.current && features[0].geometry.type === 'Point') {
              map.current.easeTo({
                center: features[0].geometry.coordinates as [number, number],
                zoom: zoom
              });
            }
          }
        );
      });

      // Click handlers for individual beaches
      map.current.on('click', 'unclustered-point', (e) => {
        if (!e.features?.[0]?.properties) return;
        
        const properties = e.features[0].properties;
        const beach = beaches.find(b => b.id === properties.id);
        
        if (beach && e.features[0].geometry.type === 'Point') {
          onBeachSelect(beach);
          
          // Create popup
          const coordinates = e.features[0].geometry.coordinates.slice() as [number, number];
          
          const popup = new mapboxgl.Popup({
            closeOnClick: true,
            closeButton: true
          })
            .setLngLat(coordinates)
            .setHTML(`
              <div class="p-4 min-w-[200px]">
                <h3 class="font-semibold text-lg text-gray-800 mb-2">${beach.name}</h3>
                <div class="flex items-center mb-3">
                  <div class="flex text-yellow-400 mr-2">
                    ${'★'.repeat(Math.floor(beach.rating / 20))}${'☆'.repeat(5 - Math.floor(beach.rating / 20))}
                  </div>
                  <span class="text-sm text-gray-600">${beach.rating}/100</span>
                </div>
                <a href="${beach.planLink}" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  ${beach.planText || 'Plan Visit'}
                </a>
              </div>
            `)
            .addTo(map.current);
        }
      });

      // Change cursor on hover
      map.current.on('mouseenter', 'clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', 'clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });
      map.current.on('mouseenter', 'unclustered-point', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', 'unclustered-point', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });
    });
  };

  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    if (map.current && regions[region as keyof typeof regions]) {
      const bbox = regions[region as keyof typeof regions].bbox;
      map.current.fitBounds(bbox, { padding: 50 });
    }
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, beaches]);

  if (!mapboxToken) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
            <Map className="w-6 h-6 mr-2 text-blue-500" />
            Interactive World Beach Map
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Enter your Mapbox token to view the interactive map</p>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mapbox Public Token
            </label>
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGVmNHZ..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Get your free token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Map className="w-6 h-6 mr-2 text-blue-500" />
          Interactive World Beach Map
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Click on pins to explore beaches • Zoom and pan to navigate</p>
        {selectedBeach && (
          <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
              Selected: {selectedBeach.name}, {selectedBeach.country}
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
      </div>
      
      {/* Map Container */}
      <div className="relative h-96">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
      
      {/* Legend */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
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
          <span className="text-gray-600 dark:text-gray-400">{beaches.length} beaches shown</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorldMap;
