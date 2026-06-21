// Rich content for beaches that don't have a hand-built plan page.
// Keyed by the slug used in the route (/plan/:slug).

export interface BeachActivity {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  bookingUrl: string;
}

export interface BeachDetail {
  slug: string;
  name: string;
  country: string;
  heroImage: string;
  intro: string;
  addedToast: string;
  howToGetThere: string[];
  insiderTip: string;
  bestTime: string[];
  activities: { title: string; description: string; tip: string }[];
  localEats: { name: string; description: string }[];
  eatsNote: string;
  tideData: { day: string; tide: string; waveHeight: number; status: string }[];
  localEvents: { title: string; date: string; description: string }[];
  travelEssentials: { label: string; value: string }[];
  weather: { temp: string; condition: string };
  todaysTide: string;
  nearby: { name: string; distance: string }[];
  cta: string;
  tours: BeachActivity[];
}

export const beachDetails: Record<string, BeachDetail> = {
  'bora-bora': {
    slug: 'bora-bora',
    name: 'Bora Bora Beach',
    country: 'French Polynesia',
    heroImage:
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    intro:
      'Crowned by the dramatic peak of Mount Otemanu, Bora Bora is the South Pacific dream made real. Iconic overwater bungalows float above a lagoon so vividly turquoise it looks digitally enhanced, while powder-soft beaches and warm, glassy waters create the ultimate romantic escape.',
    addedToast: 'Bora Bora added to your plan.',
    howToGetThere: [
      'All journeys begin at Faaa International Airport (PPT) in Tahiti, served by Air Tahiti Nui, French Bee, and Air France with connections from Los Angeles, Paris, Auckland, and Tokyo. From Tahiti, a scenic 50-minute Air Tahiti flight whisks you over the lagoon to Bora Bora Airport (BOB), set on its own private islet (motu).',
      'From the airport, every resort arranges a complimentary or paid boat transfer directly across the lagoon — often the most beautiful "shuttle ride" of your life. Public water taxis to Vaitape, the main village, run regularly for those staying off-resort.',
    ],
    insiderTip:
      'Insider Tip: Request a left-side window seat on the Tahiti-to-Bora Bora flight for an unforgettable aerial view of the famous ring-shaped lagoon and Mount Otemanu.',
    bestTime: [
      'The dry season (May to October) is the sweet spot, with sunny skies, lower humidity, and water temperatures around 79°F — perfect for snorkeling and diving. This is peak season, so book resorts months in advance.',
      'The wet season (November to April) brings warmer temperatures, occasional short tropical downpours, and noticeably lower rates. The lagoon stays calm and swimmable year-round, and the lush green hillsides are at their most vivid after rain.',
      'Pack reef-safe sunscreen, water shoes for coral, and a light rain layer if visiting in the green season. The equatorial sun is intense over the bright lagoon.',
    ],
    activities: [
      {
        title: 'Lagoon Snorkel & Ray Encounter',
        description:
          'Glide over coral gardens teeming with parrotfish, then wade into shallow sandbanks to meet gentle stingrays and blacktip reef sharks alongside expert Polynesian guides.',
        tip: 'Morning tours offer the calmest, clearest water and the best light for underwater photos.',
      },
      {
        title: 'Mount Otemanu 4x4 Safari',
        description:
          'Bounce up jungle tracks to panoramic viewpoints, World War II cannon sites, and hidden vanilla plantations while learning the island\u2019s legends from local drivers.',
        tip: 'Bring sturdy shoes and a camera — the ridge-top lagoon views are the best on the island.',
      },
      {
        title: 'Sunset Outrigger Cruise',
        description:
          'Sail a traditional Polynesian outrigger canoe across the lagoon as the sky melts into fire behind Mount Otemanu, with fresh fruit and local music aboard.',
        tip: 'Couples should request the private outrigger option for an unforgettable proposal-worthy moment.',
      },
    ],
    localEats: [
      {
        name: 'Poisson Cru',
        description:
          'Tahiti\u2019s national dish of raw tuna marinated in lime juice and creamy coconut milk with crunchy vegetables. Sample it beachside at Bloody Mary\u2019s or any lagoon-front roulotte.',
      },
      {
        name: 'Roulotte Plate Lunch',
        description:
          'Vaitape\u2019s food trucks serve grilled mahi-mahi, chow mein, and steak frites at honest prices — a delicious break from resort dining.',
      },
      {
        name: 'Tahitian Vanilla Desserts',
        description:
          'Bora Bora\u2019s prized vanilla flavors everything from crème brûlée to ice cream. Don\u2019t miss vanilla-glazed banana po\u2019e, a baked Polynesian pudding.',
      },
    ],
    eatsNote:
      'For an authentic taste of island life, join a traditional ahima\u2019a feast where pork, fish, and breadfruit are slow-cooked in an underground oven and served with live ukulele and dance.',
    tideData: [
      { day: 'Today', tide: 'High: 1:10 PM', waveHeight: 0.6, status: 'Safe' },
      { day: 'Tomorrow', tide: 'High: 1:55 PM', waveHeight: 0.8, status: 'Safe' },
      { day: 'Thursday', tide: 'High: 2:40 PM', waveHeight: 1.1, status: 'Safe' },
      { day: 'Friday', tide: 'High: 3:25 PM', waveHeight: 1.6, status: 'Caution' },
    ],
    localEvents: [
      { title: 'Heiva i Bora Bora', date: 'July', description: 'Polynesia\u2019s biggest cultural festival of dance and canoe races' },
      { title: 'Hawaiki Nui Va\u2019a', date: 'November', description: 'Legendary inter-island outrigger canoe race finale' },
      { title: 'Full Moon Lagoon Dinner', date: 'Monthly', description: 'Beachfront feast under the stars with fire dancers' },
      { title: 'Sunset Ukulele Nights', date: 'Every Friday', description: 'Live Tahitian music on the beach' },
    ],
    travelEssentials: [
      { label: 'Entry', value: 'Lagoon beaches are resort-access; public beach at Matira Point is free' },
      { label: 'Facilities', value: 'Resort amenities; limited public restrooms at Matira' },
      { label: 'Safety', value: 'Calm lagoon, no lifeguards — watch for coral' },
      { label: 'Currency', value: 'CFP Franc (XPF); cards accepted at resorts' },
      { label: 'Getting around', value: 'Boat transfers, rental bikes, and 4x4 tours' },
    ],
    weather: { temp: '84°F', condition: 'Sunny, Light Breeze' },
    todaysTide: 'High: 1:10 PM',
    nearby: [
      { name: 'Matira Beach', distance: '1.5 mi' },
      { name: 'Coral Gardens', distance: '0.5 mi' },
      { name: 'Mount Otemanu', distance: '3.0 mi' },
    ],
    cta:
      'Bora Bora isn\u2019t just a beach — it\u2019s the place where time slows, worries dissolve, and every sunset feels like a private show. Come for the overwater luxury and stay for the warm Polynesian soul of the islands.',
    tours: [
      { id: '1', name: 'Lagoon Snorkel & Ray Encounter', duration: '3 hours', price: 110, description: 'Snorkel coral gardens and meet stingrays and reef sharks with local guides.', bookingUrl: 'https://example.com/book' },
      { id: '2', name: 'Mount Otemanu 4x4 Safari', duration: 'Half day', price: 95, description: 'Off-road jungle tour to panoramic viewpoints and historic sites.', bookingUrl: 'https://example.com/book' },
      { id: '3', name: 'Sunset Outrigger Cruise', duration: '2 hours', price: 80, description: 'Traditional canoe cruise across the lagoon at golden hour.', bookingUrl: 'https://example.com/book' },
    ],
  },

  maldives: {
    slug: 'maldives',
    name: 'Maldives Beach',
    country: 'Maldives',
    heroImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    intro:
      'Scattered like pearls across the Indian Ocean, the Maldives is a constellation of 1,000+ coral islands ringed by blindingly white sand and warm, glass-clear lagoons. Private-island resorts, world-class diving, and bioluminescent shores make it the definition of barefoot luxury.',
    addedToast: 'Maldives added to your plan.',
    howToGetThere: [
      'International flights land at Velana International Airport (MLE) near the capital Malé, with direct service from Dubai, Doha, Istanbul, Singapore, and London. From there, your resort arranges onward transfer — a speedboat for nearby islands or a thrilling seaplane flight for far-flung atolls.',
      'Seaplane transfers (operated by Trans Maldivian Airways) only fly in daylight, so plan flight arrivals accordingly. Speedboats run day or night and suit resorts within roughly an hour of Malé.',
    ],
    insiderTip:
      'Insider Tip: Book the seaplane transfer even if pricier — the aerial view of turquoise atolls and ring reefs is a once-in-a-lifetime sight you\u2019ll never forget.',
    bestTime: [
      'The dry northeast monsoon (November to April) brings sunny skies, low humidity, and superb underwater visibility — ideal for diving and snorkeling. This is high season with premium rates and lively reefs.',
      'The wet southwest monsoon (May to October) sees short, intense showers, fewer crowds, and lower prices. This is also manta ray and whale shark season on the western atolls, a draw for divers.',
      'Bring reef-safe sunscreen, a rash guard for sun protection, and an underwater camera. Modest cover-up is appreciated when visiting local (non-resort) islands.',
    ],
    activities: [
      {
        title: 'Manta Ray & Whale Shark Snorkel',
        description:
          'Cruise to plankton-rich channels where giant manta rays and gentle whale sharks glide beneath you — a humbling encounter with the ocean\u2019s biggest residents.',
        tip: 'Baa Atoll\u2019s Hanifaru Bay (June\u2013November) offers the densest manta gatherings on Earth.',
      },
      {
        title: 'House Reef Scuba Diving',
        description:
          'Drop straight off your resort\u2019s sandbank into vertical coral walls alive with turtles, reef sharks, and clouds of tropical fish.',
        tip: 'Many resorts offer a free try-dive in the lagoon — perfect for first-timers.',
      },
      {
        title: 'Bioluminescent Beach Walk',
        description:
          'On the right nights, plankton light the shoreline with electric-blue sparkles, turning a midnight stroll into a walk among the stars.',
        tip: 'Visit on a dark, moonless night for the most vivid \u201csea of stars\u201d glow.',
      },
    ],
    localEats: [
      { name: 'Mas Huni', description: 'The classic Maldivian breakfast of shredded smoked tuna, coconut, onion, and chili, scooped up with warm flatbread (roshi).' },
      { name: 'Garudhiya', description: 'A fragrant clear tuna broth served with rice, lime, and chili — simple, soulful island comfort food.' },
      { name: 'Bis Keemiya', description: 'Crispy pastry parcels filled with tuna, cabbage, and egg, the Maldives\u2019 favorite teatime snack (hedhikaa).' },
    ],
    eatsNote:
      'Visit a local island for an authentic "hedhikaa" tea spread, or book a private sandbank dinner where your resort sets a candlelit table on a tiny strip of sand surrounded by ocean.',
    tideData: [
      { day: 'Today', tide: 'High: 12:40 PM', waveHeight: 0.5, status: 'Safe' },
      { day: 'Tomorrow', tide: 'High: 1:20 PM', waveHeight: 0.7, status: 'Safe' },
      { day: 'Thursday', tide: 'High: 2:05 PM', waveHeight: 1.0, status: 'Safe' },
      { day: 'Friday', tide: 'High: 2:50 PM', waveHeight: 1.4, status: 'Caution' },
    ],
    localEvents: [
      { title: 'Hanifaru Manta Season', date: 'Jun\u2013Nov', description: 'Peak gatherings of manta rays in Baa Atoll' },
      { title: 'Eid Island Celebrations', date: 'Varies', description: 'Music, "bodu beru" drumming, and feasts on local islands' },
      { title: 'Full Moon Sandbank Dinner', date: 'Monthly', description: 'Private candlelit dining on a remote sandbank' },
      { title: 'Sunset Dhoni Cruise', date: 'Daily', description: 'Traditional boat cruise with dolphin spotting' },
    ],
    travelEssentials: [
      { label: 'Entry', value: 'Resort beaches private; bikini beaches on local islands' },
      { label: 'Facilities', value: 'Full resort amenities; basic services on local islands' },
      { label: 'Safety', value: 'Calm lagoons; mind currents in reef channels' },
      { label: 'Currency', value: 'Maldivian Rufiyaa (MVR); USD widely accepted' },
      { label: 'Getting around', value: 'Seaplanes, speedboats, and traditional dhonis' },
    ],
    weather: { temp: '86°F', condition: 'Sunny, Humid' },
    todaysTide: 'High: 12:40 PM',
    nearby: [
      { name: 'House Reef', distance: '0.1 mi' },
      { name: 'Sandbank Picnic Spot', distance: '1.2 mi' },
      { name: 'Local Island', distance: '4.0 mi' },
    ],
    cta:
      'The Maldives is where the horizon disappears and sea blends into sky. Whether you come to dive with mantas or simply do nothing beautifully, these islands redefine what paradise can be.',
    tours: [
      { id: '1', name: 'Manta & Whale Shark Snorkel', duration: 'Full day', price: 140, description: 'Boat trip to snorkel with mantas and whale sharks.', bookingUrl: 'https://example.com/book' },
      { id: '2', name: 'House Reef Scuba Dive', duration: '2 hours', price: 95, description: 'Guided wall dive teeming with turtles and reef fish.', bookingUrl: 'https://example.com/book' },
      { id: '3', name: 'Sunset Dolphin Cruise', duration: '2 hours', price: 70, description: 'Traditional dhoni cruise with dolphins at golden hour.', bookingUrl: 'https://example.com/book' },
    ],
  },

  'playa-norte': {
    slug: 'playa-norte',
    name: 'Playa Norte',
    country: 'Mexico',
    heroImage:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    intro:
      'Perched on the northern tip of Isla Mujeres, Playa Norte is a laid-back Caribbean gem where shallow, bath-warm water stretches far from shore and powder-white sand meets swaying palms. It\u2019s famously safe, family-friendly, and home to some of the best sunsets in the Mexican Caribbean.',
    addedToast: 'Playa Norte added to your plan.',
    howToGetThere: [
      'Fly into Cancún International Airport (CUN), then take a taxi or shuttle (about 25 minutes) to the Puerto Juárez or Gran Puerto ferry terminal. From there, Ultramar ferries reach Isla Mujeres in roughly 20 minutes, running frequently throughout the day.',
      'Once on the island, Playa Norte is a short walk or golf-cart ride from the ferry dock. Renting a golf cart (around $45\u201355/day) is the classic way to explore the whole island at a leisurely pace.',
    ],
    insiderTip:
      'Insider Tip: Catch the first morning ferry to claim a prime palm-shaded spot — Playa Norte\u2019s gentle, knee-deep water is gloriously empty before mid-morning.',
    bestTime: [
      'The dry season (December to April) delivers postcard-perfect weather with low humidity and calm seas — ideal beach days, though busier and pricier around the holidays.',
      'May and June offer warm water, fewer crowds, and good value before the summer rush. The hurricane season peak (August to October) can bring afternoon storms, so watch the forecast.',
      'Pack reef-safe sunscreen, water shoes are optional thanks to the soft sandy bottom, and bring cash for beach clubs and golf-cart rentals.',
    ],
    activities: [
      {
        title: 'Snorkeling at MUSA Underwater Museum',
        description:
          'Drift over hundreds of haunting submerged sculptures that double as an artificial reef, now home to colorful fish and corals between Isla Mujeres and Cancún.',
        tip: 'Choose a morning tour for calm seas and the clearest visibility over the statues.',
      },
      {
        title: 'Golf Cart Island Loop',
        description:
          'Cruise the scenic coastal road to Punta Sur, the island\u2019s southern cliffs, sculpture park, and the easternmost point of Mexico with dramatic ocean views.',
        tip: 'Stop at Punta Sur early to beat tour-bus crowds and catch the best light.',
      },
      {
        title: 'Whale Shark Snorkel Safari',
        description:
          'From June to September, boats head offshore to swim alongside gentle whale sharks — the world\u2019s largest fish — in one of the planet\u2019s biggest seasonal gatherings.',
        tip: 'Book a small-group tour for a more personal, less crowded encounter.',
      },
    ],
    localEats: [
      { name: 'Tikin Xic Fish', description: 'Whole fish marinated in achiote and sour orange, wrapped in banana leaf and grilled — a Yucatán Maya specialty served at beachfront palapas.' },
      { name: 'Ceviche & Aguachile', description: 'Fresh-caught fish and shrimp cured in lime with chili and cilantro, best enjoyed with a cold cerveza on the sand.' },
      { name: 'Marquesitas', description: 'Crispy rolled crepes filled with cheese and Nutella or cajeta — Yucatán\u2019s beloved street-food dessert from the town plaza.' },
    ],
    eatsNote:
      'Wander into the town center (centro) at night for buzzing taco stands, live music, and the colorful main plaza where locals and visitors mingle — the warm island hospitality is contagious.',
    tideData: [
      { day: 'Today', tide: 'High: 11:50 AM', waveHeight: 0.4, status: 'Safe' },
      { day: 'Tomorrow', tide: 'High: 12:35 PM', waveHeight: 0.7, status: 'Safe' },
      { day: 'Thursday', tide: 'High: 1:20 PM', waveHeight: 0.9, status: 'Safe' },
      { day: 'Friday', tide: 'High: 2:05 PM', waveHeight: 1.3, status: 'Caution' },
    ],
    localEvents: [
      { title: 'Whale Shark Festival', date: 'July', description: 'Celebrating the season\u2019s gentle giants with music and food' },
      { title: 'Día de los Muertos', date: 'Nov 1\u20132', description: 'Vibrant altars, processions, and cultural celebrations' },
      { title: 'Sunset Beach Party', date: 'Weekly', description: 'Live DJ and fire dancers on Playa Norte' },
      { title: 'Isla Mujeres Carnival', date: 'February', description: 'Colorful parades and street dancing' },
    ],
    travelEssentials: [
      { label: 'Entry', value: 'Free public beach access' },
      { label: 'Facilities', value: 'Beach clubs, restrooms, loungers, and bars' },
      { label: 'Safety', value: 'Very calm, shallow water — great for kids' },
      { label: 'Currency', value: 'Mexican Peso (MXN); USD often accepted' },
      { label: 'Getting around', value: 'Golf carts, bikes, and walking' },
    ],
    weather: { temp: '85°F', condition: 'Sunny, Gentle Breeze' },
    todaysTide: 'High: 11:50 AM',
    nearby: [
      { name: 'Punta Sur', distance: '4.5 mi' },
      { name: 'MUSA Underwater Museum', distance: '2.0 mi' },
      { name: 'Town Center (Centro)', distance: '0.4 mi' },
    ],
    cta:
      'Playa Norte is the Caribbean at its most carefree — warm shallow water, swaying palms, and sunsets that turn the whole sky gold. Slow down, kick off your sandals, and let island time take over.',
    tours: [
      { id: '1', name: 'MUSA Snorkel Tour', duration: '3 hours', price: 65, description: 'Snorkel the underwater sculpture museum and nearby reefs.', bookingUrl: 'https://example.com/book' },
      { id: '2', name: 'Whale Shark Safari', duration: 'Half day', price: 125, description: 'Swim alongside whale sharks in season (Jun\u2013Sep).', bookingUrl: 'https://example.com/book' },
      { id: '3', name: 'Golf Cart Island Tour', duration: 'Full day', price: 50, description: 'Self-guided golf cart rental to explore the whole island.', bookingUrl: 'https://example.com/book' },
    ],
  },

  'seven-mile-beach': {
    slug: 'seven-mile-beach',
    name: 'Seven Mile Beach',
    country: 'Jamaica',
    heroImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    intro:
      'Stretching along the laid-back town of Negril, Jamaica\u2019s Seven Mile Beach is an endless ribbon of golden sand, swaying palms, and warm turquoise water set to a reggae soundtrack. Famous for legendary sunsets and cliff diving at nearby Rick\u2019s Café, it perfectly blends relaxation with island energy.',
    addedToast: 'Seven Mile Beach added to your plan.',
    howToGetThere: [
      'Most travelers fly into Sangster International Airport (MBJ) in Montego Bay. From there, Negril is about a 1.5-hour drive (roughly 50 miles) along the scenic coastal highway. Private transfers, shared shuttles, and resort pickups are all readily available.',
      'For a faster, more scenic option, charter flights and helicopter transfers land at the small Negril Aerodrome just minutes from the beach. Within Negril, taxis (agree on the fare first) and bicycle rentals make getting around easy.',
    ],
    insiderTip:
      'Insider Tip: Time your arrival for late afternoon so your first evening ends with a famous Negril sunset and cliff divers silhouetted against the orange sky at Rick\u2019s Café.',
    bestTime: [
      'The dry season (December to April) brings sunshine, lower humidity, and calm seas — peak season with lively beaches and higher rates, especially around the holidays.',
      'Late spring and early summer (May to June) offer warm water, thinner crowds, and better value. The wetter months (September to November) see brief afternoon showers but the most lush, green landscapes.',
      'Pack reef-safe sunscreen, a hat, and light clothing for warm evenings — and bring a relaxed attitude, because in Negril, everything runs on island time.',
    ],
    activities: [
      {
        title: 'Cliff Diving at Rick\u2019s Café',
        description:
          'Watch (or join) brave divers leap from cliffs up to 35 feet into the clear Caribbean while a live band plays and the sun sinks into the sea — Negril\u2019s most iconic experience.',
        tip: 'Arrive an hour before sunset to grab a cliffside table for the best show.',
      },
      {
        title: 'Snorkeling & Reef Tours',
        description:
          'Explore vibrant coral reefs just offshore, alive with parrotfish, sergeant majors, and the occasional sea turtle in warm, calm, shallow water.',
        tip: 'The reef near the marine park offers the healthiest coral and clearest visibility.',
      },
      {
        title: 'Catamaran Sunset Cruise',
        description:
          'Sail the coastline with rum punch in hand, stopping to snorkel and swim before drifting back as the sky erupts in Caribbean color.',
        tip: 'Choose a cruise that includes the Negril cliffs route for the most dramatic scenery.',
      },
    ],
    localEats: [
      { name: 'Jerk Chicken & Pork', description: 'Smoky, fiery jerk meat slow-cooked over pimento wood at beach shacks and roadside drum grills — Jamaica\u2019s signature flavor.' },
      { name: 'Fresh Grilled Lobster', description: 'Negril is famed for spiny lobster grilled with garlic butter and served right on the sand at sunset.' },
      { name: 'Festival & Bammy', description: 'Sweet fried dumplings (festival) and cassava flatbread (bammy) — the perfect sides to fresh-caught fish.' },
    ],
    eatsNote:
      'Don\u2019t miss a cold Red Stripe or fresh coconut water from a beach vendor, and seek out a local "cook shop" for the most authentic, soulful Jamaican home cooking with live reggae in the background.',
    tideData: [
      { day: 'Today', tide: 'High: 2:00 PM', waveHeight: 0.8, status: 'Safe' },
      { day: 'Tomorrow', tide: 'High: 2:45 PM', waveHeight: 1.2, status: 'Safe' },
      { day: 'Thursday', tide: 'High: 3:30 PM', waveHeight: 1.7, status: 'Caution' },
      { day: 'Friday', tide: 'High: 4:15 PM', waveHeight: 2.0, status: 'Caution' },
    ],
    localEvents: [
      { title: 'Reggae Sumfest', date: 'July', description: 'Jamaica\u2019s biggest music festival, a short trip away in Montego Bay' },
      { title: 'Negril Sunset Cliff Show', date: 'Daily', description: 'Cliff diving and live music at Rick\u2019s Café' },
      { title: 'Beach Bonfire Party', date: 'Weekly', description: 'Drumming, dancing, and fire shows on the sand' },
      { title: 'Rastafari Cultural Day', date: 'Monthly', description: 'Crafts, music, and traditional Ital cuisine' },
    ],
    travelEssentials: [
      { label: 'Entry', value: 'Free public beach access along the strip' },
      { label: 'Facilities', value: 'Beach bars, restaurants, loungers, and water sports' },
      { label: 'Safety', value: 'Generally calm; some areas have no lifeguards' },
      { label: 'Currency', value: 'Jamaican Dollar (JMD); USD widely accepted' },
      { label: 'Getting around', value: 'Taxis, bikes, and walking the beach strip' },
    ],
    weather: { temp: '87°F', condition: 'Sunny, Warm Breeze' },
    todaysTide: 'High: 2:00 PM',
    nearby: [
      { name: 'Rick\u2019s Café', distance: '3.5 mi' },
      { name: 'Negril Cliffs', distance: '3.0 mi' },
      { name: 'Booby Cay Island', distance: '1.0 mi' },
    ],
    cta:
      'Seven Mile Beach is Jamaica at its most golden — endless sand, warm water, and reggae drifting on the breeze. Come for the legendary sunsets, stay for the irresistible "no problem" island spirit.',
    tours: [
      { id: '1', name: 'Catamaran Sunset Cruise', duration: '3 hours', price: 75, description: 'Coastal sail with snorkeling, rum punch, and sunset at the cliffs.', bookingUrl: 'https://example.com/book' },
      { id: '2', name: 'Reef Snorkel Tour', duration: '2 hours', price: 50, description: 'Guided snorkel over Negril\u2019s vibrant offshore reefs.', bookingUrl: 'https://example.com/book' },
      { id: '3', name: 'Rick\u2019s Café Cliff Experience', duration: 'Evening', price: 40, description: 'Transfer and entry to the famous cliff-diving sunset spot.', bookingUrl: 'https://example.com/book' },
    ],
  },
};
