
export interface VideoItem {
  id: string;
  title: string;
  creator: string;
  creatorId: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  uploadDate: string;
  isLive: boolean;
}

export const mockVideos: VideoItem[] = [
  {
    id: "1",
    title: "BGMI Pro Strategies: Advanced Movement Tips",
    creator: "GamerSourav",
    creatorId: "user1",
    thumbnailUrl: "/public/lovable-uploads/1b1dd3ef-2aec-4130-b41d-2eb02985fbba.png",
    duration: "14:25",
    views: 24000,
    uploadDate: "2025-04-15",
    isLive: false
  },
  {
    id: "2",
    title: "🔴 LIVE: National Valorant Championship Finals",
    creator: "EsportsIndiaTV",
    creatorId: "user2",
    thumbnailUrl: "/public/lovable-uploads/6b36eb3a-58d9-47a6-b7bd-cf9e7367ea83.png",
    duration: "1:45:10",
    views: 135000,
    uploadDate: "2025-04-16",
    isLive: true
  },
  {
    id: "3",
    title: "How I Qualified for Asian Games - My Journey",
    creator: "ProGamerRiya",
    creatorId: "user3",
    thumbnailUrl: "/public/lovable-uploads/f4c54158-cd41-43b4-997c-e0909bf00460.png",
    duration: "22:18",
    views: 87000,
    uploadDate: "2025-04-10",
    isLive: false
  },
  {
    id: "4",
    title: "Best Gaming Setup Under ₹50,000 - Complete Guide",
    creator: "TechGamerInd",
    creatorId: "user4",
    thumbnailUrl: "/placeholder.svg",
    duration: "18:42",
    views: 45000,
    uploadDate: "2025-04-08",
    isLive: false
  },
  {
    id: "5",
    title: "🔴 LIVE: BGMI Custom Room Matches with Subscribers",
    creator: "GamerSourav",
    creatorId: "user1",
    thumbnailUrl: "/placeholder.svg",
    duration: "3:12:45",
    views: 18000,
    uploadDate: "2025-04-16",
    isLive: true
  }
];
