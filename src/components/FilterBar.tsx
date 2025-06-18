
import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const FilterBar = ({ activeFilters, onFilterChange }: FilterBarProps) => {
  const categories = [
    'Family-Friendly',
    'Surf & Waves', 
    'Secret Coves',
    'Luxury Resorts',
    'Wildlife Spotting',
    'Crystal Waters',
    'Natural Wonder',
    'Pristine',
    'Hidden Gem',
    'Adventure',
    'Romantic',
    'Snorkeling',
    'Private Island'
  ];

  const toggleFilter = (category: string) => {
    if (activeFilters.includes(category)) {
      onFilterChange(activeFilters.filter(f => f !== category));
    } else {
      onFilterChange([...activeFilters, category]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Beach Categories</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilters.includes(category)
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
        
        {activeFilters.length > 0 && (
          <button
            onClick={() => onFilterChange([])}
            className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
