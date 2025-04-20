import { PageHeader } from "@/components/common/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { CreateNewsForm } from "@/components/news/CreateNewsForm";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getNewsFromDatabase } from "@/services/newsService";
import { toast } from "sonner";
import { NewsItem } from "@/data/mockNews";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated } = useAuth();
  const { isAdmin } = useIsAdmin();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const dbNews = await getNewsFromDatabase();
      if (dbNews.length > 0) {
        setNews(dbNews);
      }
      toast.success("News updated successfully!");
    } catch (error) {
      console.error("Failed to fetch news:", error);
      toast.error("Failed to fetch the latest news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filteredNews = news.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNews(filteredNews);
      toast.info(`Found ${filteredNews.length} results for "${searchQuery}"`);
    } else {
      fetchNews();
    }
  };

  return (
    <div>
      <PageHeader 
        title="Esports & Gaming News"
        description="Stay updated with verified news from the gaming world"
        action={
          <div className="flex items-center gap-4">
            <div className="relative">
              <form onSubmit={handleSearch}>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      placeholder="Search news..." 
                      className="pl-10 bg-gaming-card border-muted w-full md:w-64"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button type="submit" variant="ghost" size="sm" className="ml-2">
                    Search
                  </Button>
                </div>
              </form>
            </div>
            {isAdmin && (
              <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add News
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <CreateNewsForm onSuccess={() => {
                    setShowCreateForm(false);
                    fetchNews();
                  }} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        }
      />
      
      {!isAuthenticated && (
        <div className="mb-6 p-4 bg-gaming-card rounded-lg border border-gaming-purple/30">
          <p className="text-sm flex justify-between items-center">
            <span>Sign in to save articles and get personalized news recommendations.</span>
            <Link to="/login">
              <Button size="sm" variant="outline">Sign In</Button>
            </Link>
          </p>
        </div>
      )}
      
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
    </div>
  );
};

export default NewsPage;
