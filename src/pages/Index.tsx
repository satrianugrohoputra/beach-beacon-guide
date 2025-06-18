
import React, { useState } from 'react';
import Header from '@/components/Header';
import BeachCard from '@/components/BeachCard';
import WorldMap from '@/components/WorldMap';
import FilterBar from '@/components/FilterBar';
import { Beach } from '@/types/Beach';

const Index = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedBeach, setSelectedBeach] = useState<Beach | null>(null);

  const beaches: Beach[] = [
    {
      id: 1,
      name: "Grace Bay Beach",
      country: "Turks and Caicos",
      coordinates: {
        lat: 21.7924,
        lng: -72.2833
      },
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 95,
      categories: ["Luxury Resorts", "Crystal Waters"],
      tagline: "Pristine white sand meets turquoise perfection",
      scores: {
        beauty: 98,
        accessibility: 85,
        activities: 92,
        safety: 95
      },
      stories: [
        "The water is so clear you can see your feet even in deep areas",
        "Perfect for romantic sunset walks",
        "Amazing snorkeling opportunities right from the beach"
      ],
      planLink: "/plan/grace-bay",
      planText: "Get AI-powered travel tips for Grace Bay"
    },
    {
      id: 2,
      name: "Whitehaven Beach",
      country: "Australia",
      coordinates: {
        lat: -20.2839,
        lng: 149.0403
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 92,
      categories: ["Natural Wonder", "Pristine"],
      tagline: "Silica sand so pure it squeaks beneath your feet",
      scores: {
        beauty: 99,
        accessibility: 70,
        activities: 88,
        safety: 90
      },
      stories: [
        "The sand is so fine and white it doesn't heat up even on hot days",
        "Hill Inlet offers breathtaking panoramic views",
        "A truly untouched paradise in the Whitsundays"
      ],
      planLink: "/plan/whitehaven-beach",
      planText: "Plan your Whitsundays adventure"
    },
    {
      id: 3,
      name: "Navagio Beach",
      country: "Greece",
      coordinates: {
        lat: 37.8594,
        lng: 20.6243
      },
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 89,
      categories: ["Hidden Gem", "Adventure"],
      tagline: "Dramatic cliffs embrace a secret cove with a legendary shipwreck",
      scores: {
        beauty: 96,
        accessibility: 65,
        activities: 85,
        safety: 80
      },
      stories: [
        "The shipwreck adds an incredible focal point to photos",
        "Accessible only by boat, making it feel exclusive",
        "The contrast between blue water and white cliffs is stunning"
      ],
      planLink: "/plan/navagio-beach",
      planText: "Discover Zakynthos island secrets"
    },
    {
      id: 4,
      name: "Bora Bora Beach",
      country: "French Polynesia",
      coordinates: {
        lat: -16.5004,
        lng: -151.7415
      },
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 94,
      categories: ["Luxury Resorts", "Family-Friendly"],
      tagline: "Overwater bungalows meet crystal lagoons",
      scores: {
        beauty: 97,
        accessibility: 75,
        activities: 90,
        safety: 92
      },
      stories: [
        "Swimming with tropical fish right from your bungalow",
        "Sunset views that will take your breath away",
        "Perfect honeymoon destination with luxury amenities"
      ],
      planLink: "/plan/bora-bora",
      planText: "Plan your tropical paradise getaway"
    },
    {
      id: 5,
      name: "Maldives Beach",
      country: "Maldives",
      coordinates: {
        lat: 3.2028,
        lng: 73.2207
      },
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 96,
      categories: ["Luxury Resorts", "Wildlife Spotting"],
      tagline: "Private islands with unmatched luxury",
      scores: {
        beauty: 99,
        accessibility: 80,
        activities: 88,
        safety: 95
      },
      stories: [
        "Swimming with whale sharks and manta rays",
        "Private beaches with powdery white sand",
        "Underwater restaurants with panoramic ocean views"
      ],
      planLink: "/plan/maldives",
      planText: "Discover paradise islands"
    }
  ];

  // Filter beaches based on active filters
  const filteredBeaches = activeFilters.length === 0 
    ? beaches 
    : beaches.filter(beach => 
        beach.categories.some(category => activeFilters.includes(category))
      );

  const handleBeachSelect = (beach: Beach) => {
    setSelectedBeach(beach);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Discover Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Beach Paradise
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the world's most stunning beaches with detailed scores, authentic traveler stories, and AI-powered planning.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-8">
            <FilterBar 
              activeFilters={activeFilters}
              onFilterChange={setActiveFilters}
            />
          </div>

          {/* World Map */}
          <div className="mb-8">
            <WorldMap 
              beaches={filteredBeaches}
              onBeachSelect={handleBeachSelect}
              selectedBeach={selectedBeach}
            />
          </div>

          {/* Beach Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBeaches.map((beach) => (
              <BeachCard key={beach.id} beach={beach} />
            ))}
          </div>

          {filteredBeaches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No beaches match your selected filters.</p>
              <button 
                onClick={() => setActiveFilters([])}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
