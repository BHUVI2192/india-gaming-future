
import { NewsItem } from "@/data/mockNews";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export async function fetchExternalNews(): Promise<NewsItem[]> {
  try {
    console.log("Fetching fresh news...");
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
    const { error } = await supabase.from('news').insert({
      title: news.title,
      description: news.description,
      imageurl: news.imageUrl, // Map to database column name
      source: news.source,
      date: news.date,
      category: news.category,
      isverified: news.isVerified // Map to database column name
    });
    
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
    
    // Map database columns to NewsItem interface properties
    const formattedNews: NewsItem[] = data?.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.imageurl, // Map from database column name
      source: item.source,
      date: item.date,
      category: item.category,
      isVerified: item.isverified // Map from database column name
    })) || [];
    
    return formattedNews;
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
    
    // Map database columns to NewsItem interface properties
    const formattedNews: NewsItem[] = data?.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: item.imageurl, // Map from database column name
      source: item.source,
      date: item.date,
      category: item.category,
      isVerified: item.isverified // Map from database column name
    })) || [];
    
    return formattedNews;
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
}
