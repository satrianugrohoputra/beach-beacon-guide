
import React from 'react';
import { Beach } from '../types/Beach';
import { Star, Sun, MapPin, Waves } from 'lucide-react';

interface BeachCardProps {
  beach: Beach;
}

const BeachCard = ({ beach }: BeachCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Surf & Waves':
        return <Waves className="w-4 h-4" />;
      case 'Luxury Resorts':
        return <Star className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
      <div className="relative h-48">
        <img 
          src={beach.image} 
          alt={beach.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center text-sm font-semibold">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            {beach.rating}/100
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {beach.country}
            </div>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg text-xs text-blue-600">
            {getCategoryIcon(beach.category)}
            <span className="ml-1">{beach.category}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 italic">{beach.tagline}</p>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800">Score Breakdown</h4>
          
          {Object.entries(beach.scores).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 capitalize">
                {key === 'beauty' ? 'Natural Beauty' : key}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium w-8">{value}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-200">
            Plan Visit
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Sun className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeachCard;
