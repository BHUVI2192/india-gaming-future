
import { VideoItem } from "@/data/mockVideos";
import { formatDistanceToNow } from "date-fns";
import { Play, RadioTower } from "lucide-react";

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-gaming-card rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img 
            src={video.thumbnailUrl} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gaming-purple flex items-center justify-center">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>
        {video.isLive ? (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-gaming-red px-2 py-1 rounded text-white text-xs font-medium">
            <RadioTower className="w-3 h-3" />
            <span>LIVE</span>
          </div>
        ) : (
          <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
            {video.duration}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold mb-1 line-clamp-2">{video.title}</h3>
        <div className="text-sm text-muted-foreground">
          <div>{video.creator}</div>
          <div className="flex items-center justify-between mt-1">
            <span>{video.views.toLocaleString()} views</span>
            <span>{formatDistanceToNow(new Date(video.uploadDate), { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
