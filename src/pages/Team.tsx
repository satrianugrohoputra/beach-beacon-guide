
import React from 'react';
import { useParams } from 'react-router-dom';
import SatriaProfile from '@/components/team/SatriaProfile';
import EmmaProfile from '@/components/team/EmmaProfile';
import Custom404 from '@/components/Custom404';

const Team = () => {
  const { slug } = useParams<{ slug: string }>();

  const teamMembers = [
    { slug: "satria-nugroho-p", hasProfile: true },
    { slug: "emma-chen", hasProfile: true },
    { slug: "alex-thompson", hasProfile: false }
  ];

  const member = teamMembers.find(m => m.slug === slug);

  // If slug doesn't exist in our team members array, show 404
  if (!member) {
    return <Custom404 />;
  }

  // If member exists but doesn't have a profile, show custom 404 with different message
  if (!member.hasProfile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-white text-center p-6">
        <div className="relative mb-8">
          <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-blue-300 rounded-full opacity-60 animate-pulse delay-75"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
          Explorer at Sea
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md animate-fade-in">
          Looks like this explorer is still sailing the seas...
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a 
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
          >
            Back to Home
          </a>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-blue-200 opacity-30">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
    );
  }

  // Render the appropriate profile component
  switch (slug) {
    case 'satria-nugroho-p':
      return <SatriaProfile />;
    case 'emma-chen':
      return <EmmaProfile />;
    default:
      return <Custom404 />;
  }
};

export default Team;
