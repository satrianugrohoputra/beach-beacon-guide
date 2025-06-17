
import React from 'react';
import { ArrowLeft, MapPin, Clock, Sun, Utensils, Info, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PlanGraceBay = () => {
  const addToPlan = (slug: string) => {
    console.log(`Adding ${slug} to travel plan`);
    // Future implementation for saving to user's travel plan
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Beach Guide
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 mb-8">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Grace Bay Beach panoramic view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Grace Bay Beach</h1>
          <h2 className="text-xl md:text-2xl text-blue-100">Turks and Caicos</h2>
          <p className="text-lg mt-4 max-w-2xl">
            Where powder-soft white sand meets impossibly turquoise waters in perfect harmony. Grace Bay Beach stands as the crown jewel of the Caribbean, offering an untouched paradise where conch bar sunsets and pristine coral reefs create memories that last a lifetime.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* How to Get There */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  How to Get There
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your journey to paradise begins at <strong>Providenciales International Airport (PLS)</strong>, served by major carriers including American Airlines, Delta, United, and British Airways with direct flights from New York, Miami, London, and Toronto. The airport sits just 15 minutes from Grace Bay, making it one of the most accessible world-class beaches you'll ever visit.
                </p>
                <p>
                  From the airport, pre-arranged resort shuttles typically cost $25-40 per person, while taxi rides range from $50-70 for up to four passengers. Car rentals from Budget, Hertz, and local providers start around $65/day and offer the freedom to explore hidden coves and local conch stands at your own pace.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Insider Tip:</strong> Book the 7:30 AM morning flight from Miami to catch Grace Bay's legendary sunrise – the golden hour light transforms the beach into a photographer's dream, and you'll have the pristine sand mostly to yourself.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="w-5 h-5 mr-2 text-orange-500" />
                  Best Time to Visit & Climate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Grace Bay enjoys year-round perfection, but timing your visit can elevate your experience from wonderful to absolutely magical. <strong>Peak season (December-April)</strong> offers guaranteed sunshine with temperatures hovering between 75-85°F and crystal-clear waters perfect for snorkeling. This is when Grace Bay truly sparkles, though you'll share its beauty with more fellow paradise-seekers.
                </p>
                <p>
                  <strong>Shoulder seasons (May-June, November)</strong> present the sweet spot for savvy travelers – fewer crowds, lower accommodation rates, and still-gorgeous weather with occasional refreshing trade wind showers that pass quickly. July through October brings warmer, more humid conditions with afternoon thunderstorms that clear to reveal spectacular sunset skies.
                </p>
                <p>
                  Pack reef-safe sunscreen (SPF 50+ minimum), a wide-brimmed hat, and lightweight UV-protective clothing. The Caribbean sun is deceptively strong, especially when reflecting off Grace Bay's brilliant white sand and turquoise waters.
                </p>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  Top Activities & Experiences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Snorkeling at Smith's Reef</h4>
                    <p className="text-gray-700 mb-2">
                      Just a short swim from the beach, Smith's Reef offers world-class snorkeling with sea turtles, eagle rays, and rainbow parrotfish in crystal-clear waters barely 10 feet deep. The coral gardens here rival any aquarium, with elkhorn coral formations providing shelter for countless tropical species.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Enter the water at the public beach access near Coral Gardens Resort for the best reef proximity.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Conch Bar Rum Punch Sunset</h4>
                    <p className="text-gray-700 mb-2">
                      Experience the quintessential Caribbean moment with a perfectly crafted rum punch as the sun melts into the horizon. Local beach bars like Somewhere Cafe serve legendary conch fritters alongside their signature cocktails, creating the perfect end to your beach day.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Arrive 30 minutes before sunset to secure prime seating and watch the sky transform through a spectrum of colors.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Kayaking Through Mangrove Channels</h4>
                    <p className="text-gray-700 mb-2">
                      Explore the intricate mangrove ecosystems of the Caicos Cays, where juvenile sharks, stingrays, and tropical birds create a nature documentary come to life. These protected waterways offer calm paddling conditions perfect for all skill levels.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Book early morning tours when wildlife is most active and the lighting is perfect for photography.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Deep Sea Fishing Adventures</h4>
                    <p className="text-gray-700 mb-2">
                      The deep Atlantic waters off Grace Bay teem with mahi-mahi, wahoo, and blue marlin. Charter boats offer half-day and full-day excursions with experienced local captains who know exactly where the big fish are biting.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Many charters will cook your catch beachside – there's nothing quite like fresh-caught fish grilled on Grace Bay's pristine sand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Eats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-red-500" />
                  Local Eats & Culture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Conch Fritters</h4>
                    <p className="text-gray-700">
                      Golden-fried perfection featuring fresh conch, bell peppers, and secret island spices. Try the legendary versions at Conch Bar or Da Conch Shack for the most authentic experience on the island.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Turks & Caicos Lobster</h4>
                    <p className="text-gray-700">
                      Sweet Caribbean spiny lobster grilled with butter, garlic, and local seasonings. Grace Bay Club and Infiniti Restaurant serve exceptional preparations that showcase the pristine local waters.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Rum Cake</h4>
                    <p className="text-gray-700">
                      Moist, rum-soaked cake infused with local Bambarra rum and topped with tropical fruit. Pick up authentic versions at local bakeries or the weekly Conch Bar market.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  The weekly Thursday fish fry at the Conch Bar becomes a vibrant cultural celebration where locals and visitors gather for fresh seafood, live rake-and-scrape music, and authentic island hospitality that embodies the true spirit of the Caribbean.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Travel Essentials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-purple-500" />
                  Travel Essentials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>Entry:</strong> Free beach access 24/7
                </div>
                <div>
                  <strong>Facilities:</strong> Public restrooms, outdoor showers, beach chair rentals
                </div>
                <div>
                  <strong>Safety:</strong> No lifeguards, swim at your own risk
                </div>
                <div>
                  <strong>Parking:</strong> Limited street parking, resort parking for guests
                </div>
                <div>
                  <strong>Accessibility:</strong> Beach wheelchair available at some resorts
                </div>
              </CardContent>
            </Card>

            {/* Plan Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Plan Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Current Weather</div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">82°F</div>
                    <div className="text-sm">Sunny, Light Breeze</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Today's Tide</div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-600">High: 2:30 PM</div>
                    <div className="text-sm">Perfect for swimming</div>
                  </div>
                </div>

                <Button 
                  onClick={() => addToPlan('/plan/grace-bay')}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                  Add to My Plan
                </Button>
                
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Tours & Activities
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-500">
                  [Interactive Map Placeholder]
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Conch Bar Beach</span>
                    <span className="text-gray-500">2.1 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coral Gardens Reef</span>
                    <span className="text-gray-500">0.3 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Providenciales Golf Club</span>
                    <span className="text-gray-500">5.2 mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready for Paradise?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grace Bay Beach isn't just a destination – it's a transformative experience where stress melts away with each gentle wave and every sunset paints new memories across your heart. Pack your sense of wonder and prepare to discover why this pristine stretch of Caribbean perfection consistently ranks among the world's most beautiful beaches.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlanGraceBay;
