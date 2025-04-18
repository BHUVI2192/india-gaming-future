
import { PageHeader } from "@/components/common/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { mockNews } from "@/data/mockNews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const NewsPage = () => {
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
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="esports">Esports</TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="esports" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews
              .filter(news => news.category === "esports")
              .map((news) => (
                <NewsCard key={news.id} news={news} />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="gaming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews
              .filter(news => news.category === "gaming")
              .map((news) => (
                <NewsCard key={news.id} news={news} />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="tournaments" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews
              .filter(news => news.category === "tournaments")
              .map((news) => (
                <NewsCard key={news.id} news={news} />
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
