
import React from 'react';
import { Beach } from '../types/Beach';
import { Star, MapPin, Waves, Quote, ExternalLink, Heart, Shield, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      case 'Romantic':
        return <Heart className="w-4 h-4" />;
      case 'Family-Friendly':
        return <Shield className="w-4 h-4" />;
      case 'Hidden Gem':
        return <Camera className="w-4 h-4" />;
      case 'Adventure':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Luxury Resorts':
        return 'bg-purple-50 text-purple-600';
      case 'Family-Friendly':
        return 'bg-green-50 text-green-600';
      case 'Surf & Waves':
        return 'bg-blue-50 text-blue-600';
      case 'Romantic':
        return 'bg-pink-50 text-pink-600';
      case 'Adventure':
        return 'bg-orange-50 text-orange-600';
      case 'Hidden Gem':
        return 'bg-indigo-50 text-indigo-600';
      case 'Wildlife Spotting':
        return 'bg-emerald-50 text-emerald-600';
      case 'Crystal Waters':
        return 'bg-cyan-50 text-cyan-600';
      case 'Natural Wonder':
        return 'bg-lime-50 text-lime-600';
      case 'Pristine':
        return 'bg-teal-50 text-teal-600';
      case 'Secret Coves':
        return 'bg-slate-50 text-slate-600';
      case 'Snorkeling':
        return 'bg-sky-50 text-sky-600';
      case 'Private Island':
        return 'bg-violet-50 text-violet-600';
      default:
        return 'bg-gray-50 text-gray-600';
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
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-4">
          {beach.categories.slice(0, 4).map((category) => (
            <div 
              key={category} 
              className={`flex items-center px-2 py-1 rounded-lg text-xs ${getCategoryColor(category)}`}
            >
              {getCategoryIcon(category)}
              <span className="ml-1">{category}</span>
            </div>
          ))}
          {beach.categories.length > 4 && (
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg text-xs text-gray-600">
              +{beach.categories.length - 4} more
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 italic">{beach.tagline}</p>
        
        <div className="space-y-3 mb-4">
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

        {/* Traveler Stories */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Quote className="w-4 h-4 mr-1" />
            Traveler Stories
          </h4>
          <div className="space-y-2">
            {beach.stories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 italic">"{story}"</p>
              </div>
            ))}
          </div>
        </div>
        
        <Link 
          to={beach.planLink} 
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Plan Visit
        </Link>
        
        <p className="text-xs text-gray-500 mt-2 text-center">{beach.planText}</p>
      </div>
    </div>
  );
};

export default BeachCard;
