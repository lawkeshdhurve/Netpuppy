export interface CampusLocation {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  stats: string;
}

export interface SportItem {
  id: string;
  name: string;
  category: 'olympic' | 'indoor' | 'specialized';
  coach: string;
  facilities: string;
  imageUrl: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  location: string;
  quote: string;
  studentAchievement: string;
  avatar: string;
  rating: number;
}

export const TIS_STATS = [
  { label: 'Campus Area', value: '22+', unit: 'Lush Acres', icon: 'TreePine', subtext: 'In Dehradun Foothills' },
  { label: 'Olympic Sports', value: '16+', unit: 'Disciplines', icon: 'Trophy', subtext: 'Trained by National Coaches' },
  { label: 'Student-Teacher Ratio', value: '8:1', unit: 'Mentorship', icon: 'Users', subtext: 'Personalized Guru Care' },
  { label: 'University Acceptance', value: '100%', unit: 'Global Ivy & Top Tier', icon: 'GraduationCap', subtext: 'Ivy League & IITs' },
  { label: 'Boarding Legacy', value: '20+', unit: 'Years of Excellence', icon: 'Award', subtext: 'Ranked #1 in Uttarakhand' },
];

export const GURUKUL_PILLARS = [
  {
    id: 'mind',
    title: 'Mind (Dheemahi)',
    subtitle: 'Intellectual & Scientific Rigor',
    desc: 'Cutting-edge Einstein STEM Labs, AI & Robotics workstations, CBSE curriculum enriched with Cambridge benchmarks and Trinity College London communication masteries.',
    features: [
      'Einstein Innovation & Tinkering Lab',
      'AI, Machine Learning & Coding Hub',
      'Trinity College London Speech & Drama',
      'Oxford-Style Parliamentary Debating',
    ],
    accent: 'from-amber-500/20 to-yellow-600/10',
    border: 'border-amber-500/40',
    icon: 'Brain',
    badge: 'Cognitive Mastery'
  },
  {
    id: 'body',
    title: 'Body (Balam)',
    subtitle: '16+ Olympic Standard Sports',
    desc: 'A 22-acre athletic paradise featuring North India’s premier equestrian riding academy, 10m/50m ISSF shooting range, all-weather synthetic courts, and Olympic aquatic center.',
    features: [
      'Horse Riding & Equestrian Academy',
      'ISSF Certified 10m & 50m Shooting Range',
      'FIFA-Standard Football Arena & Cricket Turf',
      'Indoor Squash, Badminton & Martial Arts',
    ],
    accent: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/40',
    icon: 'Flame',
    badge: 'Physical Fortitude'
  },
  {
    id: 'soul',
    title: 'Soul (Sanskar)',
    subtitle: 'Character, Mindfulness & Pastoral Care',
    desc: 'Rooted in the timeless Guru-Shishya tradition. Daily meditation, Himalayan nature treks, organic farm-to-table dining, and dedicated housemasters nurturing empathy and leadership.',
    features: [
      'Daily Surya Namaskar & Pranayama',
      '24/7 Residential Pastoral Care & Houseparents',
      'Organic 100% Pure Vegetarian/Multi-Cuisine Dining',
      'Global Community Service & Environmental Leadership',
    ],
    accent: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/40',
    icon: 'HeartHandshake',
    badge: 'Moral Foundation'
  }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: 'equestrian',
    name: 'Equestrian Academy & Riding Turf',
    category: 'Sports Arena',
    tagline: 'North India’s Elite School Horse Riding Facility',
    description: 'Home to thoroughbred horses, dedicated dressage training arenas, and national-level equestrian instructors fostering courage, balance, and bonding.',
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
    highlights: ['12 Thoroughbred Stables', 'Show Jumping Obstacle Arena', 'Certified Equine Care'],
    stats: '15+ National Medals'
  },
  {
    id: 'stem',
    name: 'Einstein Innovation & Robotics Pavilion',
    category: 'Academics & Tech',
    tagline: 'Where Young Minds Build Autonomous Systems',
    description: 'State-of-the-art incubation lab equipped with 3D printers, IoT microcontrollers, drone fabrication benches, and high-performance computing.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    highlights: ['3D Rapid Prototyping', 'VEX Robotics Kits', 'AI Deep Learning Workstations'],
    stats: '100% Practical STEM'
  },
  {
    id: 'shooting',
    name: 'ISSF Precision Shooting Range',
    category: 'Olympic Sports',
    tagline: '10m Air Rifle & Pistol Target Hub',
    description: 'Acoustically treated, climate-controlled indoor shooting range meeting International Shooting Sport Federation (ISSF) competition standards.',
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Swiss Sius Ascor Electronic Targets', 'National Level Coaches', 'Mental Focus Training'],
    stats: 'ISSF Standard'
  },
  {
    id: 'amphitheatre',
    name: 'Open-Air Himalayan Amphitheatre',
    category: 'Arts & Culture',
    tagline: 'Under the Dehradun Night Sky',
    description: 'A 1,200-capacity acoustic amphitheatre hosting Shakespearean plays, Indian classical music concerts, cultural fests, and thought-leadership conclaves.',
    imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    highlights: ['1,200 Seating Capacity', 'Surround Acoustic Engineering', 'Mountain Horizon Backdrop'],
    stats: '1,200 Capacity'
  },
  {
    id: 'residence',
    name: 'Smart Residential Boarding Houses',
    category: 'Pastoral Care',
    tagline: 'A Warm, Caring Home Away From Home',
    description: 'Spacious, air-conditioned en-suite rooms with ergonomic study stations, recreational lounges, 24/7 CCTV security, and resident housemaster guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Biometric Safe Security', 'Dedicated Study & Library Lounges', 'Resident Medical Infirmary'],
    stats: '1:8 House Care'
  },
  {
    id: 'aquatics',
    name: 'All-Weather Aquatic Complex',
    category: 'Sports Arena',
    tagline: 'Semi-Olympic Heated Swimming Pavilion',
    description: 'Ultra-pure ozonated swimming pool with dedicated diving platforms, certified life-saving instructors, and water polo facilities.',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Ozonated Heated Water', 'Diving & Sprint Lanes', 'Aqua Aerobics'],
    stats: 'Semi-Olympic'
  }
];

export const SPORTS_COLLECTION: SportItem[] = [
  {
    id: 'horse-riding',
    name: 'Equestrian & Horse Riding',
    category: 'specialized',
    coach: 'Col. R.S. Rawat (Ex-Army Equestrian Team)',
    facilities: 'Dedicated riding ring, stables, show-jumping course',
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80',
    badge: 'Premier Academy'
  },
  {
    id: 'shooting',
    name: 'ISSF Rifle & Pistol Shooting',
    category: 'olympic',
    coach: 'National Gold Medalist Coaches',
    facilities: '10m / 50m Indoor Electronic Scoring Range',
    imageUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80',
    badge: 'National Tier'
  },
  {
    id: 'swimming',
    name: 'Competitive Swimming',
    category: 'olympic',
    coach: 'NIS Certified Senior Aqua Coach',
    facilities: 'Semi-Olympic 6-Lane Temperature Controlled Pool',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    badge: 'All-Weather'
  },
  {
    id: 'lawn-tennis',
    name: 'Lawn Tennis Academy',
    category: 'olympic',
    coach: 'AITA Certified Professional Coaches',
    facilities: '3 Synthetic Decoturf Floodlit Courts',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    badge: 'Decoturf'
  },
  {
    id: 'football',
    name: 'Football & Athletic Track',
    category: 'olympic',
    coach: 'AFC Certified Football Trainers',
    facilities: 'Full-size natural turf & 400m Olympic cinder track',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    badge: 'FIFA Grade'
  },
  {
    id: 'squash',
    name: 'Squash & Badminton Courts',
    category: 'indoor',
    coach: 'State Champions & Fitness Specialists',
    facilities: 'Wooden Maple Court Squash & 4 Badminton Bays',
    imageUrl: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=800&q=80',
    badge: 'WSF Approved'
  },
  {
    id: 'archery',
    name: 'Precision Archery Arena',
    category: 'specialized',
    coach: 'Recurve & Compound Bow Masters',
    facilities: '50m Outdoor Range with Wind Gauges',
    imageUrl: 'https://images.unsplash.com/photo-1511067007772-9da28974a49b?auto=format&fit=crop&w=800&q=80',
    badge: 'Traditional & Modern'
  },
  {
    id: 'cricket',
    name: 'Cricket Academy with Net Pitches',
    category: 'olympic',
    coach: 'BCCI Level 2 Head Coach',
    facilities: '4 Turf Nets, Bowling Machine, Pavilion Oval',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    badge: 'Match Oval'
  }
];

export const DAILY_ROUTINE = [
  {
    time: '06:00 AM',
    title: 'Surya Namaskar & Himalayan Morning Jog',
    description: 'Awaken the senses with yoga, pranayama, and fresh pine breeze conditioning in the foothills.',
    category: 'Wellness',
    icon: 'Sun'
  },
  {
    time: '07:30 AM',
    title: 'Nutritious Organic Gurukul Breakfast',
    description: 'Farm-fresh dairy, high-protein wholesome breakfast curated by pediatric nutritionists.',
    category: 'Nutrition',
    icon: 'Coffee'
  },
  {
    time: '08:30 AM',
    title: 'Morning Conclave & Value Circle',
    description: 'Shloka chanting, world affairs discourse, and student leadership presentations.',
    category: 'Values',
    icon: 'Sparkles'
  },
  {
    time: '09:00 AM - 01:30 PM',
    title: 'Academic Sessions & Smart Workstations',
    description: 'Interactive STEM, Cambridge & CBSE collaborative problem solving with multimedia smartboards.',
    category: 'Academics',
    icon: 'BookOpen'
  },
  {
    time: '02:30 PM - 04:00 PM',
    title: 'Einstein Innovation Lab & Trinity Arts',
    description: 'Hands-on robotics, AI coding, music studio, classical dance, or drama rehearsals.',
    category: 'Innovation',
    icon: 'Cpu'
  },
  {
    time: '04:30 PM - 06:30 PM',
    title: 'Olympic Sports Academy Training',
    description: 'Intensive coaching in Equestrian, ISSF Shooting, Swimming, Tennis, Football & Squash.',
    category: 'Sports',
    icon: 'Trophy'
  },
  {
    time: '07:30 PM - 09:00 PM',
    title: 'Evening Prep & Mentor Masterclasses',
    description: 'Self-study supervised by resident teachers, clearing doubts and preparing for competitive Olympiads.',
    category: 'Mentorship',
    icon: 'Compass'
  },
  {
    time: '09:30 PM',
    title: 'Stargazing, Reflection & Restful Sleep',
    description: 'Quiet contemplation, reading in dormitory lounges, and restful sleep for mind restoration.',
    category: 'Rest',
    icon: 'Moon'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Vikramaditya Singhania',
    role: 'Senior Cardiac Surgeon, New Delhi',
    relation: 'Father of Aryan (Class 12 - Head Boy)',
    location: 'Delhi NCR',
    quote: "Sending Aryan to Tula's International was the best decision of our lives. The transformation from an introverted kid to a confident leader admitted to Georgia Tech with a national shooting medal is extraordinary.",
    studentAchievement: 'Admitted to Georgia Tech (USA) & ISSF Gold Medalist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Meenakshi & Rajesh Goel',
    role: 'Managing Directors, Goel Global Logistics',
    relation: 'Parents of Ananya (Class 10)',
    location: 'Mumbai',
    quote: "The warmth and pastoral care at TIS is incomparable. The housemasters treat children like their own. Ananya has excelled in Trinity Speech & Drama while maintaining a 96% academic record.",
    studentAchievement: 'Trinity College London Distinction & 96.4% CBSE Board',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Col. K.P. Sharma (Retd.)',
    role: 'Veteran & Parent',
    relation: 'Grandfather of Kabir (Class 8)',
    location: 'Dehradun',
    quote: "As an army officer, I value discipline and courage. Tula's Modern Gurukul instills ancient Indian values without compromising on modern robotics and high-tech thinking. Truly world class.",
    studentAchievement: 'Junior National Equestrian Champion',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5
  }
];

export const UNIVERSITY_PLACEMENTS = [
  { name: 'Stanford University', logo: '🏛️', location: 'USA' },
  { name: 'University of Oxford', logo: '🎓', location: 'UK' },
  { name: 'IIT Delhi & Bombay', logo: '🔬', location: 'India' },
  { name: 'National University of Singapore (NUS)', logo: '🌐', location: 'Singapore' },
  { name: 'University of Toronto', logo: '🍁', location: 'Canada' },
  { name: 'BITS Pilani', logo: '⚡', location: 'India' },
  { name: 'King’s College London', logo: '👑', location: 'UK' },
  { name: 'Georgia Tech', logo: '🚀', location: 'USA' },
];

export const FAQS = [
  {
    question: "What makes Tula's 'The Modern Gurukul' distinct from other boarding schools?",
    answer: "Tula's International School uniquely synthesizes the ancient Gurukul Guru-Shishya parampara—deep personal mentorship, moral grounding, daily mindfulness, and pristine nature—with 21st-century technological supremacy: Einstein Robotics labs, 16+ Olympic sports, and global Cambridge/CBSE academic rigor."
  },
  {
    question: "What is the admission procedure for Academic Year 2026-27?",
    answer: "Admissions are open for Grades 4 through 12. The process involves: 1) Online Application & Registration, 2) TIS Holistic Aptitude Assessment (in-person or virtual), 3) Interactive Conversation with the Headmaster & Pastoral Team, and 4) Offer of Admission & House Allocation."
  },
  {
    question: "How is pastoral care and safety managed on campus?",
    answer: "Safety and emotional well-being are paramount. The 22-acre campus features 24/7 CCTV surveillance, biometric security, a resident doctor & multi-bed infirmary with ambulance support, full-time experienced House Parents with an 8:1 student-to-mentor ratio, and home-style organic vegetarian meals."
  },
  {
    question: "What are the sports facilities and special academies available?",
    answer: "TIS features 16+ Olympic standard sports including North India's premier Horse Riding & Equestrian Academy, ISSF Certified 10m & 50m Shooting Range, Semi-Olympic Ozonated Heated Swimming Pool, 3 Decoturf Tennis Courts, Squash Courts, Archery, Football arena, and Cricket Oval led by national-level NIS coaches."
  },
  {
    question: "Do you offer scholarship programs for meritorious students?",
    answer: "Yes, TIS offers merit-based scholarships of up to 40% on academic tuition for outstanding academic achievers (90%+ in previous grades) and national-level sports/cultural prodigies following a scholarship evaluation test."
  }
];
