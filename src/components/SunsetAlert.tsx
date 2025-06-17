
import React from 'react';
import { Sun, X } from 'lucide-react';

interface SunsetAlertProps {
  onClose: () => void;
}

const SunsetAlert = ({ onClose }: SunsetAlertProps) => {
  return (
    <div className="fixed top-20 right-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-xl shadow-lg z-50 animate-slide-in-right max-w-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Sun className="w-6 h-6 mr-3 animate-pulse" />
          <div>
            <h4 className="font-semibold">Golden Hour Alert! 🌅</h4>
            <p className="text-sm opacity-90">Perfect sunset conditions right now!</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SunsetAlert;
