
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BeachesSection from '@/components/BeachesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection onExploreClick={scrollToCategories} />
      
      <main className="pb-12">
        <div className="container mx-auto px-4">
          {/* Beaches Section */}
          <BeachesSection />
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
