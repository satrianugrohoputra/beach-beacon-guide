
import React from 'react';
import { Mail, Globe, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';

const EmmaProfile = () => {
  const expertise = ['Travel Writing', 'Cultural Research', 'Photography', 'Local Guides'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative h-64 md:h-80 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden mb-8"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                      alt="Emma Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Emma Chen</h1>
                  <p className="text-xl md:text-2xl text-purple-100">Travel Content Curator & Cultural Explorer</p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-400 mb-6">About Emma</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Emma is a former travel journalist with over 8 years of experience discovering 
                hidden gems and immersing herself in local cultures around the world. She specializes 
                in finding authentic beach experiences that go beyond the typical tourist destinations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Her passion for storytelling and deep cultural understanding helps Beach Guide 
                users discover not just beautiful beaches, but the rich stories and communities 
                that make each destination unique.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-400 mb-6">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-4">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 rounded-full font-medium text-lg border border-purple-200 dark:border-purple-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-400 mb-6">Connect With Emma</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:emma@beachguide.com"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors group"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-[#1ABC9C]" />
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#1ABC9C]">
                    emma@beachguide.com
                  </span>
                </a>
                <a
                  href="https://emmachen.travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors group"
                >
                  <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-[#1ABC9C]" />
                  <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#1ABC9C]">
                    Travel Blog
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmmaProfile;
