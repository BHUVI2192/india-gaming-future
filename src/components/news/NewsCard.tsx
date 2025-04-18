
import { NewsItem } from "@/data/mockNews";
import { VerifiedBadge } from "../common/VerifiedBadge";
import { BookmarkPlus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="news-card hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-gaming-purple px-2 py-1 rounded-md text-xs font-medium uppercase">
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            {news.source} • {formatDistanceToNow(new Date(news.date), { addSuffix: true })}
          </span>
          {news.isVerified && <VerifiedBadge size="sm" />}
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {news.description}
        </p>
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <BookmarkPlus className="w-4 h-4" />
            <span>Save</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
