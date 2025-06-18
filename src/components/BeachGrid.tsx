
import React from 'react';
import BeachCard from '@/components/BeachCard';
import { Beach } from '@/types/Beach';

interface BeachGridProps {
  beaches: Beach[];
  selectedBeach: Beach | null;
  onClearFilters: () => void;
}

const BeachGrid = ({ beaches, selectedBeach, onClearFilters }: BeachGridProps) => {
  if (beaches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No beaches match your selected filters.</p>
        <button 
          onClick={onClearFilters}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {beaches.map((beach) => (
        <div 
          key={beach.id} 
          id={`beach-${beach.id}`}
          className={`transition-all duration-300 ${
            selectedBeach?.id === beach.id ? 'ring-4 ring-orange-300 rounded-xl' : ''
          }`}
        >
          <BeachCard beach={beach} />
        </div>
      ))}
    </div>
  );
};

export default BeachGrid;
