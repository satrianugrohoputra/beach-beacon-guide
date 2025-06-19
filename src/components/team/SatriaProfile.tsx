
import React from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';

const SatriaProfile = () => {
  const skills = ['React', 'Next.js', 'Tailwind CSS', 'Node.js'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative h-64 md:h-80 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden mb-8"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="Satria Nugroho P"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Satria Nugroho P</h1>
                  <p className="text-xl md:text-2xl text-blue-100">Full-Stack Web Developer & Beach Lover</p>
                </div>
              </div>
            </div>

            {/* Portfolio Button */}
            <div className="text-center mb-12">
              <a
                href="https://satrianugrohoputra-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1ABC9C] to-[#35C9A8] text-white rounded-full font-semibold text-lg hover:from-[#35C9A8] hover:to-[#1ABC9C] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-6 h-6" />
                Visit Portfolio
              </a>
            </div>

            {/* Bio Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#006994] mb-6">About Satria</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Satria specializes in building immersive web applications using React and Next.js. 
                He brings a passion for clean design and scalable architecture, all inspired by his 
                love for coastal adventures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When he's not coding, you can find him exploring Indonesia's stunning beaches, 
                capturing the perfect sunset, or planning his next seaside escape.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#006994] mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full font-medium text-lg border border-teal-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#006994] mb-6">Get In Touch</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:satria@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
                >
                  <Mail className="w-6 h-6 text-gray-600 group-hover:text-[#1ABC9C]" />
                  <span className="font-medium text-gray-700 group-hover:text-[#1ABC9C]">
                    satria@gmail.com
                  </span>
                </a>
                <a
                  href="https://github.com/satrianugrohoputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-600 group-hover:text-[#1ABC9C]" />
                  <span className="font-medium text-gray-700 group-hover:text-[#1ABC9C]">
                    GitHub Profile
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

export default SatriaProfile;
