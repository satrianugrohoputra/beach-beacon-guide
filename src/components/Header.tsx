
import React from 'react';
import { Sun, Map, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl">
              <Map className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Beach Guide</h1>
              <p className="text-sm text-gray-600">PWA</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <Sun className="w-5 h-5 text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
