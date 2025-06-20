
import React from 'react';
import { Mail, MapPin, Heart, Users, Target, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const About = () => {
  const teamMembers = [
    {
      name: 'Satria Nugroho P',
      role: 'Full-Stack Web Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about creating seamless user experiences.',
      slug: 'satria-nugroho-p'
    },
    {
      name: 'Emma Chen',
      role: 'Travel Content Curator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Former travel journalist with expertise in hidden gems and local culture.',
      slug: 'emma-chen'
    },
    {
      name: 'Alex Thompson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Community builder focused on connecting beach lovers worldwide.',
      slug: 'alex-thompson'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion for Paradise',
      description: 'We believe every beach has a story worth discovering and sharing.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community First',
      description: 'Our platform thrives on authentic experiences shared by real travelers.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Purposeful Travel',
      description: 'We promote responsible tourism that benefits local communities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#006994] dark:text-blue-300 mb-4">
                About Beach Guide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Your trusted companion for discovering the world's most beautiful beaches, 
                one story at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-300 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Beach Guide exists to democratize beach discovery by providing authentic, 
                data-driven insights combined with real traveler experiences. We believe that 
                every beach lover deserves access to comprehensive information that helps them 
                find their perfect slice of paradise while supporting local communities and 
                promoting sustainable tourism.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-300 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Passionate travelers and tech enthusiasts working together to bring you 
                the best beach discovery experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link to={`/team/${member.slug}`} className="block">
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/team/${member.slug}`} className="block">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 hover:underline hover:decoration-[#1ABC9C] transition-all">
                        {member.name}
                      </h3>
                    </Link>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#006994] dark:text-blue-300 mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-6">
                Beach Guide was born from a simple frustration: finding reliable, comprehensive 
                information about beaches was surprisingly difficult. Our team experienced this 
                firsthand during family vacations when conflicting reviews and outdated information 
                led to several disappointing beach visits.
              </p>
              
              <p className="mb-6">
                Determined to solve this problem, we assembled a team of travel experts, 
                developers, and data scientists to create something better. We spent two years 
                developing our comprehensive scoring system, building partnerships with local 
                tourism boards, and creating a platform that combines hard data with authentic 
                traveler stories.
              </p>
              
              <p className="mb-6">
                Today, Beach Guide serves thousands of travelers worldwide, helping them discover 
                hidden gems, plan perfect beach vacations, and connect with like-minded beach 
                enthusiasts. We're proud to support local communities by driving tourism to 
                lesser-known destinations and promoting sustainable travel practices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-800 dark:to-teal-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-100 dark:text-blue-200 mb-4">We'd love to hear from you</p>
                <a 
                  href="mailto:satria@gmail.com" 
                  className="text-white font-medium hover:text-blue-200 transition-colors"
                >
                  satria@gmail.com
                </a>
              </div>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-blue-100 dark:text-blue-200 mb-4">Based in Indonesia</p>
                <address className="text-white not-italic">
                  Bekasi - Surabaya<br />
                  Indonesia
                </address>
              </div>
            </div>

            {/* Enhanced Footer Section with Social Links */}
            <div className="border-t border-white/20 pt-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-6 mb-6">
                  <a 
                    href="https://www.linkedin.com/in/satrianugrohoputra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/satrianugroho.p?igsh=b2xqbG15bmhsOGhn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@satrian.p8372?si=9XgDpNToQw5Fzd73" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-blue-100 dark:text-blue-200 text-sm mb-2">
                  © 2025 Satria N.P - Beach Guide Indonesia
                </p>
                <p className="text-blue-200 dark:text-blue-300 text-xs">
                  Built with ❤️ for beach lovers everywhere
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
