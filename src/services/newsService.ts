
import { NewsItem } from "@/data/mockNews";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

// This would be the actual URL of the news source in production
const NEWS_API_URL = "https://api.example.com/esports-news";

// For newsAPI or custom scraping solution in the future
// In production, this would be replaced with an actual API call or server-side function
export async function fetchExternalNews(): Promise<NewsItem[]> {
  try {
    console.log("Fetching fresh news...");
    
    // In a real implementation, we would use Supabase Edge Functions to scrape indiatodaygaming.com
    // For now, we'll use simulated data
    
    // This would be a Supabase Edge Function in production
    // const { data, error } = await supabase.functions.invoke('fetch-gaming-news');
    // if (error) throw error;
    
    // Instead, we'll simulate the response
    return [
      {
        id: "external-1",
        title: "Breaking: Major Esports Tournament Announced for Delhi",
        description: "A new international tournament with a prize pool of ₹1 Crore has been announced for next month in Delhi.",
        imageUrl: "/placeholder.svg", 
        source: "India Today Gaming",
        date: new Date().toISOString(),
        category: "esports",
        isVerified: true
      },
      {
        id: "external-2",
        title: "BGMI Pro League Season 3 Registration Opens",
        description: "Players can now register for the third season of BGMI Pro League with qualifiers starting next week.",
        imageUrl: "/placeholder.svg",
        source: "India Today Gaming",
        date: new Date().toISOString(), 
        category: "tournaments",
        isVerified: true
      },
      {
        id: "external-3", 
        title: "New Gaming Phones Launching Next Month",
        description: "Three major smartphone brands are set to launch gaming-focused devices with enhanced cooling and displays.",
        imageUrl: "/placeholder.svg",
        source: "India Today Gaming", 
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

// Store news in Supabase
export async function storeNewsInDatabase(news: NewsItem) {
  try {
    const { error } = await supabase
      .from('news')
      .insert([news]);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error storing news:", error);
    return false;
  }
}

// Get all news from database
export async function getNewsFromDatabase(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching news from database:", error);
    return [];
  }
}

// Search news by game name
export async function searchNewsByGame(gameName: string): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .ilike('title', `%${gameName}%`)
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
}
