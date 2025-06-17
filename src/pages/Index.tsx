
import React, { useState, useEffect } from 'react';
import WorldMap from '../components/WorldMap';
import BeachCard from '../components/BeachCard';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import SunsetAlert from '../components/SunsetAlert';
import { Beach } from '../types/Beach';

const Index = () => {
  const [selectedBeach, setSelectedBeach] = useState<Beach | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showSunsetAlert, setShowSunsetAlert] = useState(false);

  const beaches: Beach[] = [
    {
      id: 1,
      name: "Grace Bay Beach",
      country: "Turks and Caicos",
      coordinates: { lat: 21.7831, lng: -72.2668 },
      rating: 98,
      category: "Luxury Resorts",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Pristine white sand meets crystal-clear turquoise waters",
      scores: {
        beauty: 95,
        cleanliness: 98,
        accessibility: 90,
        activities: 85
      }
    },
    {
      id: 2,
      name: "Navagio Beach",
      country: "Greece",
      coordinates: { lat: 37.8569, lng: 20.6243 },
      rating: 95,
      category: "Secret Coves",
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Hidden shipwreck cove with dramatic limestone cliffs",
      scores: {
        beauty: 100,
        cleanliness: 92,
        accessibility: 75,
        activities: 80
      }
    },
    {
      id: 3,
      name: "Bondi Beach",
      country: "Australia",
      coordinates: { lat: -33.8908, lng: 151.2743 },
      rating: 92,
      category: "Surf & Waves",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Iconic surf culture meets vibrant beach lifestyle",
      scores: {
        beauty: 88,
        cleanliness: 85,
        accessibility: 95,
        activities: 100
      }
    }
  ];

  useEffect(() => {
    // Check for golden hour notification
    const checkGoldenHour = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 17 && hour <= 19) { // Simplified golden hour check
        setShowSunsetAlert(true);
      }
    };
    
    checkGoldenHour();
  }, []);

  const filteredBeaches = beaches.filter(beach => 
    activeFilters.length === 0 || activeFilters.includes(beach.category)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <Header />
      
      {showSunsetAlert && (
        <SunsetAlert onClose={() => setShowSunsetAlert(false)} />
      )}
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Global Top Beaches Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most beautiful beaches, plan perfect sunsets, and create unforgettable coastal memories
          </p>
        </div>

        <FilterBar 
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <WorldMap 
              beaches={filteredBeaches}
              onBeachSelect={setSelectedBeach}
              selectedBeach={selectedBeach}
            />
          </div>
          
          <div className="lg:col-span-1">
            {selectedBeach ? (
              <BeachCard beach={selectedBeach} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">🏖️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Select a Beach
                </h3>
                <p className="text-gray-600">
                  Click on any pin to explore detailed information about that beach
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
