// Feed Posts

export const STORIES = [
  {
    id: 1,
    author: "Rahul",
    dept: "CSE",
    caption: "Finally completed my first Hackathon!",
    likes: 120,
    image: "/images/feed/hackathon.jpg"
  },
  {
    id: 2,
    author: "Priya",
    dept: "ECE",
    caption: "Sunset from Secret Garden ❤️",
    likes: 86,
    image: "/images/feed/garden.jpg"
  }
];

// Events

export const EVENTS = [
  {
    id: 1,
    title: "Hackathon 2026",
    time: "Tomorrow • 10:00 AM",
    loc: "Innovation Hub",
    prize: "₹50,000",
    going: 284,
    seats: 42,

    // Countdown target
    date: "2026-02-10T10:00:00",
  },

  {
    id: 2,
    title: "AI Workshop",
    time: "Friday • 2:00 PM",
    loc: "Seminar Hall",

    prize: "Certificate",
    going: 112,
    seats: 18,

    date: "2026-02-14T14:00:00",
  },
];

// Hidden Gems

export const GEMS = [
  {
    id: 1,
    name: "Secret Garden",
    description: "Perfect for peaceful study sessions.",
    quiet: 92,
    dist: "2 min",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    id: 2,
    name: "Sunset Terrace",
    description: "Beautiful evening views.",
    quiet: 76,
    dist: "5 min",
    lat: 13.0815,
    lng: 80.2684,
  },
];
// Senior Advice

export const ADVICE = [
  {
    id: 1,

    author: "Ananya",

    department: "Computer Science",

    year: "Final Year",

    title: "Things I Wish I Knew Before First Semester",

    preview:
      "College isn't only about grades. The friendships, clubs, internships and networking opportunities shape your future even more.",

    readTime: 5,

    likes: 214,

    comments: 28,

    tags: [
      "Freshers",
      "Academics",
      "Career"
    ],

    image: null,
  },

  {
    id: 2,

    author: "Karthik",

    department: "ECE",

    year: "Fourth Year",

    title: "How I Landed My Internship at Microsoft",

    preview:
      "A roadmap covering DSA, projects, networking and interview preparation that helped me secure my internship.",

    readTime: 8,

    likes: 326,

    comments: 51,

    tags: [
      "Internship",
      "Placements",
      "Coding"
    ],

    image: null,
  },

  {
    id: 3,

    author: "Sneha",

    department: "Mechanical",

    year: "Graduate",

    title: "Balancing Clubs and Academics",

    preview:
      "Here's how I managed technical clubs, cultural activities and still graduated with distinction.",

    readTime: 6,

    likes: 178,

    comments: 19,

    tags: [
      "Time Management",
      "Campus Life"
    ],

    image: null,
  },
];


// Clubs
export const CLUBS = [
  {
    id: 1,

    icon: "💻",

    name: "Google Developer Groups",

    description:
      "Build projects, attend workshops and connect with developers.",

    members: 1240,

    status: "Meeting Today",

    location: "Innovation Hub",

    match: 95,

    tags: [
      "Coding",
      "AI",
      "Web"
    ],

    image: null,
  },

  {
    id: 2,

    icon: "🤖",

    name: "Robotics Club",

    description:
      "Design robots, compete nationally and explore embedded systems.",

    members: 830,

    status: "Recruiting",

    location: "Mechanical Block",

    match: 88,

    tags: [
      "Robotics",
      "Electronics"
    ],

    image: null,
  },

  {
    id: 3,

    icon: "🎵",

    name: "Music Club",

    description:
      "Perform live, collaborate with artists and participate in festivals.",

    members: 540,

    status: "Open",

    location: "Cultural Centre",

    match: 72,

    tags: [
      "Music",
      "Band",
      "Events"
    ],

    image: null,
  },
];