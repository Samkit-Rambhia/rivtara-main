// ─── Seed Data for Rivtara Travel Platform ─────────────────────────────────

const IMG = (id) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;

// ─── TRIPS ──────────────────────────────────────────────────────────────────

export const trips = [
  // 1 ── Backpacking Kasol & Kheerganga
  {
    title: "Backpacking Kasol & Kheerganga",
    slug: "backpacking-kasol-kheerganga",
    subtitle: "Trek through the Parvati Valley's hippie paradise",
    description:
      "Lose yourself in the misty pine forests and rugged trails of the Parvati Valley on this classic backpacking circuit. Camp under star-filled skies at Kheerganga's legendary hot springs, wander through Kasol's laid-back cafes, and cross the roaring Parvati River on swaying wooden bridges. This is the trip that turns first-time backpackers into lifelong mountain lovers.",
    coverImage: IMG("1626621341517-bbf3d9990a23"),
    images: [
      IMG("1626621341517-bbf3d9990a23"),
      IMG("1585409677983-0f6c41ca9c3b"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1544735716-ea9ef790f501"),
      IMG("1486870591958-9b9d0d1dda99"),
    ],
    destination: { name: "Kasol", state: "Himachal Pradesh", country: "India" },
    duration: { days: 4, nights: 3 },
    price: { original: 8999, discounted: 6499, currency: "INR" },
    category: "backpacking",
    difficulty: "moderate",
    groupSize: 15,
    startDates: [
      new Date("2026-04-10"),
      new Date("2026-05-15"),
      new Date("2026-06-20"),
    ],
    startLocation: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Kasol",
        description:
          "Board your overnight Volvo from Delhi and watch the plains give way to winding mountain roads as you climb into the Parvati Valley.",
        highlights: [
          "Overnight Volvo bus from Delhi",
          "Scenic Kullu Valley drive",
          "Arrival at Kasol basecamp",
        ],
        meals: "Dinner",
        accommodation: "Riverside camp in Kasol",
      },
      {
        day: 2,
        title: "Kasol Exploration & Chalal Village",
        description:
          "Spend the morning exploring Kasol's vibrant market lanes and Israeli cafes, then hike across the river to the peaceful hamlet of Chalal tucked among the pines.",
        highlights: [
          "Kasol market and cafe hopping",
          "Bridge crossing over Parvati River",
          "Chalal village hike",
          "Bonfire under the stars",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Riverside camp in Kasol",
      },
      {
        day: 3,
        title: "Kheerganga Trek",
        description:
          "Begin the iconic 12-km trek to Kheerganga through dense forests and waterfall crossings. Reach the top to soak in the natural hot water springs with a panoramic Himalayan sunset.",
        highlights: [
          "Kheerganga trek through Nakthan village",
          "Rudra Nag waterfall",
          "Natural hot springs at summit",
          "Camping at 3,050 metres",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Alpine camp at Kheerganga",
      },
      {
        day: 4,
        title: "Descent & Departure",
        description:
          "Descend through a different trail offering fresh views of the valley, collect your bags in Kasol, and board the evening bus back to Delhi.",
        highlights: [
          "Sunrise at Kheerganga",
          "Descent via alternate trail",
          "Farewell chai in Kasol",
        ],
        meals: "Breakfast",
        accommodation: "None (overnight bus)",
      },
    ],
    inclusions: [
      "Delhi–Kasol–Delhi Volvo transport",
      "3 nights camping accommodation",
      "All meals as per itinerary",
      "Experienced trek leader & guide",
      "Camping gear (tents, sleeping bags)",
      "First-aid and safety equipment",
    ],
    exclusions: [
      "Personal expenses and tips",
      "Travel insurance",
      "Any meals not mentioned in itinerary",
      "Camera or phone charges at campsites",
      "Porter charges for personal luggage",
    ],
    rating: { average: 4.6, count: 124 },
    isFeatured: true,
    isActive: true,
    tags: ["kasol", "kheerganga", "backpacking", "himachal", "trekking"],
  },

  // 2 ── Spiti Valley Road Trip
  {
    title: "Spiti Valley Road Trip",
    slug: "spiti-valley-road-trip",
    subtitle: "Conquer the cold desert on two wheels",
    description:
      "Ride through one of the most remote and breathtaking landscapes on Earth — the ancient cold desert of Spiti. Cross hair-raising mountain passes above 4,500 metres, explore thousand-year-old Buddhist monasteries perched on cliffs, and sleep in villages where the Milky Way stretches from horizon to horizon. This is the road trip that redefines adventure.",
    coverImage: IMG("1506905925346-21bda4d32df4"),
    images: [
      IMG("1506905925346-21bda4d32df4"),
      IMG("1469474968028-56623f02e42e"),
      IMG("1626621341517-bbf3d9990a23"),
      IMG("1585409677983-0f6c41ca9c3b"),
      IMG("1544735716-ea9ef790f501"),
    ],
    destination: {
      name: "Spiti Valley",
      state: "Himachal Pradesh",
      country: "India",
    },
    duration: { days: 7, nights: 6 },
    price: { original: 14999, discounted: 12499, currency: "INR" },
    category: "bike-trip",
    difficulty: "challenging",
    groupSize: 12,
    startDates: [
      new Date("2026-06-05"),
      new Date("2026-07-10"),
      new Date("2026-08-15"),
    ],
    startLocation: "Manali",
    itinerary: [
      {
        day: 1,
        title: "Manali Arrival & Briefing",
        description:
          "Arrive in Manali, meet your fellow riders over a warm dinner, and attend the safety briefing and bike allocation at the basecamp hotel.",
        highlights: [
          "Hotel check-in at Manali",
          "Bike allocation and inspection",
          "Rider safety briefing",
          "Group dinner",
        ],
        meals: "Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 2,
        title: "Manali to Chandratal via Rohtang",
        description:
          "Conquer the mighty Rohtang Pass at 3,978 m and descend into the Lahaul Valley. Continue riding along the Chandra River to the ethereal Chandratal Lake.",
        highlights: [
          "Rohtang Pass crossing",
          "Chandra River valley ride",
          "Chandratal Lake sunset",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camp at Chandratal",
      },
      {
        day: 3,
        title: "Chandratal to Kaza",
        description:
          "Ride deeper into Spiti through the stark, otherworldly Kunzum Pass and arrive at Kaza, the administrative capital of the valley.",
        highlights: [
          "Kunzum Pass (4,590 m)",
          "First views of Spiti Valley",
          "Kaza town exploration",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Homestay in Kaza",
      },
      {
        day: 4,
        title: "Key Monastery & Kibber Village",
        description:
          "Visit the iconic Key Monastery perched dramatically on a hilltop, then ride to Kibber — one of the highest inhabited villages in Asia with views of snow leopard territory.",
        highlights: [
          "Key Monastery visit",
          "Kibber village (4,270 m)",
          "Chicham Bridge — highest bridge in Asia",
          "Stargazing at night",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Homestay in Kaza",
      },
      {
        day: 5,
        title: "Kaza to Tabo",
        description:
          "Ride along the Spiti River gorge to Tabo, home to a UNESCO-listed monastery complex over a thousand years old with exquisite murals.",
        highlights: [
          "Dhankar Monastery & lake viewpoint",
          "Tabo Monastery (founded 996 AD)",
          "Ancient cave dwellings",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Tabo",
      },
      {
        day: 6,
        title: "Tabo to Kalpa via Nako",
        description:
          "Exit Spiti through the dramatic Nako Lake detour and ride into the apple orchards of Kinnaur, arriving in Kalpa with jaw-dropping views of the Kinner Kailash range.",
        highlights: [
          "Nako Lake stop",
          "Kinnaur Valley entry",
          "Kinner Kailash panorama from Kalpa",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Kalpa",
      },
      {
        day: 7,
        title: "Kalpa to Shimla — Departure",
        description:
          "Ride the final stretch through lush Kinnaur orchards and forested hills back to Shimla, where the expedition ends and memories last forever.",
        highlights: [
          "Kinnaur apple orchards",
          "Hindustan-Tibet Highway ride",
          "Farewell in Shimla",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "None (trip ends in Shimla)",
      },
    ],
    inclusions: [
      "Royal Enfield bike with fuel for entire trip",
      "6 nights accommodation (hotels, homestays, camps)",
      "All meals as per itinerary",
      "Experienced road captain and mechanic",
      "Riding gear (helmet and gloves)",
      "Inner-line permits and entry fees",
    ],
    exclusions: [
      "Security deposit for motorcycle (refundable)",
      "Personal riding jacket and boots",
      "Travel insurance",
      "Alcoholic beverages",
      "Any expenses due to road closures or landslides",
    ],
    rating: { average: 4.8, count: 89 },
    isFeatured: true,
    isActive: true,
    tags: ["spiti", "bike-trip", "himachal", "monastery", "high-altitude"],
  },

  // 3 ── Weekend Getaway to Rishikesh
  {
    title: "Weekend Getaway to Rishikesh",
    slug: "weekend-getaway-rishikesh",
    subtitle: "Rapids, sunsets, and riverside serenity",
    description:
      "Escape the city grind for a high-energy weekend on the banks of the Ganges. Raft through Class III and IV rapids, try cliff jumping, and wind down with a riverside bonfire and live music under the Himalayan foothills. Whether you are chasing thrills or peace, Rishikesh delivers both in a single weekend.",
    coverImage: IMG("1482938289607-e9573fc25ebb"),
    images: [
      IMG("1482938289607-e9573fc25ebb"),
      IMG("1544735716-ea9ef790f501"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1626621341517-bbf3d9990a23"),
    ],
    destination: {
      name: "Rishikesh",
      state: "Uttarakhand",
      country: "India",
    },
    duration: { days: 3, nights: 2 },
    price: { original: 5999, discounted: 4499, currency: "INR" },
    category: "weekend",
    difficulty: "easy",
    groupSize: 20,
    startDates: [
      new Date("2026-03-21"),
      new Date("2026-04-18"),
      new Date("2026-05-23"),
    ],
    startLocation: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Rishikesh & River Rafting",
        description:
          "Early morning departure from Delhi. Arrive at the riverside camp by noon and hit the Ganges for an exhilarating 16-km rafting session through Shivpuri to Laxman Jhula.",
        highlights: [
          "16-km white-water rafting (Grade III–IV)",
          "Cliff jumping stop",
          "Riverside camp check-in",
          "Bonfire with live music",
        ],
        meals: "Lunch, Dinner",
        accommodation: "Luxury riverside camp",
      },
      {
        day: 2,
        title: "Adventure Day & Ganga Aarti",
        description:
          "Choose from bungee jumping, giant swing, or a peaceful morning yoga session. Explore the Beatles Ashram and Laxman Jhula in the afternoon, then witness the mesmerizing Ganga Aarti at Triveni Ghat.",
        highlights: [
          "Optional bungee jump / giant swing",
          "Beatles Ashram visit",
          "Laxman Jhula & Ram Jhula walk",
          "Ganga Aarti at sunset",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Luxury riverside camp",
      },
      {
        day: 3,
        title: "Yoga, Waterfall Hike & Departure",
        description:
          "Start with a sunrise yoga session by the river, take a short hike to Neer Garh waterfall, and head back to Delhi with a soul full of stories.",
        highlights: [
          "Sunrise yoga by the Ganges",
          "Neer Garh waterfall hike",
          "Departure to Delhi by evening",
        ],
        meals: "Breakfast",
        accommodation: "None (return to Delhi)",
      },
    ],
    inclusions: [
      "Delhi–Rishikesh–Delhi AC transport",
      "2 nights riverside luxury camping",
      "16-km river rafting with gear",
      "All meals as per itinerary",
      "Bonfire and music night",
      "Experienced rafting instructor",
    ],
    exclusions: [
      "Bungee jumping / giant swing charges",
      "Personal expenses",
      "Travel insurance",
      "Any activity not mentioned in itinerary",
    ],
    rating: { average: 4.5, count: 210 },
    isFeatured: true,
    isActive: true,
    tags: ["rishikesh", "rafting", "weekend", "adventure", "yoga"],
  },

  // 4 ── Ladakh Bike Expedition
  {
    title: "Ladakh Bike Expedition",
    slug: "ladakh-bike-expedition",
    subtitle: "The ultimate frontier ride across the roof of the world",
    description:
      "Tackle the highest motorable passes on the planet, ride alongside turquoise lakes that look like they belong on another world, and camp where yaks roam free beneath snow-capped peaks. The Ladakh Bike Expedition is not just a trip — it is a rite of passage for every rider who dreams of conquering the Himalayas.",
    coverImage: IMG("1469474968028-56623f02e42e"),
    images: [
      IMG("1469474968028-56623f02e42e"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1464822759023-fed622ff2c3b"),
      IMG("1626621341517-bbf3d9990a23"),
      IMG("1585409677983-0f6c41ca9c3b"),
    ],
    destination: { name: "Leh", state: "Ladakh", country: "India" },
    duration: { days: 9, nights: 8 },
    price: { original: 21999, discounted: 18999, currency: "INR" },
    category: "bike-trip",
    difficulty: "challenging",
    groupSize: 10,
    startDates: [
      new Date("2026-06-15"),
      new Date("2026-07-20"),
      new Date("2026-08-25"),
    ],
    startLocation: "Manali",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali, collect your Royal Enfield, and spend the day acclimatizing in this charming hill station. Evening briefing with your road captain.",
        highlights: [
          "Bike handover and inspection",
          "Manali Old Town exploration",
          "Rider safety briefing",
        ],
        meals: "Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 2,
        title: "Manali to Jispa",
        description:
          "Cross the Atal Tunnel and ride through the stunning Lahaul Valley. The road hugs the Bhaga River as you climb steadily toward Jispa.",
        highlights: [
          "Atal Tunnel (9.02 km)",
          "Sissu waterfall stop",
          "Bhaga River valley",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camp in Jispa",
      },
      {
        day: 3,
        title: "Jispa to Sarchu via Baralacha La",
        description:
          "Conquer Baralacha La at 4,890 m and ride through the surreal Suraj Tal lake region. The landscape transforms into a raw, treeless moonscape.",
        highlights: [
          "Baralacha La Pass (4,890 m)",
          "Suraj Tal — Lake of the Sun God",
          "Zingzing Bar viewpoint",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camp in Sarchu",
      },
      {
        day: 4,
        title: "Sarchu to Leh via Tanglang La",
        description:
          "An epic riding day through the Gata Loops (21 hairpin bends), across Lachalung La and Tanglang La — one of the world's highest passes. Arrive in Leh by evening.",
        highlights: [
          "21 Gata Loops",
          "Tanglang La Pass (5,328 m)",
          "More Plains high-altitude plateau",
          "Leh arrival",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 5,
        title: "Leh Rest & Acclimatization",
        description:
          "A well-earned rest day in Leh. Explore the Leh Palace, stroll through the bustling market, and visit Shanti Stupa for a golden-hour panorama of the Indus Valley.",
        highlights: [
          "Leh Palace visit",
          "Shanti Stupa sunset",
          "Leh market exploration",
          "Acclimatization rest",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 6,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "Summit the legendary Khardung La (5,359 m) and descend into the magical Nubra Valley. Ride across the sand dunes of Hunder and spot the rare double-humped Bactrian camels.",
        highlights: [
          "Khardung La — highest motorable pass",
          "Nubra Valley sand dunes",
          "Bactrian camel safari",
          "Diskit Monastery",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camp in Hunder",
      },
      {
        day: 7,
        title: "Nubra Valley to Pangong Lake",
        description:
          "Ride through the Shyok River route to the surreal Pangong Tso — a 134-km lake that changes colour with the light, stretching into Tibet.",
        highlights: [
          "Shyok River road",
          "Pangong Lake arrival",
          "3 Idiots film location",
          "Lakeside stargazing",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lakeside camp at Pangong",
      },
      {
        day: 8,
        title: "Pangong Lake to Leh via Chang La",
        description:
          "Watch the sunrise paint Pangong Lake in impossible shades of blue. Ride back to Leh over Chang La pass, stopping at Thiksey Monastery along the way.",
        highlights: [
          "Sunrise at Pangong Lake",
          "Chang La Pass (5,360 m)",
          "Thiksey Monastery",
          "Farewell dinner in Leh",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 9,
        title: "Departure from Leh",
        description:
          "Return the bikes, say goodbye to the mountains, and catch your flight or begin the road journey back. The Himalayas will call you back — they always do.",
        highlights: [
          "Bike return and deposit refund",
          "Airport transfer",
          "Trip ends",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "Royal Enfield Himalayan with fuel",
      "8 nights accommodation (hotels, camps, homestays)",
      "All meals as per itinerary",
      "Road captain, mechanic, and backup vehicle",
      "Inner-line permits (Nubra, Pangong, Khardung La)",
      "Riding gear (helmet, gloves, knee guards)",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Motorcycle security deposit (refundable)",
      "Personal riding jacket and boots",
      "Travel and medical insurance",
      "Alcoholic beverages and personal expenses",
    ],
    rating: { average: 4.9, count: 156 },
    isFeatured: true,
    isActive: true,
    tags: ["ladakh", "bike-trip", "khardung-la", "pangong", "adventure"],
  },

  // 5 ── Manali Snow Adventure
  {
    title: "Manali Snow Adventure",
    slug: "manali-snow-adventure",
    subtitle: "Snow-capped peaks, pine forests, and mountain magic",
    description:
      "Trade city noise for the crunch of snow under your boots on this immersive Manali adventure. Hike through ancient cedar forests to the Jogini waterfall, play in fresh powder at Solang Valley, and soak in the old-world charm of Manali's wooden temples and riverside trails. Perfect for anyone craving their first taste of the Himalayas.",
    coverImage: IMG("1585409677983-0f6c41ca9c3b"),
    images: [
      IMG("1585409677983-0f6c41ca9c3b"),
      IMG("1486870591958-9b9d0d1dda99"),
      IMG("1626621341517-bbf3d9990a23"),
      IMG("1506905925346-21bda4d32df4"),
    ],
    destination: { name: "Manali", state: "Himachal Pradesh", country: "India" },
    duration: { days: 5, nights: 4 },
    price: { original: 9999, discounted: 7999, currency: "INR" },
    category: "trekking",
    difficulty: "moderate",
    groupSize: 15,
    startDates: [
      new Date("2026-03-15"),
      new Date("2026-04-20"),
      new Date("2026-12-15"),
    ],
    startLocation: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Manali",
        description:
          "Board your overnight Volvo bus from Delhi and wake up to the sight of snow-dusted peaks as you wind through the Kullu Valley.",
        highlights: [
          "Overnight Volvo from Delhi",
          "Kullu Valley scenic drive",
          "Afternoon arrival in Manali",
        ],
        meals: "Dinner",
        accommodation: "Mountain lodge in Old Manali",
      },
      {
        day: 2,
        title: "Solang Valley Snow Day",
        description:
          "Head to Solang Valley for a full day of snow activities — snowboarding, skiing, tubing, and cable-car rides with panoramic views of the Pir Panjal range.",
        highlights: [
          "Solang Valley snow sports",
          "Gondola ride to Pir Panjal viewpoint",
          "Snowboarding and snow tubing",
          "Hot chocolate by the fire",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Mountain lodge in Old Manali",
      },
      {
        day: 3,
        title: "Jogini Waterfall Trek & Old Manali",
        description:
          "Trek through cedar and deodar forests to the enchanting Jogini waterfall, then explore Old Manali's hippie lanes, wooden temples, and cozy cafes.",
        highlights: [
          "Jogini Falls trek (3 km)",
          "Hadimba Devi Temple",
          "Old Manali village walk",
          "Bonfire night",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Mountain lodge in Old Manali",
      },
      {
        day: 4,
        title: "Hamta Pass Base & Sethan Village",
        description:
          "Drive to Sethan village and hike toward the Hamta Pass base through pristine snowfields, with breathtaking views of the Lahaul Valley peeking through the gap.",
        highlights: [
          "Sethan village (3,100 m)",
          "Snow trek toward Hamta Pass base",
          "Panoramic Himalayan views",
          "Evening cultural programme",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mountain lodge in Old Manali",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Enjoy a leisurely morning in Manali, pick up souvenirs from the Mall Road, and board the evening bus back to Delhi.",
        highlights: [
          "Free morning in Manali",
          "Mall Road shopping",
          "Evening departure to Delhi",
        ],
        meals: "Breakfast",
        accommodation: "None (overnight bus)",
      },
    ],
    inclusions: [
      "Delhi–Manali–Delhi Volvo transport",
      "4 nights lodge accommodation",
      "All meals as per itinerary",
      "Solang Valley snow activity passes",
      "Trek guide and safety equipment",
      "Bonfire and cultural programme",
    ],
    exclusions: [
      "Personal snow gear rentals",
      "Gondola / cable-car tickets",
      "Travel insurance",
      "Personal expenses and tips",
      "Any activity not listed",
    ],
    rating: { average: 4.4, count: 98 },
    isFeatured: false,
    isActive: true,
    tags: ["manali", "snow", "trekking", "himachal", "solang"],
  },

  // 6 ── Kerala Backwaters Cruise
  {
    title: "Kerala Backwaters Cruise",
    slug: "kerala-backwaters-cruise",
    subtitle: "Drift through emerald canals in God's Own Country",
    description:
      "Glide along Kerala's legendary network of palm-fringed backwater canals aboard a traditional kettuvallam houseboat, feast on freshly caught fish cooked in coconut oil and banana leaves, and wake each morning to the song of kingfishers skimming the water. This is romance and relaxation distilled into one unforgettable journey through the tropics.",
    coverImage: IMG("1602216056096-3b40cc0c9944"),
    images: [
      IMG("1602216056096-3b40cc0c9944"),
      IMG("1593693411515-c20261bcad6e"),
      IMG("1537996194471-e657df975ab4"),
      IMG("1507525428034-b723cf961d3e"),
    ],
    destination: {
      name: "Alleppey",
      state: "Kerala",
      country: "India",
    },
    duration: { days: 5, nights: 4 },
    price: { original: 15999, discounted: 12999, currency: "INR" },
    category: "honeymoon",
    difficulty: "easy",
    groupSize: 8,
    startDates: [
      new Date("2026-04-05"),
      new Date("2026-09-10"),
      new Date("2026-11-20"),
    ],
    startLocation: "Kochi",
    itinerary: [
      {
        day: 1,
        title: "Kochi Arrival & Fort Kochi",
        description:
          "Land in Kochi and spend the afternoon wandering the colonial lanes of Fort Kochi — Chinese fishing nets, spice markets, and vibrant street art around every corner.",
        highlights: [
          "Chinese fishing nets at sunset",
          "Fort Kochi heritage walk",
          "Jew Town & spice market",
          "Fresh seafood dinner",
        ],
        meals: "Dinner",
        accommodation: "Heritage hotel in Fort Kochi",
      },
      {
        day: 2,
        title: "Kochi to Alleppey — Houseboat Embarkation",
        description:
          "Drive to Alleppey and board your private kettuvallam houseboat. Cruise through narrow canals lined with coconut palms, passing toddy tappers and village life frozen in time.",
        highlights: [
          "Private houseboat embarkation",
          "Backwater canal cruise",
          "Fresh Kerala Sadhya lunch on board",
          "Sunset over Vembanad Lake",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Private houseboat",
      },
      {
        day: 3,
        title: "Backwaters Full Day Cruise",
        description:
          "A full day on the water drifting through the quieter village canals. Watch coir-making, visit a local church, and savour a Malabar prawn curry prepared by the onboard chef.",
        highlights: [
          "Village canal exploration",
          "Coir-making demonstration",
          "Onboard Ayurvedic massage (optional)",
          "Candlelit dinner on deck",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Private houseboat",
      },
      {
        day: 4,
        title: "Kumarakom Bird Sanctuary & Spice Plantation",
        description:
          "Disembark and visit the Kumarakom Bird Sanctuary for a morning birdwatching walk, then tour a fragrant spice plantation where pepper, cardamom, and vanilla grow in abundance.",
        highlights: [
          "Kumarakom Bird Sanctuary",
          "Spice plantation tour",
          "Traditional Kerala cooking class",
          "Evening at lakeside resort",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Lakeside resort in Kumarakom",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Enjoy a slow, tropical morning, then transfer to Kochi airport for your onward journey — carrying the scent of coconut, cardamom, and Kerala sunsets with you.",
        highlights: [
          "Leisurely breakfast",
          "Airport transfer to Kochi",
          "Trip concludes",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "Kochi airport transfers",
      "4 nights accommodation (hotel, houseboat, resort)",
      "All meals — authentic Kerala cuisine",
      "Private houseboat with onboard chef",
      "Kumarakom Bird Sanctuary entry",
      "Spice plantation tour",
    ],
    exclusions: [
      "Flights to/from Kochi",
      "Ayurvedic spa treatments",
      "Alcoholic beverages",
      "Personal shopping and tips",
      "Travel insurance",
    ],
    rating: { average: 4.7, count: 134 },
    isFeatured: true,
    isActive: true,
    tags: ["kerala", "backwaters", "houseboat", "honeymoon", "relaxation"],
  },

  // 7 ── Meghalaya Living Root Bridges
  {
    title: "Meghalaya Living Root Bridges",
    slug: "meghalaya-living-root-bridges",
    subtitle: "Walk across bridges grown by the forest itself",
    description:
      "Venture into the wettest place on Earth to discover Meghalaya's jaw-dropping living root bridges — ancient engineering marvels grown over centuries by the Khasi and Jaintia tribes. Descend thousands of stone steps into misty gorges, swim in crystal-clear natural pools, and experience a culture unlike anything else on the subcontinent.",
    coverImage: IMG("1509316785289-025f5b846b35"),
    images: [
      IMG("1509316785289-025f5b846b35"),
      IMG("1586348943529-beaae6c28db9"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1469474968028-56623f02e42e"),
      IMG("1626621341517-bbf3d9990a23"),
    ],
    destination: {
      name: "Cherrapunji",
      state: "Meghalaya",
      country: "India",
    },
    duration: { days: 6, nights: 5 },
    price: { original: 13999, discounted: 11999, currency: "INR" },
    category: "backpacking",
    difficulty: "moderate",
    groupSize: 12,
    startDates: [
      new Date("2026-10-05"),
      new Date("2026-11-10"),
      new Date("2026-12-15"),
    ],
    startLocation: "Guwahati",
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong",
        description:
          "Arrive in Guwahati and drive through rolling Khasi hills to Shillong, the 'Scotland of the East'. Explore the lively Police Bazaar and savour momos at a local eatery.",
        highlights: [
          "Scenic drive through Khasi hills",
          "Shillong Police Bazaar exploration",
          "Khasi cuisine dinner",
        ],
        meals: "Dinner",
        accommodation: "Hotel in Shillong",
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji",
        description:
          "Drive to Cherrapunji through cascading waterfalls at every turn. Visit the thundering Nohkalikai Falls — India's tallest plunge waterfall — and explore Mawsmai Cave.",
        highlights: [
          "Nohkalikai Falls viewpoint",
          "Mawsmai Limestone Cave",
          "Seven Sisters Falls (seasonal)",
          "Eco Park cliff walk",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Cherrapunji",
      },
      {
        day: 3,
        title: "Double Decker Root Bridge Trek",
        description:
          "Descend 3,500 stone steps into the Nongriat valley to witness the magnificent double-decker living root bridge. Swim in the natural rock pools and soak in the primeval atmosphere.",
        highlights: [
          "3,500-step descent to Nongriat",
          "Double Decker Living Root Bridge",
          "Natural rock pool swimming",
          "Village lunch with local family",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Homestay in Nongriat village",
      },
      {
        day: 4,
        title: "Nongriat to Mawlynnong — Asia's Cleanest Village",
        description:
          "Ascend back from Nongriat and drive to Mawlynnong, famously crowned the cleanest village in Asia. Walk the living root bridge here and climb the Sky Walk for a bird's-eye view of Bangladesh.",
        highlights: [
          "Mawlynnong village tour",
          "Single-root living bridge",
          "Sky Walk bamboo viewpoint",
          "Bangladesh border view",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Bamboo homestay in Mawlynnong",
      },
      {
        day: 5,
        title: "Dawki River & Shnongpdeng",
        description:
          "Visit the impossibly clear Dawki River (Umngot) where boats appear to float on glass. Try kayaking, cliff diving, or simply wade into the transparent turquoise water.",
        highlights: [
          "Dawki crystal-clear river boating",
          "Shnongpdeng cliff jumping",
          "Kayaking on Umngot River",
          "Riverside camping night",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Riverside camp at Shnongpdeng",
      },
      {
        day: 6,
        title: "Shnongpdeng to Guwahati — Departure",
        description:
          "Begin the drive back to Guwahati, stopping at Umiam Lake for one last photo. The trip ends at Guwahati airport or railway station.",
        highlights: [
          "Umiam Lake stop",
          "Guwahati airport/station drop",
          "Trip concludes",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "Guwahati airport transfers and all road transport",
      "5 nights accommodation (hotels, homestays, camp)",
      "All meals as per itinerary",
      "Local Khasi guide for root bridge treks",
      "Dawki boating charges",
      "All entry fees and permits",
    ],
    exclusions: [
      "Flights to/from Guwahati",
      "Kayaking and cliff-diving charges",
      "Travel insurance",
      "Personal expenses",
      "Porter for luggage on treks",
    ],
    rating: { average: 4.7, count: 67 },
    isFeatured: false,
    isActive: true,
    tags: ["meghalaya", "root-bridges", "backpacking", "northeast", "offbeat"],
  },

  // 8 ── Rajasthan Heritage Circuit
  {
    title: "Rajasthan Heritage Circuit",
    slug: "rajasthan-heritage-circuit",
    subtitle: "Forts, palaces, and golden desert sunsets",
    description:
      "Step into a living storybook of warrior kings and desert queens as you journey through Rajasthan's most iconic cities. From the pink walls of Jaipur to the blue alleyways of Jodhpur and the golden dunes of Jaisalmer, every day unfolds a new chapter of opulence, colour, and timeless hospitality.",
    coverImage: IMG("1524492412937-b28074a5d7da"),
    images: [
      IMG("1524492412937-b28074a5d7da"),
      IMG("1477587458883-47145ed94245"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1626621341517-bbf3d9990a23"),
      IMG("1469474968028-56623f02e42e"),
    ],
    destination: {
      name: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    duration: { days: 6, nights: 5 },
    price: { original: 15999, discounted: 13999, currency: "INR" },
    category: "group-tour",
    difficulty: "easy",
    groupSize: 20,
    startDates: [
      new Date("2026-10-10"),
      new Date("2026-11-15"),
      new Date("2026-12-20"),
    ],
    startLocation: "Jaipur",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Jaipur — The Pink City",
        description:
          "Arrive in Jaipur and check into a heritage haveli. Spend the afternoon at the majestic Amber Fort, riding up on an elephant or jeep, and end the day at Nahargarh Fort for a panoramic sunset.",
        highlights: [
          "Amber Fort visit",
          "Nahargarh Fort sunset",
          "Heritage haveli check-in",
          "Rajasthani thali dinner",
        ],
        meals: "Dinner",
        accommodation: "Heritage haveli in Jaipur",
      },
      {
        day: 2,
        title: "Jaipur — Hawa Mahal, City Palace & Bazaars",
        description:
          "Explore the iconic Hawa Mahal, wander through City Palace, and lose yourself in the colourful chaos of Johari Bazaar buying block-printed textiles and lac bangles.",
        highlights: [
          "Hawa Mahal photo stop",
          "City Palace museum",
          "Jantar Mantar observatory",
          "Johari Bazaar shopping",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Heritage haveli in Jaipur",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur — The Blue City",
        description:
          "Drive to Jodhpur and be captivated by the imposing Mehrangarh Fort towering above a sea of blue houses. Explore the fort's intricate lattice screens and cannonball-scarred gates.",
        highlights: [
          "Mehrangarh Fort tour",
          "Blue City walking tour",
          "Zip-lining over the fort (optional)",
          "Mirchi Bada street food tasting",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique hotel in Jodhpur",
      },
      {
        day: 4,
        title: "Jodhpur to Jaisalmer — The Golden City",
        description:
          "Drive across the Thar Desert to Jaisalmer. Arrive in time to watch the sandstone fort glow golden at sunset — a sight you will never forget.",
        highlights: [
          "Thar Desert drive",
          "Jaisalmer Fort — living fort exploration",
          "Patwon ki Haveli visit",
          "Sunset from fort ramparts",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Haveli inside Jaisalmer Fort",
      },
      {
        day: 5,
        title: "Sam Sand Dunes — Desert Camp",
        description:
          "Head to the Sam Sand Dunes for a camel safari into the Thar Desert. Watch the sunset from the top of a towering dune, then feast under the stars with folk music and dance at a luxury desert camp.",
        highlights: [
          "Camel safari into sand dunes",
          "Desert sunset from dune peak",
          "Rajasthani folk music and dance",
          "Luxury desert camp dinner under stars",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury desert camp at Sam",
      },
      {
        day: 6,
        title: "Sunrise & Departure",
        description:
          "Wake before dawn for a spectacular desert sunrise, enjoy a final chai, and transfer to Jaisalmer station or airport for your onward journey.",
        highlights: [
          "Desert sunrise",
          "Farewell Rajasthani chai",
          "Station / airport transfer",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "All intercity AC transport (Jaipur–Jodhpur–Jaisalmer)",
      "5 nights accommodation (havelis, boutique hotel, desert camp)",
      "All meals as per itinerary",
      "Monument entry fees and guide",
      "Camel safari at Sam Sand Dunes",
      "Folk dance and music evening",
    ],
    exclusions: [
      "Flights to Jaipur / from Jaisalmer",
      "Elephant ride at Amber Fort",
      "Zip-lining at Mehrangarh",
      "Personal shopping and tips",
      "Travel insurance",
    ],
    rating: { average: 4.6, count: 112 },
    isFeatured: false,
    isActive: true,
    tags: ["rajasthan", "heritage", "desert", "forts", "culture"],
  },

  // 9 ── Valley of Flowers Trek
  {
    title: "Valley of Flowers Trek",
    slug: "valley-of-flowers-trek",
    subtitle: "A Himalayan meadow painted in a thousand colours",
    description:
      "Hike into a UNESCO World Heritage Site hidden deep in the Garhwal Himalayas, where over 600 species of wildflowers carpet alpine meadows in an explosion of colour every monsoon. Continue to the sacred Hemkund Sahib at 4,329 m and stand at the edge of a glacial lake ringed by seven snow peaks. This trek is a pilgrimage for nature lovers.",
    coverImage: IMG("1490750967868-88aa4f44baee"),
    images: [
      IMG("1490750967868-88aa4f44baee"),
      IMG("1464822759023-fed622ff2c3b"),
      IMG("1506905925346-21bda4d32df4"),
      IMG("1585409677983-0f6c41ca9c3b"),
    ],
    destination: {
      name: "Joshimath",
      state: "Uttarakhand",
      country: "India",
    },
    duration: { days: 6, nights: 5 },
    price: { original: 11999, discounted: 9499, currency: "INR" },
    category: "trekking",
    difficulty: "moderate",
    groupSize: 15,
    startDates: [
      new Date("2026-07-15"),
      new Date("2026-08-01"),
      new Date("2026-08-20"),
    ],
    startLocation: "Haridwar",
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Joshimath",
        description:
          "Depart early from Haridwar and drive along the Alaknanda River through Devprayag, Rudraprayag, and Karnaprayag to reach Joshimath — gateway to the trek.",
        highlights: [
          "Alaknanda River valley drive",
          "Devprayag sangam viewpoint",
          "Joshimath arrival and acclimatization",
        ],
        meals: "Lunch, Dinner",
        accommodation: "Guesthouse in Joshimath",
      },
      {
        day: 2,
        title: "Joshimath to Ghangaria",
        description:
          "Drive to Govindghat and begin the 9-km trek to Ghangaria, the base camp for both the Valley of Flowers and Hemkund Sahib, walking alongside the Pushpawati River.",
        highlights: [
          "Govindghat to Ghangaria trek (9 km)",
          "Pushpawati River crossing",
          "Ghangaria base camp arrival",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Ghangaria",
      },
      {
        day: 3,
        title: "Valley of Flowers",
        description:
          "Enter the magical Valley of Flowers National Park — a vast alpine meadow bursting with brahma kamal, blue poppy, cobra lily, and hundreds of other wildflowers set against glacial peaks.",
        highlights: [
          "Valley of Flowers National Park entry",
          "600+ species of wildflowers",
          "Glacier and waterfall views",
          "UNESCO World Heritage Site",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Ghangaria",
      },
      {
        day: 4,
        title: "Hemkund Sahib",
        description:
          "Trek to the sacred Hemkund Sahib Gurudwara at 4,329 m, perched beside a crystal-clear glacial lake surrounded by seven snow-capped peaks. A challenging but profoundly rewarding climb.",
        highlights: [
          "Hemkund Sahib Gurudwara at 4,329 m",
          "Glacial lake at summit",
          "Seven-peak panorama",
          "Sacred langar (community meal)",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Ghangaria",
      },
      {
        day: 5,
        title: "Ghangaria to Joshimath",
        description:
          "Descend from Ghangaria to Govindghat and drive back to Joshimath. Celebrate the trek over a hot meal and share photos with the group.",
        highlights: [
          "Descent trek to Govindghat",
          "Drive back to Joshimath",
          "Celebration dinner",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Joshimath",
      },
      {
        day: 6,
        title: "Joshimath to Haridwar — Departure",
        description:
          "Drive back to Haridwar through the stunning river valleys. The trip ends at Haridwar station by evening.",
        highlights: [
          "Scenic drive back to Haridwar",
          "Haridwar station drop-off",
          "Trip concludes",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "Haridwar–Joshimath–Haridwar transport",
      "5 nights guesthouse accommodation",
      "All meals as per itinerary",
      "Experienced trek leader and guide",
      "Valley of Flowers National Park entry permit",
      "First-aid kit and safety equipment",
    ],
    exclusions: [
      "Pony / porter charges",
      "Helicopter services (Govindghat–Ghangaria)",
      "Personal trekking gear",
      "Travel insurance",
      "Any expenses due to weather-related delays",
    ],
    rating: { average: 4.8, count: 73 },
    isFeatured: false,
    isActive: true,
    tags: ["valley-of-flowers", "trekking", "uttarakhand", "unesco", "wildflowers"],
  },

  // 10 ── Goa Beach Camping
  {
    title: "Goa Beach Camping",
    slug: "goa-beach-camping",
    subtitle: "Sand between your toes, stars above your head",
    description:
      "Swap concrete walls for canvas, fall asleep to the rhythm of waves, and wake up to golden Goan sunrises on this beachside camping escape. Kayak through mangroves, feast on fresh seafood grilled right on the sand, and dance barefoot at a sunset party. This is Goa the way it was meant to be experienced — wild, free, and unforgettable.",
    coverImage: IMG("1507525428034-b723cf961d3e"),
    images: [
      IMG("1507525428034-b723cf961d3e"),
      IMG("1476673160081-cf065607f449"),
      IMG("1537996194471-e657df975ab4"),
      IMG("1602216056096-3b40cc0c9944"),
    ],
    destination: { name: "South Goa", state: "Goa", country: "India" },
    duration: { days: 3, nights: 2 },
    price: { original: 6999, discounted: 5499, currency: "INR" },
    category: "camping",
    difficulty: "easy",
    groupSize: 25,
    startDates: [
      new Date("2026-11-07"),
      new Date("2026-12-12"),
      new Date("2026-12-26"),
    ],
    startLocation: "Goa",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Camp Setup",
        description:
          "Arrive at the secluded south Goa campsite, set up your tent steps from the ocean, and spend the afternoon kayaking through the nearby mangrove creeks before a seafood barbecue on the beach.",
        highlights: [
          "Beachside tent setup",
          "Mangrove kayaking",
          "Seafood BBQ on the sand",
          "Beach bonfire and live acoustic music",
        ],
        meals: "Lunch, Dinner",
        accommodation: "Beach tent camp",
      },
      {
        day: 2,
        title: "Island Trip & Sunset Party",
        description:
          "Take a boat to a nearby island for snorkelling and dolphin spotting, return for a laid-back afternoon on the beach, and end the day with a legendary sunset party right at camp.",
        highlights: [
          "Dolphin spotting boat ride",
          "Island snorkelling session",
          "Free afternoon at beach",
          "Sunset party with DJ and fire dancers",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Beach tent camp",
      },
      {
        day: 3,
        title: "Sunrise Yoga & Departure",
        description:
          "Join a sunrise yoga session on the beach, enjoy a final Goan breakfast of poi bread and xacuti, then pack up and head home with sand still in your shoes and salt in your hair.",
        highlights: [
          "Sunrise beach yoga",
          "Goan breakfast spread",
          "Camp teardown and departure",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "2 nights beach camping with tents and bedding",
      "All meals — fresh Goan and seafood cuisine",
      "Mangrove kayaking session",
      "Dolphin spotting boat trip",
      "Bonfire and sunset party",
      "Sunrise yoga session",
    ],
    exclusions: [
      "Travel to/from Goa",
      "Snorkelling gear rental",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    rating: { average: 4.3, count: 87 },
    isFeatured: false,
    isActive: true,
    tags: ["goa", "beach", "camping", "kayaking", "nightlife"],
  },

  // 11 ── Bali Explorer
  {
    title: "Bali Explorer",
    slug: "bali-explorer",
    subtitle: "Temples, rice terraces, and tropical island bliss",
    description:
      "Discover the Island of the Gods on this all-encompassing Bali adventure. Watch sunrise from the crater rim of Mount Batur, wade through the emerald tiers of Tegallalang rice terraces, surf beginner waves at Kuta, and explore ancient water temples shrouded in incense smoke. Bali is not just a destination — it is a feeling.",
    coverImage: IMG("1537996194471-e657df975ab4"),
    images: [
      IMG("1537996194471-e657df975ab4"),
      IMG("1552733407-5a9087364f4a"),
      IMG("1507525428034-b723cf961d3e"),
      IMG("1476673160081-cf065607f449"),
      IMG("1602216056096-3b40cc0c9944"),
    ],
    destination: { name: "Bali", state: "Bali", country: "Indonesia" },
    duration: { days: 6, nights: 5 },
    price: { original: 39999, discounted: 34999, currency: "INR" },
    category: "international",
    difficulty: "easy",
    groupSize: 15,
    startDates: [
      new Date("2026-04-15"),
      new Date("2026-07-10"),
      new Date("2026-10-20"),
    ],
    startLocation: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali — Seminyak",
        description:
          "Land at Ngurah Rai International Airport and transfer to your chic villa in Seminyak. Spend the evening strolling down the beach strip, sampling satay from street vendors, and catching your first Bali sunset.",
        highlights: [
          "Airport pickup and villa check-in",
          "Seminyak beach sunset walk",
          "Welcome dinner at beach club",
        ],
        meals: "Dinner",
        accommodation: "Private villa in Seminyak",
      },
      {
        day: 2,
        title: "Ubud — Rice Terraces & Monkey Forest",
        description:
          "Drive to the cultural heart of Bali. Walk through the iconic Tegallalang rice terraces, swing over the jungle canopy, and explore the Sacred Monkey Forest Sanctuary.",
        highlights: [
          "Tegallalang Rice Terraces",
          "Bali Swing over jungle canopy",
          "Sacred Monkey Forest Sanctuary",
          "Ubud Royal Palace evening",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique resort in Ubud",
      },
      {
        day: 3,
        title: "Mount Batur Sunrise Trek",
        description:
          "Begin the pre-dawn trek up Mount Batur (1,717 m) and be rewarded with one of the most spectacular sunrises you will ever witness — the caldera lake glowing beneath a sea of clouds.",
        highlights: [
          "Mount Batur sunrise trek",
          "Volcanic crater viewpoint",
          "Natural hot springs soak",
          "Afternoon at leisure in Ubud",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Boutique resort in Ubud",
      },
      {
        day: 4,
        title: "Water Temples & Waterfalls",
        description:
          "Visit the ancient Tirta Empul water temple for a purification ritual, then chase waterfalls through the jungle — Tegenungan, Kanto Lampo, and Tibumana.",
        highlights: [
          "Tirta Empul purification ceremony",
          "Tegenungan waterfall swim",
          "Kanto Lampo waterfall",
          "Traditional Balinese dance show",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique resort in Ubud",
      },
      {
        day: 5,
        title: "Nusa Penida Island Day Trip",
        description:
          "Speedboat to the dramatic island of Nusa Penida. Stand on the cliff above Kelingking Beach (the T-Rex cliff), snorkel with manta rays at Manta Point, and swim at Angel's Billabong.",
        highlights: [
          "Kelingking Beach (T-Rex cliff)",
          "Manta ray snorkelling",
          "Angel's Billabong natural pool",
          "Broken Beach arch",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Beachfront hotel in Seminyak",
      },
      {
        day: 6,
        title: "Free Morning & Departure",
        description:
          "Sleep in, enjoy a final poolside breakfast, pick up souvenirs from Seminyak's boutiques, and transfer to the airport for your flight home.",
        highlights: [
          "Poolside breakfast",
          "Souvenir shopping",
          "Airport transfer",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "5 nights accommodation (villa and boutique resorts)",
      "All meals as per itinerary",
      "Airport transfers and all ground transport",
      "Mount Batur sunrise trek with guide",
      "Nusa Penida speedboat and island tour",
      "Temple entry fees and snorkelling gear",
    ],
    exclusions: [
      "International flights",
      "Indonesia visa fees (if applicable)",
      "Bali Swing ticket",
      "Personal shopping and spa treatments",
      "Travel and medical insurance",
    ],
    rating: { average: 4.7, count: 95 },
    isFeatured: false,
    isActive: true,
    tags: ["bali", "international", "temples", "beach", "island"],
  },

  // 12 ── Vietnam Backpacking
  {
    title: "Vietnam Backpacking",
    slug: "vietnam-backpacking",
    subtitle: "From Hanoi's chaos to Ha Long Bay's calm",
    description:
      "Zip through Hanoi's hectic Old Quarter on the back of a scooter, cruise past limestone karsts in the emerald waters of Ha Long Bay, trek through the terraced rice fields of Sapa, and slurp the best pho of your life at a roadside stall. Vietnam is sensory overload in the best possible way — and this trip captures every unforgettable moment.",
    coverImage: IMG("1528127269322-539152388484"),
    images: [
      IMG("1528127269322-539152388484"),
      IMG("1555921015-5532091f6026"),
      IMG("1537996194471-e657df975ab4"),
      IMG("1552733407-5a9087364f4a"),
      IMG("1507525428034-b723cf961d3e"),
    ],
    destination: { name: "Hanoi", state: "Northern Vietnam", country: "Vietnam" },
    duration: { days: 8, nights: 7 },
    price: { original: 34999, discounted: 29999, currency: "INR" },
    category: "international",
    difficulty: "moderate",
    groupSize: 12,
    startDates: [
      new Date("2026-03-20"),
      new Date("2026-09-15"),
      new Date("2026-11-10"),
    ],
    startLocation: "Delhi",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        description:
          "Land in Hanoi's Noi Bai Airport and dive straight into the Old Quarter's organised chaos — weaving through motorbike rivers, tasting egg coffee, and soaking in a thousand years of history.",
        highlights: [
          "Old Quarter walking tour",
          "Egg coffee at Giang Cafe",
          "Hoan Kiem Lake evening stroll",
          "Street food crawl",
        ],
        meals: "Dinner",
        accommodation: "Boutique hotel in Old Quarter",
      },
      {
        day: 2,
        title: "Hanoi Exploration",
        description:
          "Visit Ho Chi Minh's mausoleum, the Temple of Literature, and the atmospheric Train Street. End the day with a water puppet show and bun cha dinner.",
        highlights: [
          "Ho Chi Minh Mausoleum",
          "Temple of Literature",
          "Train Street experience",
          "Traditional water puppet show",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique hotel in Old Quarter",
      },
      {
        day: 3,
        title: "Ha Long Bay Cruise — Day 1",
        description:
          "Board a traditional junk boat and cruise into the otherworldly seascape of Ha Long Bay. Kayak between towering limestone pillars, swim in hidden lagoons, and dine on deck under a canopy of stars.",
        highlights: [
          "Ha Long Bay junk boat boarding",
          "Kayaking through karst caves",
          "Swimming in emerald waters",
          "Sunset deck dinner",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Overnight on Ha Long Bay junk boat",
      },
      {
        day: 4,
        title: "Ha Long Bay — Sunrise & Return to Hanoi",
        description:
          "Wake to a misty sunrise over the bay, explore Sung Sot Cave, then cruise back to port and transfer to Hanoi for the overnight train to Sapa.",
        highlights: [
          "Sunrise tai chi on deck",
          "Sung Sot Cave exploration",
          "Return to Hanoi",
          "Overnight sleeper train to Sapa",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Sleeper train to Sapa",
      },
      {
        day: 5,
        title: "Sapa — Rice Terraces & Hill Tribes",
        description:
          "Arrive in the mountain town of Sapa and trek through cascading rice terraces to Hmong and Dao hill-tribe villages, where traditional life continues as it has for centuries.",
        highlights: [
          "Muong Hoa Valley rice terraces",
          "Cat Cat Village visit",
          "Hmong hill-tribe cultural exchange",
          "Mountain-view lodge check-in",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mountain lodge in Sapa",
      },
      {
        day: 6,
        title: "Sapa — Fansipan Summit",
        description:
          "Take the cable car to the summit of Fansipan (3,143 m), the Roof of Indochina, for 360-degree views across Vietnam, Laos, and China. Afternoon at leisure in Sapa's charming town.",
        highlights: [
          "Fansipan summit cable car",
          "Roof of Indochina panorama",
          "Sapa town and market exploration",
          "Vietnamese cooking class",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Mountain lodge in Sapa",
      },
      {
        day: 7,
        title: "Sapa to Hanoi — Farewell Dinner",
        description:
          "Take the morning train back to Hanoi, freshen up at the hotel, and enjoy a farewell dinner cruise on the Red River.",
        highlights: [
          "Morning train from Sapa",
          "Afternoon rest in Hanoi",
          "Red River farewell dinner cruise",
          "Last night in the Old Quarter",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Boutique hotel in Old Quarter",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Enjoy a final bowl of pho for breakfast, pick up last-minute gifts, and transfer to Noi Bai Airport for your flight home.",
        highlights: [
          "Final pho breakfast",
          "Airport transfer",
          "Trip concludes",
        ],
        meals: "Breakfast",
        accommodation: "None (departure day)",
      },
    ],
    inclusions: [
      "7 nights accommodation (hotels, junk boat, lodge, sleeper train)",
      "All meals as per itinerary",
      "Ha Long Bay overnight cruise with kayaking",
      "Sapa trekking with local guide",
      "All internal transport (train, bus, boat)",
      "Fansipan cable car ticket",
    ],
    exclusions: [
      "International flights",
      "Vietnam visa fees",
      "Personal expenses and tips",
      "Travel and medical insurance",
      "Meals not mentioned in itinerary",
    ],
    rating: { average: 4.6, count: 58 },
    isFeatured: false,
    isActive: true,
    tags: ["vietnam", "international", "backpacking", "ha-long-bay", "sapa"],
  },
];

// ─── DESTINATIONS ───────────────────────────────────────────────────────────

export const destinations = [
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    description:
      "Snow-capped peaks, pine-scented valleys, and ancient temples make Himachal the heart of Indian mountain travel.",
    image: IMG("1626621341517-bbf3d9990a23"),
    tripCount: 3,
    isPopular: true,
  },
  {
    name: "Ladakh",
    slug: "ladakh",
    description:
      "A high-altitude cold desert of turquoise lakes, Buddhist monasteries, and the world's most thrilling mountain passes.",
    image: IMG("1469474968028-56623f02e42e"),
    tripCount: 1,
    isPopular: true,
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    description:
      "From the rapids of Rishikesh to the wildflower meadows of the Garhwal Himalayas, Uttarakhand is adventure and spirituality intertwined.",
    image: IMG("1482938289607-e9573fc25ebb"),
    tripCount: 2,
    isPopular: true,
  },
  {
    name: "Kerala",
    slug: "kerala",
    description:
      "Palm-fringed backwaters, aromatic spice plantations, and Ayurvedic traditions define God's Own Country.",
    image: IMG("1602216056096-3b40cc0c9944"),
    tripCount: 1,
    isPopular: true,
  },
  {
    name: "Meghalaya",
    slug: "meghalaya",
    description:
      "Living root bridges, crystal-clear rivers, and the wettest place on Earth await in India's stunning northeast.",
    image: IMG("1509316785289-025f5b846b35"),
    tripCount: 1,
    isPopular: false,
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    description:
      "A land of warrior forts, golden deserts, and royal palaces that bring centuries of history to vivid, colourful life.",
    image: IMG("1524492412937-b28074a5d7da"),
    tripCount: 1,
    isPopular: true,
  },
  {
    name: "Goa",
    slug: "goa",
    description:
      "Sun-soaked beaches, vibrant nightlife, and Portuguese-tinged charm make Goa India's favourite coastal playground.",
    image: IMG("1507525428034-b723cf961d3e"),
    tripCount: 1,
    isPopular: true,
  },
  {
    name: "Bali",
    slug: "bali",
    description:
      "The Island of the Gods enchants with emerald rice terraces, ancient temples, and world-class surf breaks.",
    image: IMG("1537996194471-e657df975ab4"),
    tripCount: 1,
    isPopular: false,
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    description:
      "Karst-studded bays, bustling street-food capitals, and terraced highlands make Vietnam a backpacker's paradise.",
    image: IMG("1528127269322-539152388484"),
    tripCount: 1,
    isPopular: false,
  },
];

// ─── REVIEWS ────────────────────────────────────────────────────────────────

export const reviews = [
  {
    tripSlug: "backpacking-kasol-kheerganga",
    rating: 5,
    title: "Best trip of my life",
    comment:
      "The Kheerganga hot springs at sunset were absolutely magical. Our trek leader knew every shortcut and secret viewpoint — could not have asked for a better first backpacking experience.",
    userName: "Demo User",
  },
  {
    tripSlug: "spiti-valley-road-trip",
    rating: 5,
    title: "Spiti changed me forever",
    comment:
      "Riding through Spiti felt like being on another planet. The homestays were incredibly warm, and the mechanic saved us twice on Kunzum Pass. Worth every rupee.",
    userName: "Demo User",
  },
  {
    tripSlug: "weekend-getaway-rishikesh",
    rating: 4,
    title: "Perfect weekend escape",
    comment:
      "Exactly what I needed after months of work stress. The rafting was thrilling and the riverside camp was surprisingly comfortable. Only wish we had one more day!",
    userName: "Demo User",
  },
  {
    tripSlug: "ladakh-bike-expedition",
    rating: 5,
    title: "The ride of a lifetime",
    comment:
      "Pangong Lake at sunrise is something no photograph can capture. The support crew was outstanding and the bikes were well maintained throughout. A bucket-list experience.",
    userName: "Demo User",
  },
  {
    tripSlug: "kerala-backwaters-cruise",
    rating: 5,
    title: "Romance on the backwaters",
    comment:
      "Took this trip for our anniversary and it exceeded every expectation. The houseboat chef's prawn curry alone was worth the journey. Pure Kerala magic.",
    userName: "Demo User",
  },
  {
    tripSlug: "meghalaya-living-root-bridges",
    rating: 4,
    title: "Northeast India is underrated",
    comment:
      "The double-decker root bridge blew my mind — nature's engineering at its finest. The 3,500 steps down were brutal but the swimming pools at the bottom made it all worthwhile.",
    userName: "Demo User",
  },
  {
    tripSlug: "rajasthan-heritage-circuit",
    rating: 4,
    title: "A royal journey through time",
    comment:
      "Sleeping in desert camps under a blanket of stars and exploring Mehrangarh Fort with a knowledgeable guide were the highlights. Rajasthan's hospitality is unmatched.",
    userName: "Demo User",
  },
  {
    tripSlug: "valley-of-flowers-trek",
    rating: 5,
    title: "Nature at its absolute peak",
    comment:
      "Walking into the Valley of Flowers felt like stepping into a painting. Hundreds of wildflower species in every direction, with snow peaks as the backdrop. Truly a once-in-a-lifetime trek.",
    userName: "Demo User",
  },
];

// ─── DEMO USER ──────────────────────────────────────────────────────────────

export const demoUser = {
  name: "Demo User",
  email: "demo@rivtara.com",
  password: "password123",
  role: "user",
};
