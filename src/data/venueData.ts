import { Facility, GalleryItem, Testimonial, StatBox } from '../types';

export const VENUE_INFO = {
  name: 'Suraj Farm',
  tagline: 'Creating Unforgettable Wedding Memories',
  subtext: 'Premium Banquet Hall & Lawn Venue in Dadri',
  phone: '093589 85027',
  rawPhone: '+919358985027',
  whatsappNumber: '919358985027',
  address: 'Dadri, Uttar Pradesh 203207, India',
  landmark: 'Near GT Road, Dadri, Greater Noida / Bulandshahr Region',
  googleRating: 4.0,
  reviewCount: 390,
  capacityRange: '250 to 1000+ Guests',
  yearsOfExcellence: '8+ Years',
  timings: 'Open Daily: 9:00 AM - 10:00 PM for Venue Tours & Bookings',
  highlights: [
    'Expansive Open-Air Lush Green Lawns',
    'Air-Conditioned Indoor Luxury Banquet Hall',
    'Customized Mandap & Royal Stage Theming',
    'Dedicated In-House & Live Catering Zones',
    'Secure On-Site Parking for 150+ Cars',
    '24x7 High-Capacity Generator Power Backup'
  ]
};

export const STATS: StatBox[] = [
  {
    number: '1000+',
    label: 'Guest Capacity',
    sublabel: 'Accommodates 250 to 1000+ attendees comfortably',
    icon: 'Users'
  },
  {
    number: '4.0★',
    label: 'Rated on Google',
    sublabel: '390+ verified customer reviews & testimonials',
    icon: 'Star'
  },
  {
    number: '8+',
    label: 'Years of Excellence',
    sublabel: 'Host to 600+ memorable weddings & celebrations',
    icon: 'Award'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'mandap-stage',
    title: 'Mandap & Stage Decoration',
    description: 'Bespoke royal mandap concepts, grand floral stages, draped backdrops, and sacred vedi setups crafted to your cultural traditions.',
    iconName: 'Crown',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    features: ['Royal traditional vedi mandap', 'Grand elevated couple stage', 'Customized fabric drapery', 'Fresh flower garlands & pillars']
  },
  {
    id: 'entrance-arches',
    title: 'Floral Entrance Arches',
    description: 'Enchanting entryway arches adorned with exotic fresh blossoms, red carpet walkways, and fairy-lit welcoming corridors for baraat arrivals.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    features: ['Illuminated grand gateway', 'Fresh marigold & orchid arches', 'Baraat reception platform', 'Red carpet entrance lane']
  },
  {
    id: 'buffet-catering',
    title: 'Buffet & Catering Setup',
    description: 'Spacious dedicated food courts with elegant buffet counters, live chaat stalls, tandoor stations, and hygienic banquet dining spaces.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80',
    features: ['Multiple live food counter zones', 'Covered weather-proof dining', 'Chafing dish & cutlery layout', 'Dedicated dessert & sweet counters']
  },
  {
    id: 'balloon-decor',
    title: 'Balloon & Theme Décor',
    description: 'Creative modern balloon arches, ring ceremony backdrops, birthday styling, and anniversary balloon sculptures tailored for all event sizes.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    features: ['Pastel & metallic balloon arches', 'Custom name monogram backdrops', 'Selfie booths & photo stations', 'LED neon sign integration']
  },
  {
    id: 'ample-parking',
    title: 'Ample Dedicated Parking',
    description: 'Stress-free on-premise secured parking area accommodating over 150+ cars and two-wheelers with dedicated valet and security guards.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=80',
    features: ['150+ vehicle capacity', 'Well-lit driveway & exits', 'Security personnel assistance', 'Baraat procession parking clearance']
  },
  {
    id: 'night-illumination',
    title: 'Night Illumination & Lighting',
    description: 'Spectacular tree fairy lights, architectural floodlights, dynamic stage beamers, warm ambient lanterns, and magical evening lawn glows.',
    iconName: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    features: ['Fairy-light ceiling canopies', 'Color-coordinated floodlights', 'High-voltage generator backup', 'Sparkling photo backdrops']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Royal Floral Mandap Setup',
    category: 'mandap',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Exquisite sacred mandap with cascading rose and marigold floral chandeliers on the main lawn.'
  },
  {
    id: 'g2',
    title: 'Grand Wedding Entrance Arch',
    category: 'entrance',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Majestic entryway with fresh floral arches, warm golden lanterns, and red carpet welcome lane.'
  },
  {
    id: 'g3',
    title: 'Evening Lawn Fairy Light Canopy',
    category: 'night',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    caption: 'Enchanting night ambience illuminated with thousands of fairy lights spanning the open lawns.'
  },
  {
    id: 'g4',
    title: 'Gourmet Banquet Buffet Counter',
    category: 'catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lavish multi-cuisine food stations arranged cleanly with professional presentation.'
  },
  {
    id: 'g5',
    title: 'Golden Draped Mandap with Sacred Fire Pit',
    category: 'mandap',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Intimate royal vedi mandap decorated with auspicious red and champagne drapery.'
  },
  {
    id: 'g6',
    title: 'Tunnel of Lights Baraat Entrance',
    category: 'entrance',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dazzling illuminated tunnel entrance welcoming the groom, bride, and guests into Suraj Farm.'
  },
  {
    id: 'g7',
    title: 'Live Tandoor & Chaat Pavilion',
    category: 'catering',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80',
    caption: 'Covered live food pavilion providing authentic street delicacies and fresh tandoori treats.'
  },
  {
    id: 'g8',
    title: 'Open Lawn Starlit Reception Setup',
    category: 'night',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious circular seating arrangements under a starlit night sky with ambient centerpiece illumination.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Uday Pratap',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Great place, nice space. The lawn is very spacious and maintained cleanly. Everything from the entrance to the main stage was arranged gracefully.',
    source: 'Google Review',
    tag: 'Wedding Host'
  },
  {
    id: 't2',
    name: 'A K',
    rating: 5,
    date: 'Verified Google Review',
    comment: 'Good for wedding purpose, has excellent decorators compared to others in the area. The mandap design and lighting made our family function truly special.',
    source: 'Google Review',
    tag: 'Family Function'
  },
  {
    id: 't3',
    name: 'R. Sharma',
    rating: 4,
    date: 'Local Guide Review',
    comment: 'Nice facilities and decoration, comfortably manages 500-600 guests. The parking space was adequate and the staff was cooperative throughout the night.',
    source: 'Google Review',
    tag: 'Reception Event'
  },
  {
    id: 't4',
    name: 'Vikram Bhati',
    rating: 5,
    date: 'Verified Guest Review',
    comment: 'One of the best marriage lawns around Dadri. The open lawn is huge, stage decoration is modern and royal. Highly recommended for big gatherings!',
    source: 'Google Review',
    tag: 'Marriage Celebration'
  }
];

export const EVENT_TYPES = [
  'Grand Wedding Ceremony',
  'Wedding Reception',
  'Ring Ceremony / Engagement',
  'Sangeet & Mehendi Night',
  'Haldi Ceremony',
  'Birthday / Anniversary Party',
  'Corporate Event / Gathering'
];
