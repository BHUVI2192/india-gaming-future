
import { PageHeader } from "@/components/common/PageHeader";
import { VideoCard } from "@/components/videos/VideoCard";
import { mockVideos } from "@/data/mockVideos";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Radio } from "lucide-react";
import { Input } from "@/components/ui/input";

const VideosPage = () => {
  // Filter for live streams
  const liveStreams = mockVideos.filter(video => video.isLive);
  // Filter for recorded videos
  const recordedVideos = mockVideos.filter(video => !video.isLive);

  return (
    <div>
      <PageHeader 
        title="Gaming Videos & Streams"
        description="Watch and upload gameplay videos or go live"
        action={
          <Button className="gaming-button flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Upload Video</span>
          </Button>
        }
      />
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search videos..." 
            className="pl-10 bg-gaming-card border-muted"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 w-full md:w-auto">
          <Radio className="w-4 h-4 text-gaming-red" />
          <span>Go Live</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="live">
            Live Now
            <span className="ml-1 w-5 h-5 rounded-full bg-gaming-red text-white text-xs flex items-center justify-center">
              {liveStreams.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="videos">Uploaded Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {liveStreams.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Radio className="w-4 h-4 text-gaming-red" /> Live Now
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {liveStreams.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          )}
          
          <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="live" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          {liveStreams.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No Live Streams</h3>
              <p className="text-muted-foreground">
                There are currently no active streams. Check back later or start your own stream!
              </p>
              <Button className="gaming-button mt-4">Go Live Now</Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Videos</Button>
      </div>
    </div>
  );
};

export default VideosPage;
