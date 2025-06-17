
import React from 'react';
import { Mail, MapPin, Heart, Users, Target, Waves } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6352762?w=150&h=150&fit=crop&crop=face',
      bio: 'Travel enthusiast with 15+ years exploring beaches worldwide.'
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about creating seamless user experiences.'
    },
    {
      name: 'Emma Chen',
      role: 'Travel Content Curator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Former travel journalist with expertise in hidden gems and local culture.'
    },
    {
      name: 'Alex Thompson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Community builder focused on connecting beach lovers worldwide.'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#006994] mb-4">
                About Beach Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your trusted companion for discovering the world's most beautiful beaches, 
                one story at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#006994] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
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
              <h2 className="text-3xl font-bold text-[#006994] mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Passionate travelers and tech enthusiasts working together to bring you 
                the best beach discovery experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#006994] mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Beach Guide was born from a simple frustration: finding reliable, comprehensive 
                information about beaches was surprisingly difficult. Our founder, Sarah, 
                experienced this firsthand during a family vacation to Southeast Asia when 
                conflicting reviews and outdated information led to several disappointing beach visits.
              </p>
              
              <p className="mb-6">
                Determined to solve this problem, Sarah assembled a team of travel experts, 
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-100 mb-4">We'd love to hear from you</p>
                <a 
                  href="mailto:hello@beachguide.com" 
                  className="text-white font-medium hover:text-blue-200 transition-colors"
                >
                  hello@beachguide.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-blue-100 mb-4">Come say hello at our office</p>
                <address className="text-white not-italic">
                  123 Ocean Drive<br />
                  Miami Beach, FL 33139<br />
                  United States
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-blue-100 mb-4">Follow our journey</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
