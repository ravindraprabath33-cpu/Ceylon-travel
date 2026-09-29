export interface Tour {
  id: string;
  title: string;
  duration: string;
  days: number;
  nights: number;
  locations: string;
  rating: number;
  reviewsCount: number;
  priceUSD: number;
  image: string;
  tag: string;
  highlights: string[];
  description: string;
  detailedOverview: string;
  itinerary: { day: number; title: string; desc: string; stay: string }[];
  included: string[];
  carbonOffsetKg: number;
  groupSize: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  category: 'highlands' | 'coast' | 'ancient' | 'wildlife';
  bestTime: string;
  subtitle: string;
  description: string;
  image: string;
  spanCol?: boolean;
  topAttractions: string[];
  wildlifeEncounter: string;
}

export interface Experience {
  id: string;
  title: string;
  badge: string;
  duration: string;
  image: string;
  description: string;
  tagline: string;
  ecoFeature: string;
  icon: string;
  keyActivities: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  content: string;
}

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  LKR: { symbol: 'Rs ', rate: 305, label: 'LKR (Rs)' },
};

export type CurrencyCode = keyof typeof CURRENCIES;

export const TOURS: Tour[] = [
  {
    id: 'wild-sri-lanka',
    title: 'Wild Sri Lanka Adventure',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    locations: 'Yala • Wilpattu • Minneriya',
    rating: 4.99,
    reviewsCount: 312,
    priceUSD: 2450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q',
    tag: 'Big Five Safari',
    highlights: ['Leopard Tracking', 'Luxury Safari Tents', 'Max 8 Guests'],
    description: 'Private 4x4 safaris tracking leopards, sloth bears, and colossal elephant herds, staying in bespoke luxury tented canopy lodges.',
    detailedOverview: 'Immerse yourself in Sri Lanka’s untamed nature with private conservationist naturalists. Traversing dry-zone scrub forests in Yala, historic waterholes in Wilpattu, and Minneriya’s legendary elephant reservoir gathering, this journey blends exhilarating wildlife fieldwork with luxury eco-lodges completely powered by solar energy.',
    carbonOffsetKg: 380,
    groupSize: 'Max 8 explorers (or private)',
    included: [
      'Private custom open-roof 4x4 safari jeeps with local naturalist',
      'All National Park entrance permits & conservation fees',
      '7 nights in eco-luxury tented safari pavilions with en-suite baths',
      'Full board organic dining with fresh seasonal garden harvests',
      'Zero-single-use-plastic stainless steel hydration kits',
      'Private air-conditioned electric/hybrid ground transport'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Colombo to Wilpattu Forest Edge', desc: 'Greet your private naturalist guide, travel through coconut groves to the tranquil Wilpattu borders. Twilight bird walk.', stay: 'The Leopard Trails Eco-Camp' },
      { day: 2, title: 'Wilpattu National Park Dawn & Dusk Safaris', desc: 'Full-day tracking of Sri Lankan leopards around natural rainwater lakes (villus). Spot sloth bears and barking deer.', stay: 'The Leopard Trails Eco-Camp' },
      { day: 3, title: 'Cultural Triangle to Minneriya Elephant Gathering', desc: 'Journey across ancient irrigation canals to Minneriya Lake where over 200 Asian elephants congregate on lush grazing plains.', stay: 'Cinnamon Lodge Habarana' },
      { day: 4, title: 'Sigiriya Dawn Ascent & Village Organic Lunch', desc: 'Climb the 5th-century UNESCO rock citadel before sunrise crowds. Enjoy heirloom rice culinary experience at a village farm.', stay: 'Cinnamon Lodge Habarana' },
      { day: 5, title: 'Highland Escarpment to Yala National Park', desc: 'Scenic transition across southern valleys to the wild coastal scrubland of Yala. Settle into luxury solar tented cabins.', stay: 'Chena Huts by Uga Escapes' },
      { day: 6, title: 'Yala Block 1 Deep Wilderness Exploration', desc: 'Morning and afternoon game drives with radio-silent naturalist tracking leopards, mugger crocodiles, and painted storks.', stay: 'Chena Huts by Uga Escapes' },
      { day: 7, title: 'Bundala Wetland Biosphere & Southern Coastline', desc: 'Sunrise birdwatching at UNESCO Bundala Ramsar wetlands, home to greater flamingos. Twilight bonfire on secluded sand dunes.', stay: 'Chena Huts by Uga Escapes' },
      { day: 8, title: 'Return Journey via Galle Fort to Colombo', desc: 'Stroll Galle’s Dutch ramparts before returning to Bandaranaike International Airport for onward departure.', stay: 'Departure' }
    ]
  },
  {
    id: 'tea-trails',
    title: 'Tea Trails & Mountain Escapes',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    locations: 'Ella • Nuwara Eliya • Hatton',
    rating: 4.97,
    reviewsCount: 248,
    priceUSD: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA',
    tag: 'Highland Heritage',
    highlights: ['First Class Train', 'Tea Sommelier', 'Waterfall Treks'],
    description: 'Historic high-altitude observation train voyage, private heritage planter bungalows, and dawn hikes to cloud waterfalls.',
    detailedOverview: 'Breathe the crisp highland air of Ceylon’s historic tea country. Travel in the vintage colonial observation car across mist-shrouded valleys and iconic arched stone viaducts, pick tender golden tea buds alongside fourth-generation artisan pluckers, and unwind with bespoke fireplace dinners.',
    carbonOffsetKg: 290,
    groupSize: 'Max 10 explorers',
    included: [
      'Reserved First-Class panoramic mountain railway tickets',
      '5 nights in restored Relais & Châteaux colonial planter bungalows',
      'Private masterclass with an estate tea sommelier',
      'Guided trekking to Little Adam’s Peak and secret forest falls',
      'Daily English afternoon tea and gourmet farm-to-table cuisine'
    ],
    itinerary: [
      { day: 1, title: 'Colombo to Hatton Tea Valleys', desc: 'Ascend through pine forests into the Castlereagh reservoir valley. Welcoming high tea at your colonial bungalow.', stay: 'Ceylon Tea Trails' },
      { day: 2, title: 'Artisan Tea Picking & Private Factory Tasting', desc: 'Walk alongside tea pluckers through emerald slopes. Learn the orthodox tea rolling and curing craft with our resident planter.', stay: 'Ceylon Tea Trails' },
      { day: 3, title: 'Highland Heritage Train to Ella', desc: 'Board the historic mountain railway across dramatic ravines and mist canyons into the quaint mountain town of Ella.', stay: '98 Acres Resort & Spa' },
      { day: 4, title: 'Nine Arch Viaduct & Little Adam’s Peak Dawn Trek', desc: 'Watch the sunrise light up the southern plains from Little Adam’s Peak, followed by a walk across Nine Arch Bridge.', stay: '98 Acres Resort & Spa' },
      { day: 5, title: 'Ravana Falls & Nuwara Eliya "Little England"', desc: 'Explore the cool alpine architecture of Nuwara Eliya, Victoria Park’s rare avian visitors, and Hakgala Botanical Gardens.', stay: 'Heritance Tea Factory' },
      { day: 6, title: 'Descent via Kithulgala to Colombo', desc: 'Descend through Kelani River rainforest valleys with optional peaceful bamboo rafting before airport transfer.', stay: 'Departure' }
    ]
  },
  {
    id: 'cultural-heritage',
    title: 'Cultural Heritage Journey',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    locations: 'Sigiriya • Polonnaruwa • Kandy',
    rating: 4.98,
    reviewsCount: 195,
    priceUSD: 1980,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg',
    tag: 'UNESCO Sanctum',
    highlights: ['Private Sunrise Entry', 'Temple Blessings', 'Rural Artisans'],
    description: 'Sunrise ascent at Sigiriya, private temple chamber blessing in Kandy, and traditional artisan ceramic and batik workshops.',
    detailedOverview: 'Journey 2,500 years back into living Buddhist history and hydraulic engineering wonders. Guided by licensed archaeologists and historians, access sacred inner temple sanctums and ancient monastic cave systems away from tourist buses.',
    carbonOffsetKg: 320,
    groupSize: 'Max 8 explorers',
    included: [
      'Archaeologist-guided private explorations of UNESCO citadels',
      'Exclusive early-access permits for Sigiriya Lion Rock',
      'Private Buddhist monk blessing ceremony in Kandy',
      'Heirloom pottery and indigenous herbal garden visits',
      '6 nights in eco-architectural boutique sanctuaries'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Cave Temples of Dambulla', desc: 'Transfer to the Cultural Triangle. Explore Dambulla’s five ancient sacred caves glowing with golden Buddha frescoes.', stay: 'Heritance Kandalama' },
      { day: 2, title: 'Sigiriya Rock Fortress at Dawn', desc: 'Ascend the 1,200 steps of King Kashyapa’s 5th-century royal palace before dawn mist lifts over the surrounding canopy.', stay: 'Heritance Kandalama' },
      { day: 3, title: 'Ancient Medieval Capital of Polonnaruwa', desc: 'Cycle past royal baths, monolithic stone temples, and the magnificent Gal Vihara Buddha statues.', stay: 'Heritance Kandalama' },
      { day: 4, title: 'Spice Forests of Matale to Royal Kandy', desc: 'Cross aromatic organic spice gardens to Kandy. Evening cultural drums and fire-walking performance.', stay: 'The Kandy House' },
      { day: 5, title: 'Temple of the Sacred Tooth Relic & Royal Botanical Gardens', desc: 'Participate in the morning Thevava ritual ceremony at Sri Dalada Maligawa. Afternoon amidst Peradeniya orchid collections.', stay: 'The Kandy House' },
      { day: 6, title: 'Knuckles Mountain Foothills & Heirloom Villages', desc: 'Visit traditional brass and woodcarvers preserving millennia-old techniques. Organic vegetarian village feast.', stay: 'The Kandy House' },
      { day: 7, title: 'Scenic Return to Colombo', desc: 'Depart with memories of ancient chanting and timeless stone citadels.', stay: 'Departure' }
    ]
  },
  {
    id: 'southern-coast',
    title: 'Southern Coast Escape',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    locations: 'Galle Fort • Weligama • Tangalle',
    rating: 4.96,
    reviewsCount: 174,
    priceUSD: 1550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvlkkqb6jRLT4jMj7W4Bam23CZ8rbQV6G1P94lSlgRphLaYuXfeiWxhmoGeNa0RQU0jsSKrY-PCz1RrB8Fofz-ZbVjuF7Xv8aJtcziwqSDCTiE4iZ0GdDd9z8qzc5B4FMOjE_m8DmRl9FcokrOyW4FykIzcW48oklCUnBsUlAt12lmqaC4N4ANQy78aF-F16by4ao6uMGiT9RZ3emU_Tu3DXT63BkbYAomCZP58S4AGMvVjiiG5caJ6g',
    tag: 'Coast & Ocean',
    highlights: ['Private Catamaran', 'Marine Biologist', 'Coastal Eco-Resort'],
    description: 'Private luxury catamaran whale watching, turtle rehabilitation project release, and barefoot dining in secluded palm bays.',
    detailedOverview: 'Sri Lanka’s south coast is where turquoise Indian Ocean swells lap against Dutch colonial ramparts and coconut bluffs. Experience ethical blue whale expeditions on a silent low-emission eco-catamaran alongside resident marine biologists.',
    carbonOffsetKg: 240,
    groupSize: 'Max 6 explorers',
    included: [
      'Private eco-catamaran charter with onboard marine biologist',
      'Turtle sanctuary release experience at Rekawa',
      'Walking heritage architectural tour of Galle Fort with local historian',
      '4 nights in private oceanfront boutique villas',
      'Sunset coconut cocktails and freshly caught sustainable seafood'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome to Dutch Galle Fort', desc: 'Check in to a 300-year-old restored merchant townhouse. Sunset walk on the ramparts overlooking the Indian Ocean.', stay: 'Amangalla or Fort Bazaar' },
      { day: 2, title: 'Galle Fort Heritage & Weligama Bay', desc: 'Discover hidden antique stores, lace-makers, and spice depots. Afternoon relaxation on the tranquil beaches of Weligama.', stay: 'Cape Weligama' },
      { day: 3, title: 'Private Blue Whale & Dolphin Catamaran Safari', desc: 'Early morning ocean departure into the continental shelf trench where majestic blue whales breach under morning sun.', stay: 'Cape Weligama' },
      { day: 4, title: 'Mirissa Coconut Tree Hill & Tangalle Seclusion', desc: 'Visit Mirissa’s famous headland and explore silent mangrove lagoons by wooden paddle canoe. Night turtle conservation watch.', stay: 'Amanwella Tangalle' },
      { day: 5, title: 'Southern Expressway to Colombo Airport', desc: 'Farewell ocean breakfast before smooth private transfer directly to Colombo.', stay: 'Departure' }
    ]
  },
  {
    id: 'complete-sri-lanka',
    title: 'The Complete Sri Lanka Experience',
    duration: '12 Days / 11 Nights',
    days: 12,
    nights: 11,
    locations: 'Sigiriya • Kandy • Ella • Yala • Galle',
    rating: 5.0,
    reviewsCount: 420,
    priceUSD: 3850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA',
    tag: 'Island Grand Tour',
    highlights: ['Private Chauffeur & Guide', '5-Star Boutique Stays', '100% Carbon Balanced', 'All Park Permits & Meals'],
    description: 'The definitive, slow-paced exploration of the island: from the cultural triangle and tea highlands to deep jungle safaris and golden coastal sanctuaries.',
    detailedOverview: 'Our crown jewel expedition. Crafted for travelers who desire the complete story of Sri Lanka in absolute elegance. You will journey across 5 UNESCO World Heritage sites, 2 national parks, the historic high tea trails, and secluded southern bays in seamless luxury.',
    carbonOffsetKg: 620,
    groupSize: 'Private party (2 to 8 guests)',
    included: [
      'Dedicated senior naturalist chauffeur-guide throughout all 12 days',
      'All 11 nights in Sri Lanka’s most distinguished eco-luxury boutique hotels',
      'All national park safaris, private jeeps, and boat charters included',
      'Full board dining with curated culinary degustation dinners',
      'Domestic mountain train tickets in reserved first-class cabin',
      'Complimentary airport VIP fast-track arrival and departure services'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Colombo & Negombo Lagoon Sanctuary', desc: 'VIP meet and greet at CMB airport. Relax at a private lagoon sanctuary.', stay: 'The Wallawwa' },
      { day: 2, title: 'Journey to the Cultural Triangle & Dambulla Caves', desc: 'Travel north into the heartland of ancient civilization.', stay: 'Heritance Kandalama' },
      { day: 3, title: 'Sigiriya Lion Rock & Minneriya Elephant Gathering', desc: 'Climb Sigiriya at dawn; afternoon private safari with elephant herds.', stay: 'Heritance Kandalama' },
      { day: 4, title: 'Polonnaruwa Medieval Ruins to Sacred Kandy', desc: 'Explore royal ruins by bicycle; travel through spice ridges to Kandy.', stay: 'The Kandy House' },
      { day: 5, title: 'Temple of the Tooth Relic & Royal Botanical Gardens', desc: 'Witness ancient Buddhist rites and explore royal royal flora.', stay: 'The Kandy House' },
      { day: 6, title: 'Observation Mountain Train to Nuwara Eliya', desc: 'Spectacular highland train journey through cascading cloud forests.', stay: 'Ceylon Tea Trails' },
      { day: 7, title: 'Tea Masterclass & High Altitude Waterfalls', desc: 'Private estate walk, sensory tea leaf tasting, and waterfall hike.', stay: 'Ceylon Tea Trails' },
      { day: 8, title: 'Descent to Yala National Park & Leopard Territory', desc: 'Descend to the southern wildlife savannas. Evening campfire.', stay: 'Chena Huts by Uga' },
      { day: 9, title: 'Full Day Yala Wilderness & Sloth Bear Safari', desc: 'Dawn and dusk game drives with our specialist tracker naturalist.', stay: 'Chena Huts by Uga' },
      { day: 10, title: 'Transfer to Galle Dutch Fort via Tangalle Bay', desc: 'Coastal drive along turquoise bays with coconut grove stops.', stay: 'Amangalla' },
      { day: 11, title: 'Private Catamaran Whale Expedition & Fort Sunset', desc: 'Morning marine cruise; sunset cocktail on the 17th-century ramparts.', stay: 'Amangalla' },
      { day: 12, title: 'Departure from Colombo Airport', desc: 'Private expressway transfer to Colombo for your flight home.', stay: 'Departure' }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'ella',
    name: 'Ella',
    region: 'Central Highlands',
    category: 'highlands',
    bestTime: 'Jan – May',
    subtitle: 'Cloud Forest Gateway',
    description: 'Historic colonial railway viaducts, misty morning valley trails, and verdant organic tea estates tucked in emerald ridges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA',
    spanCol: true,
    topAttractions: ['Nine Arch Bridge', "Little Adam's Peak", 'Ravana Ella Falls', 'Ella Rock Trail'],
    wildlifeEncounter: 'Highland birds, sambar deer, flying squirrels'
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'Cultural Triangle',
    category: 'ancient',
    bestTime: 'Year-Round',
    subtitle: '5th Century Sky Palace',
    description: 'King Kashyapa’s architectural marvel with hydraulic water gardens, ancient mirror walls, and sacred cliffside frescoes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg',
    spanCol: true,
    topAttractions: ['Sigiriya Lion Rock Fortress', 'Pidurangala Monolith', 'Water Gardens', 'Frescoes Cave'],
    wildlifeEncounter: 'Wild peacocks, gray langurs, dry-zone hornbills'
  },
  {
    id: 'yala',
    name: 'Yala',
    region: 'Southern Province',
    category: 'wildlife',
    bestTime: 'Feb – Jul',
    subtitle: 'Leopard Heartland',
    description: 'Thorny scrubland and ocean-facing dunes hosting the planet’s densest leopard population and large tusker elephants.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q',
    topAttractions: ['Yala Block 1 Game Reserve', 'Kataragama Sacred City', 'Sithulpawwa Rock Temple', 'Palatupana Sand Dunes'],
    wildlifeEncounter: 'Sri Lankan leopard, sloth bear, spotted deer, wild water buffalo'
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    region: 'South Coast',
    category: 'coast',
    bestTime: 'Dec – Apr',
    subtitle: 'Colonial Citadel',
    description: 'Cobblestone alleyways, Dutch bastions, boutique spice merchants, and seaside dining framed by roaring surf.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBke-HnXnMprmxHe4biUKq5axh-2fnU2qQS5_PHO5q9WCfNtA0vnXUoVSNkyOPMN0nbbERzpUJW_MaICVv6enY69p8KQamLrs6tj6HpuL4zPnsWLKOeRlcLc5L8OYu_qde8DcKggWnzFbXYmZbwWyv5oKTtwuSE23-5NIQJ27uYLbZ0U_wOpg6cUDP9RTdeJ9tWd_o3opuKPMgu6fc_YV26gK2H7xCWqXdhNYLi5fqGSUmLUeI9pr3Wg',
    topAttractions: ['Galle Dutch Fort Walls', 'White Lighthouse', 'National Maritime Museum', 'Pedlar Street Boutiques'],
    wildlifeEncounter: 'Fruit bats at dusk, coastal terns, sea turtles'
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Central Province',
    category: 'ancient',
    bestTime: 'Dec – Apr',
    subtitle: 'Royal Sanctuary',
    description: 'Venerated Temple of the Tooth Relic, serene lakeside ambles, and lush botanical wonderlands.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAje9ev7QLPV7hu6o9F-llXHfkNm3F5ZvgpV5VhSKOWJWshkXYpsrd3WdWYVYFZs_Bt8kkWgoHRZGmHoTly5Bjf-DvjJoZDhlLl3RnCSkKYXfT6Eg26ytv3ce3mr7JkE57YK0wLbrZH9Kw6FM6PyDMkUkybR3mo8WRbIt660kgocPwNvGWgmjagNXi72Du0-4oHVYY69N25NhIdfbEAdwsC7skxlwqhhIMuLHzlR53iMbSuiaijhKYWqw',
    topAttractions: ['Temple of the Sacred Tooth', 'Royal Botanic Gardens Peradeniya', 'Kandy Lake Promenade', 'Bahirawakanda Buddha'],
    wildlifeEncounter: 'Giant fruit bats, endemic birds, torque macaques'
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'Southern Coast',
    category: 'coast',
    bestTime: 'Nov – Apr',
    subtitle: 'Marine Sanctuary',
    description: 'Blue whale ocean expeditions, secluded coconut bluffs, and laid-back coastal eco-villas with golden sands.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Jo0ZZW2e6sm3eyNMTREd4FBel6succcyJK-J8O0lc3BFymsEwJVth0nPvojE5SAkSVm4zTd-k50bpVC3FAeyNugNqDXCGt9kmPG4A4G7FMzEJrVZ0suQ_xouQ8cdMCKszMfg5jQG-rrIolchDp4zkF-m7uv4DyqoCw5oiOoD-d7TIW5C8FJ5incHT8EGSJTG4m0R_798hfEgNvVi93SGfnsxIXqbTOV8BN9GT06SqOwxwr8o_R4_xw',
    topAttractions: ['Coconut Tree Hill', 'Mirissa Harbour Whale Watch', 'Secret Beach', 'Parrot Rock'],
    wildlifeEncounter: 'Blue whales, spinner dolphins, green sea turtles'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'safari',
    title: 'Wildlife Safaris',
    badge: 'Big Five Safari',
    duration: 'Half to Multi-Day',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q',
    description: 'Tracking elusive leopards and wild elephant gatherings in undisturbed national parks alongside conservationist trackers.',
    tagline: 'Witness nature untouched by human interference.',
    ecoFeature: 'Ethical No-Chase Protocol & 100% Electric Jeeps in Core Zones',
    icon: 'pets',
    keyActivities: ['Dawn leopard tracking in Yala', 'Minneriya wild elephant gathering', 'Night birdwatching in Wilpattu']
  },
  {
    id: 'tea',
    title: 'Tea Country Trails',
    badge: 'Highland Heritage',
    duration: '2 - 4 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA',
    description: 'Stay in restored colonial planter bungalows, hand-pick artisan silver tips, and sample rare single-estate Ceylon vintages.',
    tagline: 'The timeless fragrance of Ceylon high tea.',
    ecoFeature: 'Fair Trade Certified & Fair Wage Community Support',
    icon: 'local_cafe',
    keyActivities: ['First-class scenic hill train ride', 'Hand-plucking with artisan tea pickers', 'Bungalow fireside tea sommelier tastings']
  },
  {
    id: 'beach',
    title: 'Beaches & Whale Sanctuaries',
    badge: 'Coast & Ocean',
    duration: '3 - 6 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvlkkqb6jRLT4jMj7W4Bam23CZ8rbQV6G1P94lSlgRphLaYuXfeiWxhmoGeNa0RQU0jsSKrY-PCz1RrB8Fofz-ZbVjuF7Xv8aJtcziwqSDCTiE4iZ0GdDd9z8qzc5B4FMOjE_m8DmRl9FcokrOyW4FykIzcW48oklCUnBsUlAt12lmqaC4N4ANQy78aF-F16by4ao6uMGiT9RZ3emU_Tu3DXT63BkbYAomCZP58S4AGMvVjiiG5caJ6g',
    description: 'Quiet southern coves, private eco-catamarans for blue whale observation, and secluded beachfront eco-lodges.',
    tagline: 'Where azure ocean meets golden solitude.',
    ecoFeature: 'Marine Stewardship Partner & Zero-Disturbance Distance Limits',
    icon: 'waves',
    keyActivities: ['Silent catamaran whale observation', 'Hatchling sea turtle nest patrol', 'Private beach twilight candlelit suppers']
  },
  {
    id: 'culture',
    title: 'Cultural Heritage',
    badge: 'UNESCO Sanctum',
    duration: '3 - 5 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg',
    description: 'Sunrise ascent up Sigiriya fortress, sacred Buddhist relic blessings in Kandy, and ancient ruined monastic reservoirs.',
    tagline: 'Ancient civilisations whispered through stone.',
    ecoFeature: 'Licensed Archaeologist Guides & Direct Heritage Conservation Funding',
    icon: 'museum',
    keyActivities: ['Sunrise private access to Sigiriya', 'Temple of the Tooth Relic blessing ceremony', 'Traditional batik and ceramic workshops']
  },
  {
    id: 'peaks',
    title: 'Highland Adventure',
    badge: 'Trekking & Peaks',
    duration: '2 - 4 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSCty7k3MRmg1dI-KxsNoAlHm5UoMF1apaGgMyU4dh4HfOUAtph06Hn9mPTObrI170cLJ0F3TnBrJjxY6N1l3PVKEPrxfnjNLD0ZN1ROLFiF3kV5d8ixhdEVzh5KFhoVZ-sXhopdP092Qb_mNVRIctqAUXD_qbT_3Hb9PwmEJGBsnizW_CAi6wGJsdF7WHT0f8Fm8KnXcuWTRWsGTi4szGoueS49bb2ZfBePbbkh9QG1F5kKcHi9mNA',
    description: 'Traverse the UNESCO Knuckles Cloud Forest, scale Little Adam’s Peak at dawn, and bathe beneath secret cascading waterfalls.',
    tagline: 'Breathtaking heights shrouded in mountain mist.',
    ecoFeature: 'Leave No Trace Verified & Village Trail Guardian Program',
    icon: 'hiking',
    keyActivities: ['Knuckles cloud forest ridge hike', 'Hidden waterfall swim and wild tea picnic', 'Night star photography over mountain ravines']
  },
  {
    id: 'eco-living',
    title: 'Eco Sanctuaries & Living',
    badge: 'Regenerative Travel',
    duration: '1 - 3 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNy82KaTimaM_82gyDZCSUzU2crEd79R7UGNLX29d-C4Z7oR7W4gQ4SLJurkqVhXAHWSDTqVr0bN4CyRVc2jUY_7_GX2ibu7-RDLACvt7BkiPFhVTKqfqGVrRqyfDxGbhxlTT8AE8uEU7XJ23CCYgsTPv1v2PlEJXM1ULv4dVyB3wpkXtN-9PUKaoVzauT0sAe7q4tTyR18UU58BcdYQqFnbhXQbpPRg7KxqPSNPLBoZPn4Gb4g17Ycw',
    description: 'Active native rainforest reforestation, night turtle patrol nesting sanctuaries, and organic heirloom paddy cultivation.',
    tagline: 'Give back directly to the lands you travel.',
    ecoFeature: '100% Community Fund Direct & Native Tree Planting Certificate',
    icon: 'volunteer_activism',
    keyActivities: ['Planting endemic trees in Knuckles', 'Organic permaculture farming & clay cooking', 'Community school environmental education workshops']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'Best Places to Visit in Sri Lanka in 2026',
    category: 'Expedition Trends',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA',
    excerpt: 'Highland cloud forest treks, secret southern surfing bays, and newly opened heritage sanctuaries that define conscious travel.',
    author: 'Sunil Weeraratne, Senior Expedition Naturalist',
    content: `Sri Lanka has emerged as one of the world's most alluring slow-travel destinations. Rather than rushing through tourist hubs, modern travelers are discovering intimate valleys in the Knuckles Range, secluded boutique villas along the southern palm coast, and quiet ancient ruins hidden deep in dry-zone reserves.\n\nFrom riding the historic tea railway to Ella at dawn to embarking on silent electric safaris in Yala, 2026 is the year of mindful, conservation-first exploration.`
  },
  {
    id: 'article-2',
    title: 'The Definitive Sri Lanka Travel Guide',
    category: 'Travel Masterclass',
    date: 'February 2026',
    readTime: '9 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg',
    excerpt: 'Visa logistics, respectful temple etiquette, internal transport, and ethical shopping recommendations for an effortless voyage.',
    author: 'Kavindi Senanayake, Cultural Curator',
    content: `Visiting sacred Buddhist sanctums requires reverent etiquette: white or light clothing covering shoulders and knees, removing shoes before entering monastic grounds, and never turning your back directly to a Buddha statue for a photograph.\n\nFor transport, private chauffeured hybrid vehicles paired with scenic first-class train passages between Kandy and Ella remain the gold standard of comfort and sustainability.`
  },
  {
    id: 'article-3',
    title: 'Navigating the Dual Monsoons: When to Visit',
    category: 'Seasons & Weather',
    date: 'January 2026',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Sh26ZW052nAtukqZpTZQiC4VQPdKW5L4rc4SXOjZ0AOzoLG5VDuczRCU2TiEQqYy31e2k-0UtDI5oZ2FhDSc5jiAKMhvFMksIIbnpfRzgFjgLn4tDOYZjd6IlUTCDZjXkbsFvkxBWSEh8Xb0y1yntziWqrPvKnlBRNcjKTacTNpkJVjgJIgTf-UjrgqAa1he_NvIXqAIPLrHuUHx3OwIsnV2il9bpOINyNZw3iATq03svc2NPCDndg',
    excerpt: 'Why there is always sunshine on one coast of Sri Lanka: a month-by-month guide to optimal climates.',
    author: 'Dr. Anura Jayawardena, Lead Expedition Botanist',
    content: `Sri Lanka possesses a unique microclimate gift: two distinct monsoon seasons that affect opposite halves of the island at different times of the year.\n\nFrom December through April, the Southwest and Central Highlands enjoy clear skies and calm waters. From May through September, the East Coast (Trincomalee, Pasikudah, and Arugam Bay) enjoys pristine sunshine and glassy surf.`
  },
  {
    id: 'article-4',
    title: "Tracking the Island's Elusive Big Five",
    category: 'Wildlife Fieldwork',
    date: 'January 2026',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q',
    excerpt: 'Essential binoculars, camera lenses, and naturalist etiquette for ethical safari game drives.',
    author: 'Sunil Weeraratne, Senior Expedition Naturalist',
    content: `Sri Lanka’s Big Five comprises the Asian Elephant, Sri Lankan Leopard, Sloth Bear, Blue Whale, and Sperm Whale. To experience these creatures ethically, we mandate engine shutdowns when approaching wildlife, maintain a minimum 30-meter buffer, and prohibit vehicle chases.`
  },
  {
    id: 'article-5',
    title: 'Sri Lankan Food: Beyond Kottu and Hoppers',
    category: 'Culinary Traditions',
    date: 'December 2025',
    readTime: '7 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1WYe6Xz3j1p1dykkm5IuAs1W2jF1bMugWC7h_JxEt_DBrCs96LHyIyTU9JDdGo2fDShDbledzmBVoJZ1iv2mXC0QLJ2dYT29usy2oVo-iKePgdauPc4zguGtfYpMvgPvYWoKV3dLlQA6G82t0hDuuFauLugCz9XaOTSzZSt10O55pPfGXYsH-Bibx32rfrWFhr7syOQFrOsHKh7vdVhwnO868-ysJUOK5pV_U3rFtLMuZisJCfUEY-w',
    excerpt: 'Discover black pork curry, sour fish ambul thiyal, fiery lunu miris, and the secrets of clay pot simmering.',
    author: 'Chef Ruwan Mendis, Culinary Director',
    content: `Real Sri Lankan cuisine is an intricate symphony of fresh coconut milk, roasted spices, dried goraka fruit, and freshly plucked curry leaves. Clay pots slowly simmer on wood-fired hearths, infusing dishes with smoky earthy undertones that cannot be replicated in modern steel cookware.`
  },
  {
    id: 'article-6',
    title: 'Hidden Gems: Knuckles, Jaffna & Beyond',
    category: 'Hidden Trails',
    date: 'November 2025',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvonJWHK8meNT7bD1nvcFlOqZZip98o11O1cRmECCuGiKZQyg94-eTPauIxkEcSbpf1oDXqruXQvrlNd61b82LHrLO4IONSUw7uIHKVwQyILUx-Sdwqzg7wY_7iQE16EGU7EqOjl1wRT70LcwVukcMGL53vO2FcmlYdr93wV5FUzLmT-lnzabsqPQcJ-QV26UtBNtVpvcxO65YUPfK2mJv12ixYgF1MK5O3BJcP4Mqwtmc-izLEwiNUA',
    excerpt: 'Step off the standard circuit into untouched northern islands, remote tea valleys, and isolated Buddhist rock hermitages.',
    author: 'Kavindi Senanayake, Cultural Curator',
    content: `For the seasoned traveler returning to Sri Lanka, the misty trails of the Knuckles mountain range offer 34 endemic bird species and zero tourist crowds. In the far north, the vibrant Tamil culture of Jaffna and tranquil Delft Island with wild horses provide an astonishing contrast to the southern beaches.`
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Elena Rostova & Mark Davis',
    location: 'Zurich, Switzerland',
    tour: 'Wild Sri Lanka Tour',
    initials: 'ER',
    quote: 'The Sigiriya sunrise followed by the private tented safari in Yala was pure magic. Our guide, Chaminda, possessed encyclopedic knowledge and deep, infectious respect for the wildlife.'
  },
  {
    id: '2',
    author: 'David & Sarah Jenkins',
    location: 'London, United Kingdom',
    tour: 'Tea Trails & Peaks',
    initials: 'DJ',
    quote: 'The most thoughtful, seamless, and ethical holiday we have ever taken. Riding the heritage train through Ella while knowing our trip funded community schools was unforgettable.'
  },
  {
    id: '3',
    author: 'Marcus Lindqvist',
    location: 'Stockholm, Sweden',
    tour: 'Complete Sri Lanka 12-Day',
    initials: 'ML',
    quote: 'Outstanding attention to detail. Eco Travels proved that luxury and true sustainability can blend effortlessly. We are already planning our return to Knuckles.'
  }
];

export const FAQS = [
  {
    q: 'How does Eco Travels ensure 100% carbon-neutral expeditions?',
    a: 'Every vehicle kilometer driven, hotel night stayed, and domestic rail leg is calculated using verified GHG protocol formulas. We offset 100% of these emissions through certified native reforestation plots in the UNESCO Knuckles biosphere and solar electrification in rural communities.'
  },
  {
    q: 'Can the itineraries be customized for our private group?',
    a: 'Absolutely. Every signature tour can be experienced either as a small-group departure (max 8 guests) or completely tailored as a private bespoke expedition for couples, families, or solo travelers with dedicated naturalist guides.'
  },
  {
    q: 'What is your ethical wildlife policy on safaris and whale watching?',
    a: 'We adhere to the strict International Whaling Commission guidelines and Sri Lankan Department of Wildlife Conservation regulations. Our boats do not chase or encircle cetaceans. In national parks, our jeeps maintain strict distance limits and turn off engines during mammal sightings.'
  },
  {
    q: 'What should we pack for high-altitude tea trails vs coastal safaris?',
    a: 'Sri Lanka has varying elevations! For Nuwara Eliya and Ella, pack a warm fleece jacket, light rain shell, and sturdy hiking shoes (temperatures can dip to 12°C/54°F at night). For Yala and the beaches, bring lightweight breathable linen, sun protection, and polarized binoculars.'
  }
];
