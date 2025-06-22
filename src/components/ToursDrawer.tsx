
import React from 'react';
import { X, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Activity {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  bookingUrl: string;
}

interface ToursDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  beachName: string;
  activities: Activity[];
}

const ToursDrawer: React.FC<ToursDrawerProps> = ({ isOpen, onClose, beachName, activities }) => {
  if (!isOpen) return null;

  const handleBookNow = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[400px] bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Book Tours & Activities
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 h-full overflow-y-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover amazing activities at {beachName}
          </p>

          <div className="space-y-6">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {activity.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>${activity.price}/person</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {activity.description}
                </p>
                
                <Button
                  onClick={() => handleBookNow(activity.bookingUrl)}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </div>
            ))}
          </div>

          {activities.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                No activities available for booking at this time.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToursDrawer;
