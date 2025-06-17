
import React from 'react';
import Header from '@/components/Header';
import BeachCard from '@/components/BeachCard';
import { Beach } from '@/types/Beach';

const Index = () => {
  const beaches: Beach[] = [
    {
      id: 1,
      name: "Grace Bay Beach",
      country: "Turks and Caicos",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 95,
      categories: ["Luxury Resorts", "Crystal Waters"],
      tagline: "Pristine white sand meets turquoise perfection",
      scores: {
        beauty: 98,
        accessibility: 85,
        activities: 92,
        safety: 95
      },
      stories: [
        "The water is so clear you can see your feet even in deep areas",
        "Perfect for romantic sunset walks",
        "Amazing snorkeling opportunities right from the beach"
      ],
      planLink: "/plan/grace-bay",
      planText: "Get AI-powered travel tips for Grace Bay"
    },
    {
      id: 2,
      name: "Whitehaven Beach",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 92,
      categories: ["Natural Wonder", "Pristine"],
      tagline: "Silica sand so pure it squeaks beneath your feet",
      scores: {
        beauty: 99,
        accessibility: 70,
        activities: 88,
        safety: 90
      },
      stories: [
        "The sand is so fine and white it doesn't heat up even on hot days",
        "Hill Inlet offers breathtaking panoramic views",
        "A truly untouched paradise in the Whitsundays"
      ],
      planLink: "/plan/whitehaven-beach",
      planText: "Plan your Whitsundays adventure"
    },
    {
      id: 3,
      name: "Navagio Beach",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      rating: 89,
      categories: ["Hidden Gem", "Adventure"],
      tagline: "Dramatic cliffs embrace a secret cove with a legendary shipwreck",
      scores: {
        beauty: 96,
        accessibility: 65,
        activities: 85,
        safety: 80
      },
      stories: [
        "The shipwreck adds an incredible focal point to photos",
        "Accessible only by boat, making it feel exclusive",
        "The contrast between blue water and white cliffs is stunning"
      ],
      planLink: "/plan/navagio-beach",
      planText: "Discover Zakynthos island secrets"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Discover Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Beach Paradise
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the world's most stunning beaches with detailed scores, authentic traveler stories, and AI-powered planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beaches.map((beach) => (
              <BeachCard key={beach.id} beach={beach} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
