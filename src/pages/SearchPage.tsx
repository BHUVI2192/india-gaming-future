
import { PageHeader } from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsCard } from "@/components/news/NewsCard";
import { mockNews } from "@/data/mockNews";
import { VideoCard } from "@/components/videos/VideoCard";
import { mockVideos } from "@/data/mockVideos";
import { OrganizerCard } from "@/components/tournaments/OrganizerCard";
import { mockTournamentOrganizers } from "@/data/mockTournaments";

const SearchPage = () => {
  return (
    <div>
      <PageHeader 
        title="Search"
        description="Find esports players, games, tournaments, and news"
      />
      
      <div className="bg-gaming-card rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Search for anything..." 
              className="pl-10 bg-gaming-dark border-muted text-lg py-6"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-muted/20 rounded-full px-3 py-1 text-sm flex items-center gap-2">
            BGMI
            <button className="text-muted-foreground hover:text-white transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="bg-muted/20 rounded-full px-3 py-1 text-sm flex items-center gap-2">
            Tournaments
            <button className="text-muted-foreground hover:text-white transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
          <button className="text-gaming-purple hover:text-gaming-purple-light transition-colors text-sm">
            Clear all
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Results</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">News</h3>
              <Button variant="link" className="text-gaming-purple">
                View all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockNews.slice(0, 3).map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Tournament Organizers</h3>
              <Button variant="link" className="text-gaming-purple">
                View all
              </Button>
            </div>
            <div className="space-y-4">
              {mockTournamentOrganizers.slice(0, 2).map((organizer) => (
                <OrganizerCard key={organizer.id} organizer={organizer} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Videos</h3>
              <Button variant="link" className="text-gaming-purple">
                View all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockVideos.slice(0, 3).map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="news" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tournaments" className="mt-6">
          <div className="space-y-6">
            {mockTournamentOrganizers.map((organizer) => (
              <OrganizerCard key={organizer.id} organizer={organizer} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchPage;
