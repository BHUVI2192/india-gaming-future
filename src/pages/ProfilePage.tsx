
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Trophy, Video, Bookmark, UserPlus, Twitter, Instagram, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { VideoCard } from "@/components/videos/VideoCard";
import { mockVideos } from "@/data/mockVideos";
import { NewsCard } from "@/components/news/NewsCard";
import { mockNews } from "@/data/mockNews";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  // Filter for user's videos (in this case, we'll use creator "GamerSourav")
  const userVideos = mockVideos.filter(video => video.creator === "GamerSourav");
  
  // For demonstration, we'll use the first 2 news items as "saved"
  const savedNews = mockNews.slice(0, 2);

  return (
    <div>
      <div className="bg-gaming-card rounded-lg overflow-hidden mb-8">
        {/* Profile Header */}
        <div className="h-40 bg-gaming-gradient"></div>
        
        <div className="p-6 relative">
          {/* Profile Avatar */}
          <Avatar className="absolute -top-16 left-6 w-32 h-32 border-4 border-gaming-card">
            <AvatarFallback className="text-4xl">GS</AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-16 md:mt-0">
            <div>
              <h1 className="text-2xl font-bold">GamerSourav</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>@gamersourav</span>
                <Badge className="bg-gaming-purple">Pro Player</Badge>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </Button>
              <Button className="gaming-button flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                <span>Follow</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="col-span-2">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-muted-foreground text-sm">
                Professional BGMI player representing Team XYZ. Competitive gamer with 3+ years of tournament experience. Streaming daily and sharing gameplay tips.
              </p>
              
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Games</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>BGMI</Badge>
                  <Badge variant="outline">Valorant</Badge>
                  <Badge variant="outline">Free Fire</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Gaming Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In-game Name</span>
                  <span>TSM_Sourav</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">UID</span>
                  <span>5254631890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role</span>
                  <span>IGL / Fragger</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team</span>
                  <span>Team XYZ</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Social Media</h3>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon">
                    <Youtube className="w-5 h-5 text-red-500" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Content Tabs */}
      <Tabs defaultValue="videos" className="mb-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span>Videos</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            <span>Saved News</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>Achievements</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          {userVideos.length === 0 && (
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No Videos Yet</h3>
              <p className="text-muted-foreground mb-4">
                You haven't uploaded any videos yet.
              </p>
              <Button className="gaming-button">Upload First Video</Button>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          {savedNews.length === 0 && (
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No Saved News</h3>
              <p className="text-muted-foreground mb-4">
                You haven't saved any news articles yet.
              </p>
              <Button className="gaming-button">Browse News</Button>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="achievements" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gaming-card">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gaming-purple/10 p-3">
                  <Trophy className="w-8 h-8 text-gaming-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">BGMI Pro League Season 4</h3>
                  <p className="text-muted-foreground">1st Place with Team XYZ</p>
                  <p className="text-xs text-muted-foreground mt-1">March 2025</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gaming-card">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gaming-purple/10 p-3">
                  <Trophy className="w-8 h-8 text-gaming-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">National Esports Championship</h3>
                  <p className="text-muted-foreground">2nd Place - Solo Competition</p>
                  <p className="text-xs text-muted-foreground mt-1">January 2025</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gaming-card">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-gaming-purple/10 p-3">
                  <Trophy className="w-8 h-8 text-gaming-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">College Gaming League</h3>
                  <p className="text-muted-foreground">MVP Player Award</p>
                  <p className="text-xs text-muted-foreground mt-1">November 2024</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
