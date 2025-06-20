
import React, { useState, useEffect } from 'react';
import FilterBar from '@/components/FilterBar';
import InteractiveWorldMap from '@/components/InteractiveWorldMap';
import BeachGrid from '@/components/BeachGrid';
import { Beach } from '@/types/Beach';
import { beaches } from '@/data/beaches';

const BeachesSection = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedBeach, setSelectedBeach] = useState<Beach | null>(null);

  const filteredBeaches = activeFilters.length === 0 
    ? beaches 
    : beaches.filter(beach => 
        beach.categories.some(category => activeFilters.includes(category))
      );

  const handleBeachSelect = (beach: Beach) => {
    console.log('Beach selected:', beach.name);
    setSelectedBeach(beach);
    
    setTimeout(() => {
      const beachCard = document.getElementById(`beach-${beach.id}`);
      if (beachCard) {
        beachCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
  };

  useEffect(() => {
    if (selectedBeach && !filteredBeaches.some(beach => beach.id === selectedBeach.id)) {
      setSelectedBeach(null);
    }
  }, [filteredBeaches, selectedBeach]);

  return (
    <div id="categories-section" className="pt-16 pb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Discover Your Perfect
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Beach Paradise
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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

      {/* Interactive World Map */}
      <div className="mb-8">
        <InteractiveWorldMap 
          beaches={filteredBeaches}
          onBeachSelect={handleBeachSelect}
          selectedBeach={selectedBeach}
        />
      </div>

      {/* Beach Cards Grid */}
      <BeachGrid 
        beaches={filteredBeaches}
        selectedBeach={selectedBeach}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
};

export default BeachesSection;
