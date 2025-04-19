
import { NewsItem } from "@/data/mockNews";
import { toast } from "sonner";

// This would be the actual URL of the news source in production
const NEWS_API_URL = "https://api.example.com/esports-news";

export async function fetchExternalNews(): Promise<NewsItem[]> {
  try {
    // In a real implementation, this would fetch from the actual API
    // For now, we'll simulate a fetch with a delay
    // const response = await fetch(NEWS_API_URL);
    // const data = await response.json();
    
    console.log("Fetching fresh news...");
    // Simulated response for development
    return [
      {
        id: "external-1",
        title: "Breaking: Major Esports Tournament Announced for Delhi",
        description: "A new international tournament with a prize pool of ₹1 Crore has been announced for next month in Delhi.",
        imageUrl: "/placeholder.svg",
        source: "Auto-Updated",
        date: new Date().toISOString(),
        category: "esports",
        isVerified: true
      },
      {
        id: "external-2",
        title: "BGMI Pro League Season 3 Registration Opens",
        description: "Players can now register for the third season of BGMI Pro League with qualifiers starting next week.",
        imageUrl: "/placeholder.svg",
        source: "Auto-Updated",
        date: new Date().toISOString(),
        category: "tournaments",
        isVerified: true
      },
      {
        id: "external-3",
        title: "New Gaming Phones Launching Next Month",
        description: "Three major smartphone brands are set to launch gaming-focused devices with enhanced cooling and displays.",
        imageUrl: "/placeholder.svg",
        source: "Auto-Updated",
        date: new Date().toISOString(),
        category: "gaming",
        isVerified: true
      }
    ];
  } catch (error) {
    console.error("Error fetching external news:", error);
    toast.error("Failed to fetch the latest news");
    return [];
  }
}
