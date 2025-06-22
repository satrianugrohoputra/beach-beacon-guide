
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PlanContextType {
  plannedBeaches: string[];
  addToPlan: (slug: string) => void;
  removeFromPlan: (slug: string) => void;
  isInPlan: (slug: string) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plannedBeaches, setPlannedBeaches] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('plannedBeaches');
    if (saved) {
      try {
        setPlannedBeaches(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse planned beaches from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever plannedBeaches changes
  useEffect(() => {
    localStorage.setItem('plannedBeaches', JSON.stringify(plannedBeaches));
  }, [plannedBeaches]);

  const addToPlan = (slug: string) => {
    setPlannedBeaches(prev => [...prev.filter(s => s !== slug), slug]);
  };

  const removeFromPlan = (slug: string) => {
    setPlannedBeaches(prev => prev.filter(s => s !== slug));
  };

  const isInPlan = (slug: string) => {
    return plannedBeaches.includes(slug);
  };

  return (
    <PlanContext.Provider value={{ plannedBeaches, addToPlan, removeFromPlan, isInPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlanContext must be used within a PlanProvider');
  }
  return context;
};
