
import React from 'react';
import { ArrowLeft, MapPin, Clock, Sun, Utensils, Info, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PlanNavagioBeach = () => {
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
          src="https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Navagio Beach dramatic limestone cliffs and shipwreck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Navagio Beach</h1>
          <h2 className="text-xl md:text-2xl text-blue-100">Zakynthos, Greece</h2>
          <p className="text-lg mt-4 max-w-2xl">
            Where ancient legends meet modern wonder – dramatic white limestone cliffs cradle a hidden cove featuring the Mediterranean's most famous shipwreck. Navagio Beach embodies the raw beauty of Greek island mystique, accessible only by sea and forever etched in the memories of those who witness its breathtaking majesty.
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
                  Your Greek island adventure begins at <strong>Zakynthos International Airport (ZTH)</strong>, served by Olympic Air, Aegean Airlines, and seasonal charter flights from Athens, Thessaloniki, and major European cities including London, Rome, and Munich. The airport sits just 4 kilometers from Zakynthos Town, making it one of Greece's most convenient island gateways.
                </p>
                <p>
                  From the airport, taxi rides to Porto Vromi (the closest boat departure point) cost €25-35 and take approximately 45 minutes through scenic olive groves and traditional villages. Rental cars from Avis, Hertz, and local providers start around €25/day and offer the freedom to explore hidden monasteries and clifftop tavernas. The journey to Navagio requires a boat trip – no roads lead to this secluded paradise.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Insider Tip:</strong> Book the first boat departure at 9:00 AM from Porto Vromi to avoid crowds and capture Navagio Beach in perfect morning light – the limestone cliffs reflect golden hues that transform the entire cove into a photographer's dream.
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
                  Navagio Beach showcases different personalities throughout the year, each offering unique advantages for the discerning traveler. <strong>Peak season (June-August)</strong> delivers guaranteed sunshine with temperatures reaching 85-90°F and calm Ionian Sea conditions perfect for swimming and cliff diving. However, this is when the iconic beach becomes most crowded, with boats arriving every 15 minutes during midday hours.
                </p>
                <p>
                  <strong>Shoulder seasons (April-May, September-October)</strong> present the ideal balance for photographers and romantics – fewer crowds, pleasant 70-80°F temperatures, and dramatic spring wildflowers or autumn light that enhances the limestone cliff contrasts. <strong>Winter months (November-March)</strong> bring occasional storms that create spectacular wave action against the cliffs, though boat access becomes weather-dependent.
                </p>
                <p>
                  Pack high-SPF sunscreen (the white limestone amplifies UV rays), sturdy water shoes for rocky entry points, and layers for boat rides – Mediterranean winds can be surprisingly cool even on warm days. A waterproof phone case is essential for capturing the shipwreck from water level.
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
                    <h4 className="font-semibold text-lg mb-2">Shipwreck Photography & Exploration</h4>
                    <p className="text-gray-700 mb-2">
                      The MV Panagiotis, wrecked in 1980, creates one of the world's most dramatic beach scenes. The rusting hulk against pristine white pebbles and turquoise waters offers endless photographic opportunities, while swimming around the wreck reveals marine life that has made the ship their artificial reef home.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Position yourself at the ship's stern for the classic postcard shot with the limestone cliffs as backdrop – late morning light illuminates the entire scene perfectly.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Cliff-Top Viewpoint Adventure</h4>
                    <p className="text-gray-700 mb-2">
                      The viewing platform 200 meters above Navagio Beach provides one of Greece's most breathtaking panoramas. The dramatic perspective reveals the beach's perfect crescent shape, the shipwreck's scale, and the incredible color gradations of the Ionian Sea from deep sapphire to crystalline turquoise.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Visit both sunrise and sunset – morning light illuminates the beach below while evening creates silhouette magic against the western horizon.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sea Cave Kayaking Expedition</h4>
                    <p className="text-gray-700 mb-2">
                      Explore the hidden sea caves and grottos carved into Zakynthos' western coastline. These azure-blue caverns, accessible only by kayak or small boat, feature underwater chambers where sunlight creates ethereal light shows through submerged openings.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Book afternoon tours when the sun angle creates the most dramatic blue lighting effects inside the larger caves.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Swimming in Crystalline Waters</h4>
                    <p className="text-gray-700 mb-2">
                      The protected cove offers some of the Mediterranean's clearest waters, with visibility often exceeding 40 meters. The unique white limestone pebble beach reflects light upward, creating an almost luminescent swimming experience unlike anywhere else in Greece.
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Insider tip: Enter the water near the cliff base where natural springs keep the temperature slightly cooler and the clarity absolutely perfect.
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
                    <h4 className="font-semibold">Fresh Grilled Octopus</h4>
                    <p className="text-gray-700">
                      Tender octopus charred over olive wood and drizzled with Zakynthian olive oil, oregano, and lemon. Waterfront tavernas in Porto Vromi serve this local specialty with stunning views of the departure point for Navagio boats.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Souvlaki with Zakynthian Pork</h4>
                    <p className="text-gray-700">
                      Locally-raised pork marinated in herbs and grilled to perfection, served with warm pita, tzatziki, and tomatoes. The mountain village of Anafonitria offers authentic versions in family-run tavernas near the Navagio viewpoint.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Mandolato (Venetian Nougat)</h4>
                    <p className="text-gray-700">
                      Traditional almond and honey nougat inherited from Venetian rule, flavored with local kumquat. Zakynthos Town's confectioneries have perfected this recipe over centuries, creating the perfect sweet ending to cliff-side picnics.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Avgotaracho (Bottarga)</h4>
                    <p className="text-gray-700">
                      Cured fish roe delicacy from Zakynthos' salt lakes, thinly sliced and drizzled with olive oil over pasta or rusks. This gourmet speciality represents the island's sophisticated culinary heritage.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Zakynthos celebrates its patron saint, Agios Dionysios, every August with a week-long festival featuring traditional music, dancing, and religious processions through cobblestone streets. The island's rich Venetian and British colonial history creates a unique cultural blend visible in architecture, language, and customs that distinguish it from other Greek islands.
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
                  <strong>Entry:</strong> Free, accessible by boat only
                </div>
                <div>
                  <strong>Facilities:</strong> No permanent facilities on beach
                </div>
                <div>
                  <strong>Safety:</strong> No lifeguards, strong currents possible
                </div>
                <div>
                  <strong>Boat Access:</strong> €15-25 round trip from Porto Vromi
                </div>
                <div>
                  <strong>Viewpoint:</strong> Free parking, 10-minute walk to platform
                </div>
                <div>
                  <strong>Best Time:</strong> 9 AM - 11 AM for fewer crowds
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
                    <div className="text-2xl font-bold text-blue-600">78°F</div>
                    <div className="text-sm">Clear Skies, Light Winds</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Sea Conditions</div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-600">Calm Seas</div>
                    <div className="text-sm">Perfect for boat trips</div>
                  </div>
                </div>

                <Button 
                  onClick={() => addToPlan('/plan/navagio-beach')}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                  Add to My Plan
                </Button>
                
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Boat Tours
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
                    <span>Porto Vromi Maris</span>
                    <span className="text-gray-500">1.2 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blue Caves</span>
                    <span className="text-gray-500">3.8 mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anafonitria Monastery</span>
                    <span className="text-gray-500">4.5 mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Discover Mediterranean Magic</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navagio Beach isn't just a destination – it's a pilgrimage to one of nature's most dramatic masterpieces where limestone cliffs guard ancient secrets and crystalline waters reveal underwater wonders. Pack your sense of adventure and prepare to witness the legendary beauty that has inspired countless travelers to call this hidden Greek paradise the most beautiful beach on Earth.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlanNavagioBeach;
