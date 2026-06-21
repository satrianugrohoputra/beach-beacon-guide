import React, { useState } from 'react';
import { ArrowLeft, MapPin, Sun, Utensils, Info, Calendar, ExternalLink, Plus, Check, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useParams } from 'react-router-dom';
import { usePlanContext } from '@/contexts/PlanContext';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import AuthModal from '@/components/AuthModal';
import ToursDrawer from '@/components/ToursDrawer';
import Custom404Page from '@/pages/Custom404Page';
import { beachDetails } from '@/data/beachDetails';

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

const PlanBeach = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isToursDrawerOpen, setIsToursDrawerOpen] = useState(false);
  const { addToPlan, removeFromPlan, isInPlan } = usePlanContext();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const detail = slug ? beachDetails[slug] : undefined;

  if (!detail) {
    return <Custom404Page />;
  }

  const isPlanned = isInPlan(detail.slug);

  const handlePlanToggle = () => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    if (isPlanned) {
      removeFromPlan(detail.slug);
      toast({
        title: 'Removed from your plan',
        description: `${detail.name} has been removed from your travel plan.`,
      });
    } else {
      addToPlan(detail.slug);
      toast({
        title: `Ready! ${detail.addedToast}`,
        description: 'Start planning your perfect beach getaway.',
      });
    }
  };

  const handleAddEventToPlan = (eventTitle: string) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    toast({
      title: 'Event added to plan!',
      description: `${eventTitle} has been added to your itinerary.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
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
          src={detail.heroImage}
          alt={`${detail.name} panoramic view`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{detail.name}</h1>
          <h2 className="text-xl md:text-2xl text-blue-100">{detail.country}</h2>
          <p className="text-lg mt-4 max-w-2xl">{detail.intro}</p>
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
                {detail.howToGetThere.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">{detail.insiderTip}</p>
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
                {detail.bestTime.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
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
                  {detail.activities.map((act, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-lg mb-2">{act.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{act.description}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{act.tip}</p>
                    </div>
                  ))}
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
                  {detail.localEats.map((eat, i) => (
                    <div key={i}>
                      <h4 className="font-semibold">{eat.name}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{eat.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4">{detail.eatsNote}</p>
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
                  {detail.tideData.map((data, index) => (
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
                  Insider tip: plan your swim when waves are below 1.5m for calm conditions.
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
                  {detail.localEvents.map((event, index) => (
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
                  onClick={() =>
                    toast({
                      title: 'Coming Soon!',
                      description: 'Full calendar feature is being developed.',
                    })
                  }
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
                {detail.travelEssentials.map((item, i) => (
                  <div key={i}>
                    <strong>{item.label}:</strong> {item.value}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Plan Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Plan Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Current Weather</div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">{detail.weather.temp}</div>
                    <div className="text-sm">{detail.weather.condition}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Today's Tide</div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg text-center">
                    <div className="text-lg font-semibold text-green-600 dark:text-green-300">{detail.todaysTide}</div>
                    <div className="text-sm">Perfect for swimming</div>
                  </div>
                </div>

                <Button
                  onClick={handlePlanToggle}
                  variant={isPlanned ? 'default' : 'outline'}
                  className={`w-full ${
                    isPlanned
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

                <Button onClick={() => setIsToursDrawerOpen(true)} variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Tours & Activities
                </Button>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="space-y-2">
                  {detail.nearby.map((spot, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{spot.name}</span>
                      <span className="text-gray-500">{spot.distance}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Ready for Paradise?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{detail.cta}</p>
          </CardContent>
        </Card>
      </div>

      {/* Modals and Drawers */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      <ToursDrawer
        isOpen={isToursDrawerOpen}
        onClose={() => setIsToursDrawerOpen(false)}
        beachName={detail.name}
        activities={detail.tours}
      />
    </div>
  );
};

export default PlanBeach;
