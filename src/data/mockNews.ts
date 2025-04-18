
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  imageUrl: string;
  isVerified: boolean;
  category: "esports" | "gaming" | "tournaments";
}

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "India Gaming Federation Partners with Major Publishers for National Tournament",
    description: "The Indian Gaming Federation has announced partnerships with major game publishers to host India's largest esports tournament with a prize pool of ₹1 crore.",
    source: "Esports Journal",
    date: "2025-04-15",
    imageUrl: "/public/lovable-uploads/1b1dd3ef-2aec-4130-b41d-2eb02985fbba.png",
    isVerified: true,
    category: "esports"
  },
  {
    id: "2",
    title: "New BGMI Update Brings Major Changes to Gameplay Mechanics",
    description: "The latest BGMI update introduces new weapons, maps, and gameplay mechanics that will significantly change competitive strategies.",
    source: "Gaming Chronicle",
    date: "2025-04-14",
    imageUrl: "/public/lovable-uploads/6b36eb3a-58d9-47a6-b7bd-cf9e7367ea83.png",
    isVerified: true,
    category: "gaming"
  },
  {
    id: "3",
    title: "Top Indian Esports Athletes to Represent Country at Asian Games",
    description: "Five of India's top esports athletes have qualified to represent the country at the upcoming Asian Games where esports is now a medal event.",
    source: "Sports Today",
    date: "2025-04-12",
    imageUrl: "/public/lovable-uploads/f4c54158-cd41-43b4-997c-e0909bf00460.png",
    isVerified: true,
    category: "esports"
  },
  {
    id: "4",
    title: "New Gaming Startup Hub Launches in Bengaluru with Government Support",
    description: "A new gaming startup incubator has launched in Bengaluru with government backing, aiming to support 100 gaming startups in the next two years.",
    source: "Tech Insider",
    date: "2025-04-10",
    imageUrl: "/placeholder.svg",
    isVerified: true,
    category: "gaming"
  },
  {
    id: "5",
    title: "Major College Esports League Announced with Scholarships",
    description: "A consortium of Indian universities has announced a collegiate esports league with scholarships worth ₹50 lakhs for top performing students.",
    source: "Education Today",
    date: "2025-04-08",
    imageUrl: "/placeholder.svg",
    isVerified: false,
    category: "tournaments"
  }
];
