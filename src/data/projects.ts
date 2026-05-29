export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  githubUrl: string;
  liveUrl: string;
};

export const projects: ProjectItem[] = [
  {
    id: "exvara tech",
    title: "Exvara Tech",
    description:
      "Exvara Tech delivers scalable web and mobile solutions focused on enterprise systems, business automation, and modern digital experiences, helping companies streamline operations, improve efficiency, and accelerate digital transformation through custom-built technologies and innovative software platforms.",
    image: "/assets/projects/exvara.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "#",
    liveUrl: "https://www.exvaratech.com/",
  },
  {
    id: "img-video converter",
    title: "Image/Video Converter",
    description:
      "WebP Converter is a lightweight browser-based image optimization tool that enables users to quickly convert and compress images into WebP format locally on their device, delivering faster performance, improved privacy, and optimized assets for modern web applications without requiring server uploads.",
    image: "/assets/projects/image-video-convert.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/webp-converter",
    liveUrl: "https://webp-converter-kohl.vercel.app/readme",
  },
  {
    id: "urban-vogue",
    title: "Urban Vogue Asia",
    description:
      "Current fashion trends in the Philippines lean toward relaxed streetwear and Y2K-inspired styles, with oversized silhouettes, cargo pants, and graphic tees dominating everyday wear. Neutral earth tones are popular, balanced with bold pops of color for statement pieces. Lightweight, breathable fabrics remain essential due to the tropical climate, while local streetwear brands and thrifted “ukay-ukay” pieces continue to shape a more sustainable and individualistic fashion scene.",
    image: "/assets/projects/project-2.png",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/fad-blog",
    liveUrl: "#",
  },
  {
    id: "tripbuddy",
    title: "TripBuddy AI",
    description:
      "TripBuddy – AI Travel Itinerary Creator An AI-powered travel planner that generates personalized, day-by-day itineraries based on user preferences, destinations, and schedules. It helps users easily organize trips by suggesting optimized routes, activities, and travel plans in one seamless experience.",
    image: "/assets/projects/project-2.png",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/tripbuddy",
    liveUrl: "#",
  },
  {
    id: "speedup",
    title: "SpeedUp E-Learning",
    description:
      "SpeedUpLearning – Virtual Learning Mobile App A mobile application designed to support virtual education by helping teachers deliver lessons, manage classes, and engage students through interactive digital learning tools and structured online course content.",
    image: "/assets/projects/speedup.jpg",
    imageWidth: 200,
    imageHeight: 200,
    githubUrl: "https://github.com/zMackaroo/speeduplearning-application",
    liveUrl: "#",
  },
  {
    id: "pickpons",
    title: "Pickpons",
    description:
      "PickPons – Cashback & Reward Platform (Firebase Web App) A web-based rewards and cashback platform that allows users to earn and track points through purchases or activities. Built using Firebase for real-time database and authentication, it provides a fast, secure, and scalable system for managing user rewards and transactions.",
    image: "/assets/projects/pickpons.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "#",
    liveUrl: "https://pickpons-e676b.web.app/",
  },
];
