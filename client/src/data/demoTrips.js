const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const DEMO_TRIPS = [
  {
    _id: "demo-trip-1",
    slug: "manali-solang-adventure-circuit",
    title: "Manali & Solang Adventure Circuit",
    subtitle: "Paragliding, mountain camps, and alpine cafe trails.",
    coverImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 5, nights: 4 },
    price: { original: 24999, discounted: 18999 },
    category: "group-tour",
    difficulty: "moderate",
    featured: true,
    rating: { average: 4.7, count: 96 },
    description:
      "A balanced mountain escape packed with outdoor thrills and relaxed Himachali evenings. Ideal for friends or first-time highland travelers.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Manali",
        description: "Check-in, riverside cafe walk, and orientation with your trek lead.",
        highlights: ["Mall Road", "Welcome dinner"],
        meals: "Dinner",
        accommodation: "Boutique stay",
      },
      {
        day: 2,
        title: "Solang Valley Adventure",
        description: "Paragliding and ATV session followed by sunset at Solang meadows.",
        highlights: ["Paragliding", "ATV ride"],
        meals: "Breakfast, Dinner",
        accommodation: "Boutique stay",
      },
      {
        day: 3,
        title: "Old Manali & Waterfall Trail",
        description: "Guided walk through Old Manali lanes and Jogini waterfall route.",
        highlights: ["Jogini trail", "Live music cafe"],
        meals: "Breakfast",
        accommodation: "Boutique stay",
      },
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast and 2 dinners",
      "Adventure activity coordination",
      "Local transfers",
    ],
    exclusions: ["Flights", "Personal shopping", "Travel insurance"],
    startDates: ["2026-03-14", "2026-03-28", "2026-04-11"],
  },
  {
    _id: "demo-trip-2",
    slug: "goa-slow-beach-retreat",
    title: "Goa Slow Beach Retreat",
    subtitle: "Sunset sails, beach hopping, and local food trails.",
    coverImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 4, nights: 3 },
    price: { original: 18999, discounted: 14999 },
    category: "weekend",
    difficulty: "easy",
    featured: true,
    rating: { average: 4.6, count: 74 },
    description:
      "A laid-back coastal getaway with clean stays, beach clubs, and enough downtime to truly relax.",
    itinerary: [
      {
        day: 1,
        title: "North Goa Arrival",
        description: "Check-in and sunset beach walk with welcome snacks.",
        highlights: ["Candolim beach", "Sunset views"],
        meals: "Dinner",
        accommodation: "Beach resort",
      },
      {
        day: 2,
        title: "Island and Water Sports",
        description: "Boat transfer, snorkeling, and optional parasailing activities.",
        highlights: ["Island hop", "Snorkeling"],
        meals: "Breakfast",
        accommodation: "Beach resort",
      },
    ],
    inclusions: ["3 nights accommodation", "Breakfast", "Local transport"],
    exclusions: ["Flights", "Personal expenses"],
    startDates: ["2026-03-21", "2026-04-04", "2026-04-18"],
  },
  {
    _id: "demo-trip-3",
    slug: "spiti-highland-expedition",
    title: "Spiti Highland Expedition",
    subtitle: "Monastery circuits and dramatic mountain roads.",
    coverImage:
      "https://images.unsplash.com/photo-1623947651432-64ad8bd6a1f4?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1623947651432-64ad8bd6a1f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Spiti", image: "https://images.unsplash.com/photo-1623947651432-64ad8bd6a1f4?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 8, nights: 7 },
    price: { original: 44999, discounted: 39999 },
    category: "backpacking",
    difficulty: "challenging",
    featured: true,
    rating: { average: 4.8, count: 121 },
    description:
      "Built for mountain lovers, this route goes deep into Spiti with acclimatized pacing and expert support.",
    itinerary: [
      {
        day: 1,
        title: "Shimla to Narkanda",
        description: "Scenic drive and acclimatization briefing.",
        highlights: ["Mountain drive", "Apple orchards"],
        meals: "Dinner",
        accommodation: "Mountain lodge",
      },
      {
        day: 2,
        title: "Narkanda to Chitkul",
        description: "Long-route drive with photo stops and village walk.",
        highlights: ["Kinnaur route", "Riverside campsite"],
        meals: "Breakfast, Dinner",
        accommodation: "Campsite",
      },
    ],
    inclusions: ["7 nights accommodation", "Breakfast and dinner", "SUV transport"],
    exclusions: ["Lunch", "Entry permits"],
    startDates: ["2026-04-10", "2026-05-02", "2026-05-23"],
  },
  {
    _id: "demo-trip-4",
    slug: "kerala-backwaters-romance",
    title: "Kerala Backwaters Romance",
    subtitle: "Houseboat nights and candlelight lake dinners.",
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1589187155479-52f8af178cf0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Alleppey", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 5, nights: 4 },
    price: { original: 32999, discounted: 27999 },
    category: "honeymoon",
    difficulty: "easy",
    featured: true,
    rating: { average: 4.9, count: 88 },
    description:
      "A private and elegant honeymoon-friendly itinerary with curated stays and serene backwater cruises.",
    itinerary: [
      {
        day: 1,
        title: "Cochin Arrival",
        description: "Airport pickup and luxury stay check-in.",
        highlights: ["Fort Kochi", "Seafood dinner"],
        meals: "Dinner",
        accommodation: "Luxury hotel",
      },
      {
        day: 2,
        title: "Houseboat Experience",
        description: "Board private houseboat for an overnight cruise.",
        highlights: ["Backwater cruise", "Sunset deck"],
        meals: "All meals",
        accommodation: "Premium houseboat",
      },
    ],
    inclusions: ["Private transfers", "Houseboat stay", "Daily breakfast"],
    exclusions: ["Flights", "Spa and premium add-ons"],
    startDates: ["2026-03-18", "2026-04-08", "2026-04-29"],
  },
  {
    _id: "demo-trip-5",
    slug: "ladakh-bike-and-camp-ride",
    title: "Ladakh Bike & Camp Ride",
    subtitle: "Iconic passes, glacial lakes, and rugged roads.",
    coverImage:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Ladakh", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 7, nights: 6 },
    price: { original: 47999, discounted: 42999 },
    category: "bike-trip",
    difficulty: "challenging",
    featured: false,
    rating: { average: 4.8, count: 69 },
    description:
      "A high-altitude bike journey for experienced riders with support vehicles and experienced captains.",
    itinerary: [
      {
        day: 1,
        title: "Leh Arrival & Briefing",
        description: "Altitude rest and route orientation.",
        highlights: ["Acclimatization", "Rider briefing"],
        meals: "Dinner",
        accommodation: "Leh hotel",
      },
    ],
    inclusions: ["Royal Enfield bike", "Road captain", "Support vehicle"],
    exclusions: ["Fuel for personal detours", "Riding gear rental"],
    startDates: ["2026-05-16", "2026-06-06"],
  },
  {
    _id: "demo-trip-6",
    slug: "rishikesh-river-rafting-camp",
    title: "Rishikesh River Rafting Camp",
    subtitle: "Rafting rapids and bonfire nights by the river.",
    coverImage:
      "https://images.unsplash.com/photo-1530866495561-507c83e4e69a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1530866495561-507c83e4e69a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Rishikesh", image: "https://images.unsplash.com/photo-1530866495561-507c83e4e69a?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 3, nights: 2 },
    price: { original: 12999, discounted: 9999 },
    category: "camping",
    difficulty: "moderate",
    featured: false,
    rating: { average: 4.5, count: 57 },
    description:
      "Quick adrenaline reset for long weekends with guided rafting and curated camp experiences.",
    itinerary: [
      {
        day: 1,
        title: "Camp Check-in",
        description: "Riverside tents, orientation, and bonfire session.",
        highlights: ["Bonfire", "Camp dinner"],
        meals: "Dinner",
        accommodation: "Swiss camp",
      },
    ],
    inclusions: ["Camp stay", "Rafting session", "Meals at camp"],
    exclusions: ["Travel to Rishikesh", "Personal activities"],
    startDates: ["2026-03-15", "2026-03-29", "2026-04-12"],
  },
  {
    _id: "demo-trip-7",
    slug: "sikkim-tea-trails-and-treks",
    title: "Sikkim Tea Trails & Treks",
    subtitle: "Misty monasteries, tea gardens, and guided day hikes.",
    coverImage:
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Sikkim", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 6, nights: 5 },
    price: { original: 35999, discounted: 31499 },
    category: "trekking",
    difficulty: "moderate",
    featured: false,
    rating: { average: 4.7, count: 42 },
    description:
      "For travelers who want scenic trek days and cultural evenings without extreme altitude pressure.",
    itinerary: [
      {
        day: 1,
        title: "Gangtok Arrival",
        description: "Hotel check-in and evening food walk.",
        highlights: ["MG Marg", "Local cuisine"],
        meals: "Dinner",
        accommodation: "Premium hotel",
      },
    ],
    inclusions: ["Hotel stays", "Intercity transport", "Local guide"],
    exclusions: ["Airfare", "Permit fees"],
    startDates: ["2026-04-19", "2026-05-10"],
  },
  {
    _id: "demo-trip-8",
    slug: "bali-island-escape",
    title: "Bali Island Escape",
    subtitle: "Waterfalls, beach clubs, and Ubud wellness retreats.",
    coverImage:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
    ],
    destination: { name: "Bali", image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80" },
    duration: { days: 6, nights: 5 },
    price: { original: 68999, discounted: 62999 },
    category: "international",
    difficulty: "easy",
    featured: true,
    rating: { average: 4.9, count: 103 },
    description:
      "An international best-seller itinerary balancing island adventure, nightlife, and curated downtime.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar",
        description: "Airport transfer and evening leisure at Seminyak.",
        highlights: ["Beach club", "Sunset dinner"],
        meals: "Dinner",
        accommodation: "Seminyak hotel",
      },
    ],
    inclusions: ["Airport transfers", "Hotel stays", "Guided day trips"],
    exclusions: ["Visa fee", "International flights"],
    startDates: ["2026-04-03", "2026-04-24", "2026-05-15"],
  },
];

const getTripPrice = (trip) => trip.price?.discounted || trip.price?.original || 0;

const applyFilter = (trips, filters = {}) => {
  const search = (filters.search || "").toLowerCase().trim();
  const category = filters.category || "";
  const difficulty = filters.difficulty || "";
  const minPrice = filters.minPrice ? Number(filters.minPrice) : null;
  const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : null;

  return trips.filter((trip) => {
    const price = getTripPrice(trip);

    if (
      search &&
      ![
        trip.title,
        trip.subtitle,
        trip.destination?.name,
        trip.category,
        trip.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(search)
    ) {
      return false;
    }

    if (category && trip.category !== category) return false;
    if (difficulty && trip.difficulty !== difficulty) return false;
    if (minPrice !== null && price < minPrice) return false;
    if (maxPrice !== null && price > maxPrice) return false;

    return true;
  });
};

const applySort = (trips, sort = "") => {
  const sorted = [...trips];
  if (sort === "price_asc") sorted.sort((a, b) => getTripPrice(a) - getTripPrice(b));
  if (sort === "price_desc") sorted.sort((a, b) => getTripPrice(b) - getTripPrice(a));
  if (sort === "rating") sorted.sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0));
  if (sort === "duration") sorted.sort((a, b) => (a.duration?.days || 0) - (b.duration?.days || 0));
  return sorted;
};

export const getDemoTrips = ({ filters = {}, sort = "", page = 1, limit = 9 } = {}) => {
  const filtered = applyFilter(DEMO_TRIPS, filters);
  const sorted = applySort(filtered, sort);

  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const pageSize = Number(limit) > 0 ? Number(limit) : 9;
  const totalTrips = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalTrips / pageSize));
  const start = (currentPage - 1) * pageSize;

  return {
    trips: sorted.slice(start, start + pageSize),
    totalTrips,
    totalPages,
    page: currentPage,
  };
};

export const getFeaturedDemoTrips = (limit = 6) =>
  DEMO_TRIPS.filter((trip) => trip.featured).slice(0, limit);

export const getDemoTripBySlug = (slug) => DEMO_TRIPS.find((trip) => trip.slug === slug) || null;

export const getPopularDemoDestinations = () => {
  const map = new Map();

  DEMO_TRIPS.forEach((trip) => {
    const name = trip.destination?.name;
    if (!name) return;

    const key = toSlug(name);
    const prev = map.get(key);
    if (prev) {
      prev.tripCount += 1;
      return;
    }

    map.set(key, {
      _id: `dest-${key}`,
      name,
      image: trip.destination.image || trip.coverImage,
      tripCount: 1,
    });
  });

  return [...map.values()].sort((a, b) => b.tripCount - a.tripCount);
};
