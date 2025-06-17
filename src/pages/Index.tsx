
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
      id: "grace-bay",
      name: "Grace Bay Beach",
      country: "Turks and Caicos",
      coordinates: { lat: 21.7831, lng: -72.2668 },
      rating: 97,
      category: "Family-Friendly",
      categories: ["Family-Friendly", "Luxury Resorts"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Pristine turquoise waters meet powder-white sands in paradise.",
      scores: {
        beauty: 99,
        cleanliness: 98,
        accessibility: 95,
        activities: 92
      },
      stories: [
        "Kids loved the shallow lagoon—perfect for tiny swimmers!",
        "Sunsets here paint the reef in fiery oranges and pinks."
      ],
      planLink: "/plan/grace-bay",
      planText: "View tide chart & book a boat tour"
    },
    {
      id: "whitehaven-beach",
      name: "Whitehaven Beach",
      country: "Australia",
      coordinates: { lat: -20.2819, lng: 149.0367 },
      rating: 96,
      category: "Secret Coves",
      categories: ["Secret Coves", "Wildlife Spotting"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Silica sand so pure it squeaks beneath your feet.",
      scores: {
        beauty: 100,
        cleanliness: 96,
        accessibility: 85,
        activities: 88
      },
      stories: [
        "The sand is literally 98% pure silica—bring sunglasses!",
        "Hill Inlet lookout at low tide reveals swirling sand patterns."
      ],
      planLink: "/plan/whitehaven-beach",
      planText: "Book seaplane transfer & hiking gear"
    },
    {
      id: "navagio-beach",
      name: "Navagio Beach",
      country: "Greece",
      coordinates: { lat: 37.8569, lng: 20.6243 },
      rating: 94,
      category: "Secret Coves",
      categories: ["Secret Coves", "Luxury Resorts"],
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Dramatic limestone cliffs frame a legendary shipwreck cove.",
      scores: {
        beauty: 98,
        cleanliness: 92,
        accessibility: 78,
        activities: 85
      },
      stories: [
        "The shipwreck makes for incredible photos—arrive early!",
        "Cliff-top views are breathtaking but boat access only."
      ],
      planLink: "/plan/navagio-beach",
      planText: "Reserve boat transfer & waterproof camera"
    },
    {
      id: "playa-norte",
      name: "Playa Norte",
      country: "Mexico",
      coordinates: { lat: 21.2370, lng: -86.7317 },
      rating: 91,
      category: "Family-Friendly",
      categories: ["Family-Friendly", "Surf & Waves"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Caribbean charm meets vibrant beach bars and crystal shallows.",
      scores: {
        beauty: 93,
        cleanliness: 88,
        accessibility: 92,
        activities: 95
      },
      stories: [
        "Beach swings in the water make for perfect Instagram shots!",
        "Fresh ceviche and cold margaritas right on the sand."
      ],
      planLink: "/plan/playa-norte",
      planText: "Check ferry times & book snorkel tour"
    },
    {
      id: "lanikai-beach",
      name: "Lanikai Beach",
      country: "Hawaii, USA",
      coordinates: { lat: 21.3969, lng: -157.7286 },
      rating: 93,
      category: "Surf & Waves",
      categories: ["Surf & Waves", "Wildlife Spotting"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tagline: "Powdery sand beach with twin offshore islands and trade winds.",
      scores: {
        beauty: 95,
        cleanliness: 90,
        accessibility: 88,
        activities: 94
      },
      stories: [
        "Sunrise here is magical—worth the early wake-up call!",
        "Sea turtles often swim near the shore in the mornings."
      ],
      planLink: "/plan/lanikai-beach",
      planText: "Rent kayaks & check turtle spotting times"
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
    activeFilters.length === 0 || activeFilters.some(filter => beach.categories.includes(filter))
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
