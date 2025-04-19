
import { PageHeader } from "@/components/common/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { mockNews } from "@/data/mockNews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { fetchExternalNews } from "@/services/newsService";
import { toast } from "sonner";

const NewsPage = () => {
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchNews = async () => {
    setLoading(true);
    try {
      const externalNews = await fetchExternalNews();
      if (externalNews.length > 0) {
        // Combine with some existing news but prioritize external news
        const combinedNews = [...externalNews, ...mockNews.slice(0, mockNews.length - externalNews.length)];
        setNews(combinedNews);
        setLastUpdated(new Date());
        toast.success("News updated successfully!");
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      toast.error("Failed to fetch the latest news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch news on initial load
    fetchNews();

    // Set up hourly updates
    const interval = setInterval(() => {
      fetchNews();
    }, 60 * 60 * 1000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <PageHeader 
        title="Esports & Gaming News"
        description="Stay updated with verified news from the gaming world"
        action={
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search news..." 
              className="pl-10 bg-gaming-card border-muted w-full md:w-64"
            />
          </div>
        }
      />
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Last updated: {lastUpdated.toLocaleTimeString()} {lastUpdated.toLocaleDateString()}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchNews} 
          disabled={loading} 
          className="flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? "Updating..." : "Refresh News"}
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="esports">Esports</TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="esports" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news
              .filter(newsItem => newsItem.category === "esports")
              .map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="gaming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news
              .filter(newsItem => newsItem.category === "gaming")
              .map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="tournaments" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news
              .filter(newsItem => newsItem.category === "tournaments")
              .map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))
            }
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More News</Button>
      </div>
    </div>
  );
};

export default NewsPage;
