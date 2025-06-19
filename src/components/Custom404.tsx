
import React from 'react';
import { Link } from 'react-router-dom';
import { Waves } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center p-6">
      {/* Bouncing turtle illustration placeholder */}
      <div className="relative mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
          <Waves className="w-20 h-20 text-white" />
        </div>
        {/* Add some floating elements for beach theme */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-blue-300 rounded-full opacity-60 animate-pulse delay-75"></div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
        Oops! Lost at Sea?
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md animate-fade-in">
        The page you're looking for isn't here. Let's get you back to the sand!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
        <Link 
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
        >
          Explore Beaches
        </Link>
        <Link 
          to="/about"
          className="px-6 py-3 border-2 border-teal-400 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Learn More
        </Link>
      </div>
      
      {/* Beach wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-blue-200 dark:text-gray-700 opacity-30">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Custom404;
