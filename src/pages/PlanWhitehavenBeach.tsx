import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Sun, Utensils, Info, Calendar, ExternalLink, Plus, Check, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { usePlanContext } from '@/contexts/PlanContext';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import AuthModal from '@/components/AuthModal';
import ToursDrawer from '@/components/ToursDrawer';

const PlanWhitehavenBeach = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isToursDrawerOpen, setIsToursDrawerOpen] = useState(false);
  const { addToPlan, removeFromPlan, isInPlan } = usePlanContext();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const beachSlug = 'whitehaven-beach';
  const beachName = 'Whitehaven Beach';
  const isPlanned = isInPlan(beachSlug);

  const activities = [
    {
      id: '1',
      name: 'Hill Inlet Scenic Flight',
      duration: '45 minutes',
      price: 180,
      description: 'Helicopter tour over the swirling sands of Hill Inlet with aerial photography stops and champagne service.',
      bookingUrl: 'https://example.com/book-helicopter'
    },
    {
      id: '2',
      name: 'Sailing Charter Full Day',
      duration: '8 hours',
      price: 220,
      description: 'Luxury catamaran sailing with snorkeling gear, gourmet lunch, and sunset views over the Whitsundays.',
      bookingUrl: 'https://example.com/book-sailing'
    },
    {
      id: '3',
      name: 'Bushwalking & Beach Picnic',
      duration: '4 hours',
      price: 95,
      description: 'Guided nature walk through ancient rainforest followed by a gourmet picnic on pristine silica sand.',
      bookingUrl: 'https://example.com/book-bushwalk'
    }
  ];

  const tideData = [
    { day: 'Today', tide: 'Low: 11:45 AM', waveHeight: 0.8, status: 'Safe' },
    { day: 'Tomorrow', tide: 'Low: 12:30 PM', waveHeight: 1.1, status: 'Safe' },
    { day: 'Thursday', tide: 'Low: 1:15 PM', waveHeight: 1.6, status: 'Caution' },
    { day: 'Friday', tide: 'Low: 2:00 PM', waveHeight: 0.7, status: 'Safe' }
  ];

  const localEvents = [
    {
      title: 'Whitsunday Sailing Week',
      date: 'August 5-12',
      description: 'Annual regatta with world-class yacht racing',
    },
    {
      title: 'Hill Inlet Photography Workshop',
      date: 'August 18',
      description: 'Professional landscape photography masterclass',
    },
    {
      title: 'Marine Conservation Talk',
      date: 'August 22',
      description: 'Educational session about Great Barrier Reef protection',
    },
    {
      title: 'Bushwalking Tour',
      date: 'Every Saturday',
      description: 'Guided nature walks through ancient rainforest',
    }
  ];

  const getWaveStatusColor = (status: string) => {
    switch (status) {
      case 'Safe':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Caution':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'High Risk':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handlePlanToggle = () => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    if (isPlanned) {
      removeFromPlan(beachSlug);
      toast({
        title: "Removed from your plan",
        description: `${beachName} has been removed from your travel plan.`,
      });
    } else {
      addToPlan(beachSlug);
      toast({
        title: "Ready! Whitehaven Beach added to your plan.",
        description: "Start planning your perfect Australian adventure.",
      });
    }
  };

  const handleAddEventToPlan = (eventTitle: string) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    
    toast({
      title: "Event added to plan!",
      description: `${eventTitle} has been added to your itinerary.`,
    });
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
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Whitehaven Beach pristine silica sand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Whitehaven Beach</h1>
          <h2 className="text-xl md:text-2xl text-blue-100">Whitsunday Islands, Australia</h2>
          <p className="text-lg mt-4 max-w-2xl">
            Seven kilometers of pure silica sand so pristine it squeaks beneath your feet and so white it requires sunglasses to fully appreciate. Whitehaven Beach represents nature's masterpiece – an untouched wilderness where ancient rainforests meet crystal waters in one of Earth's most spectacular displays.
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
                  Your adventure begins at <strong>Hamilton Island Airport (HTI)</strong>, the gateway to the Whitsundays, served by Virgin Australia and Qantas with connections from Sydney, Melbourne, and Brisbane. Alternatively, fly into <strong>Proserpine/Whitsunday Coast Airport (PPP)</strong> for direct access to Airlie Beach, the mainland departure point for most Whitehaven excursions.
                </p>
                <p>
                  From Hamilton Island, scenic helicopter transfers to Whitehaven cost around $400-600 per person and offer breathtaking aerial views of Heart Reef and the swirling sands of Hill Inlet. More budget-friendly options include high-speed catamaran day trips from Airlie Beach (45-90 minutes, $150-250) or sailing charters that can anchor overnight in the protected waters nearby.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Insider Tip:</strong> Book the first seaplane departure at 7:30 AM for Hill Inlet Lookout – you'll have the iconic swirling sand photography spot virtually to yourself, and the morning light creates the most dramatic contrast between the turquoise waters and pristine white sand.
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
                  The Whitsundays enjoy a tropical climate with distinct seasons that dramatically affect your Whitehaven experience. <strong>Dry season (May-September)</strong> offers perfect conditions with temperatures between 68-77°F, minimal rainfall, and consistent trade winds ideal for sailing. This is peak season when Whitehaven's silica sand and azure waters create postcard-perfect conditions, though you'll share this paradise with more visitors.
                </p>
                <p>
                  <strong>Shoulder months (April, October)</strong> provide excellent value with warm temperatures, fewer crowds, and still-reliable weather. The <strong>wet season (November-March)</strong> brings higher humidity, afternoon thunderstorms, and potential cyclones, but also lush rainforest landscapes and dramatically reduced tourist numbers for those seeking solitude.
                </p>
                <p>
                  Pack high SPF sunscreen (the silica sand reflects sunlight intensely), a wide-brimmed hat, reef-safe swimwear, and comfortable walking shoes for the Hill Inlet Lookout trek. Don't forget a waterproof camera housing – the underwater world here rivals the terrestrial beauty.
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
                    <h4 className="font-semibold text-lg mb-2">Hill Inlet Lookout Photography</h4>
                    <p className="text-gray-700 mb-2">
                      The iconic swirling sand patterns of Hill Inlet create one of Australia's most photographed natural phenomena. The moderate 20-minute bushwalk through native flora rewards you with panoramic views where pure white silica sand creates mesmerizing patterns against brilliant turquoise waters.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Visit 2-3 hours before low tide for the most dramatic sand patterns – the shifting sands create entirely new formations with each tidal cycle.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Swimming in Liquid Crystal</h4>
                    <p className="text-gray-700 mb-2">
                      The waters off Whitehaven Beach maintain perfect clarity year-round, with visibility often exceeding 30 meters. The protected cove provides calm swimming conditions perfect for all ages, while the unique silica sand won't stick to your skin and actually cools the water temperature.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Enter the water at the northern end where a natural channel provides deeper water and protection from any afternoon breezes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Snorkeling the Fringing Reefs</h4>
                    <p className="text-gray-700 mb-2">
                      The coral gardens surrounding Whitehaven harbor colorful parrotfish, Maori wrasse, and green sea turtles. The relatively shallow reef systems (3-8 meters) provide perfect conditions for novice snorkelers while still offering enough biodiversity to captivate experienced underwater explorers.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Bring biodegradable sunscreen only – the pristine ecosystem here is protected, and reef-safe products help preserve this underwater paradise.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bushwalking Through Ancient Rainforest</h4>
                    <p className="text-gray-700 mb-2">
                      Explore the interior hiking trails through million-year-old Melaleuca and Casuarina forests. These peaceful walks offer glimpses of native wildlife including wallabies, goannas, and over 150 bird species, providing perfect contrast to the beach's open beauty.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Early morning walks offer the best wildlife viewing opportunities and cooler temperatures before the day heats up.
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
                    <h4 className="font-semibold">Barramundi BBQ</h4>
                    <p className="text-gray-700">
                      Fresh-caught Australian barramundi grilled over eucalyptus coals with native pepper berry seasoning. Many sailing charters offer beachside BBQs where this local delicacy is prepared right on Whitehaven's pristine sand.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Pavlova with Tropical Fruits</h4>
                    <p className="text-gray-700">
                      Australia's signature dessert featuring crispy meringue topped with fresh passion fruit, mango, and kiwi. Beach picnic versions served by luxury tour operators showcase the best local tropical produce.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Aussie Meat Pies</h4>
                    <p className="text-gray-700">
                      Flaky pastry filled with seasoned ground beef and gravy – the perfect handheld meal for beach excursions. Available at Airlie Beach bakeries before departure or from tour boat galleys.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Lamington Slice</h4>
                    <p className="text-gray-700">
                      Sponge cake coated in chocolate and coconut, perfect with billy tea (traditional Australian campfire tea). A sweet ending to beach picnics with quintessential Aussie flavors.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  The Whitsundays region celebrates its maritime heritage through the annual Airlie Beach Festival of Music in November, where indigenous didgeridoo performances and contemporary Australian music create a soundtrack to your tropical adventure. Local Aboriginal culture is honored through guided walks that share traditional knowledge about the land and sea connections.
                </p>
              </CardContent>
            </Card>

            {/* Tide & Wave Forecast */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Waves className="w-5 h-5 mr-2 text-blue-500" />
                  🌊 Tide & Wave Forecast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tideData.map((data, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{data.day}</span>
                      <span className="text-indigo-500">{data.tide}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getWaveStatusColor(data.status)}`}>
                        {data.status}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Insider tip: plan your Hill Inlet visit during low tide for the most dramatic swirling sand patterns.
                </p>
              </CardContent>
            </Card>

            {/* Local Events Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  🎉 Local Events Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {localEvents.map((event, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {event.date} – {event.description}
                        </p>
                      </div>
                      <button 
                        onClick={() => handleAddEventToPlan(event.title)}
                        className="text-teal-500 hover:underline text-sm whitespace-nowrap ml-4"
                      >
                        Add to Plan
                      </button>
                    </div>
                  ))}
                </div>
                <Button
                  className="mt-4 w-full bg-teal-500 text-white hover:bg-teal-600"
                  onClick={() => {
                    toast({
                      title: "Coming Soon!",
                      description: "Full calendar feature is being developed.",
                    });
                  }}
                >
                  View Full Calendar
                </Button>
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
                  <strong>Entry:</strong> Marine park fees included in tour prices
                </div>
                <div>
                  <strong>Facilities:</strong> No permanent facilities - wilderness area
                </div>
                <div>
                  <strong>Safety:</strong> No lifeguards, swim with tour groups only
                </div>
                <div>
                  <strong>Access:</strong> Boat/helicopter/seaplane only
                </div>
                <div>
                  <strong>Camping:</strong> Permitted with permits, limited facilities
                </div>
                <div>
                  <strong>Environment:</strong> Protected national park, take only photos
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
                    <div className="text-2xl font-bold text-blue-600">75°F</div>
                    <div className="text-sm">Partly Cloudy, SE Winds</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Today's Tide</div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-600">Low: 11:45 AM</div>
                    <div className="text-sm">Best for Hill Inlet viewing</div>
                  </div>
                </div>

                <Button 
                  onClick={handlePlanToggle}
                  variant={isPlanned ? "default" : "outline"}
                  className={`w-full ${isPlanned 
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {isPlanned ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Added
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Add to My Plan
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={() => setIsToursDrawerOpen(true)}
                  variant="outline" 
                  className="w-full"
                >
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
                    <span>Hill Inlet Lookout</span>
                    <span className="text-gray-500">0.8 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hamilton Island</span>
                    <span className="text-gray-500">12 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heart Reef</span>
                    <span className="text-gray-500">45 mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Experience Pure Wilderness</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whitehaven Beach offers more than just stunning beauty – it's a journey into one of the world's last untouched wildernesses where every grain of silica sand tells a million-year story. Pack your spirit of adventure and prepare to witness nature's masterpiece in the heart of the Great Barrier Reef Marine Park, where memories are as pristine as the landscape itself.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Modals and Drawers */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      <ToursDrawer
        isOpen={isToursDrawerOpen}
        onClose={() => setIsToursDrawerOpen(false)}
        beachName={beachName}
        activities={activities}
      />
    </div>
  );
};

export default PlanWhitehavenBeach;
