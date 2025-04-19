
import { PageHeader } from "@/components/common/PageHeader";
import { VideoCard } from "@/components/videos/VideoCard";
import { mockVideos } from "@/data/mockVideos";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Radio } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

const StreamPage = () => {
  // Filter for live streams
  const liveStreams = mockVideos.filter(video => video.isLive);
  // Filter for recorded videos
  const recordedVideos = mockVideos.filter(video => !video.isLive);

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [liveDialogOpen, setLiveDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamTitle, setStreamTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setVideoStream(stream);
      
      // Connect to video element
      const videoElement = document.getElementById('camera-preview') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = stream;
      }
      
      toast.success("Camera and microphone connected!");
    } catch (error) {
      console.error("Error accessing media devices:", error);
      toast.error("Failed to access camera and microphone");
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
      
      // Disconnect from video element
      const videoElement = document.getElementById('camera-preview') as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = null;
      }
    }
  };

  const handleStartStreaming = () => {
    if (!streamTitle.trim()) {
      toast.error("Please enter a title for your stream");
      return;
    }
    
    setIsStreaming(true);
    toast.success("Live stream started! You're now live.");
  };

  const handleStopStreaming = () => {
    setIsStreaming(false);
    stopCamera();
    toast.info("Stream ended. Thanks for streaming!");
    setLiveDialogOpen(false);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error("Please select a video file to upload");
      return;
    }

    if (!videoTitle.trim()) {
      toast.error("Please enter a title for your video");
      return;
    }

    // Simulate upload process
    toast.success("Upload started! Your video will be processed shortly.");
    setUploadDialogOpen(false);
    setSelectedFile(null);
    setVideoTitle("");
  };
  
  const openLiveDialog = () => {
    setLiveDialogOpen(true);
    // Start camera when dialog opens
    setTimeout(() => {
      startCamera();
    }, 500);
  };

  return (
    <div>
      <PageHeader 
        title="Gaming Streams & Videos"
        description="Watch, upload gameplay videos or go live"
        action={
          <Button className="gaming-button flex items-center gap-2" onClick={() => setUploadDialogOpen(true)}>
            <Upload className="w-4 h-4" />
            <span>Upload Video</span>
          </Button>
        }
      />
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search streams..." 
            className="pl-10 bg-gaming-card border-muted"
          />
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 w-full md:w-auto"
          onClick={openLiveDialog}
        >
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
              <Button className="gaming-button mt-4" onClick={openLiveDialog}>Go Live Now</Button>
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

      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Video</DialogTitle>
            <DialogDescription>
              Share your gameplay videos with the community.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="video-title" className="text-sm font-medium">
                Video Title
              </label>
              <Input 
                id="video-title" 
                placeholder="Enter video title" 
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="video-upload" className="text-sm font-medium">
                Video File
              </label>
              <Input 
                id="video-upload" 
                type="file" 
                accept="video/*" 
                onChange={handleFileChange}
                required
              />
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-1">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
            
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setUploadDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="gaming-button" type="submit">
                Upload Video
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Live Stream Dialog */}
      <Dialog open={liveDialogOpen} onOpenChange={(open) => {
        if (!open && videoStream) {
          stopCamera();
        }
        setLiveDialogOpen(open);
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Go Live</DialogTitle>
            <DialogDescription>
              Start streaming your gameplay to your audience.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {!isStreaming && (
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="stream-title" className="text-sm font-medium">
                  Stream Title
                </label>
                <Input 
                  id="stream-title" 
                  placeholder="Enter stream title" 
                  value={streamTitle}
                  onChange={(e) => setStreamTitle(e.target.value)}
                />
              </div>
            )}
            
            <div className="relative aspect-video bg-black rounded-md overflow-hidden">
              <video 
                id="camera-preview" 
                autoPlay 
                muted={!isStreaming}
                playsInline
                className="w-full h-full object-cover"
              ></video>
              
              {isStreaming && (
                <div className="absolute top-2 left-2 bg-gaming-red px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>LIVE</span>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {videoStream ? "Camera and microphone connected" : "Camera and microphone not connected"}
              </p>
              
              {isStreaming && (
                <p className="text-sm font-medium flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-gaming-red rounded-full animate-pulse"></span>
                  Streaming
                </p>
              )}
            </div>
          </div>
          
          <DialogFooter>
            {isStreaming ? (
              <Button variant="destructive" onClick={handleStopStreaming}>
                End Stream
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => setLiveDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="gaming-button" onClick={handleStartStreaming} disabled={!videoStream}>
                  Start Streaming
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StreamPage;
