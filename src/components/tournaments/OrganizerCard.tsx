
import { TournamentOrganizer } from "@/data/mockTournaments";
import { VerifiedBadge } from "../common/VerifiedBadge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface OrganizerCardProps {
  organizer: TournamentOrganizer;
}

export function OrganizerCard({ organizer }: OrganizerCardProps) {
  return (
    <div className="bg-gaming-card rounded-lg border border-muted p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg bg-muted overflow-hidden">
            <img 
              src={organizer.logoUrl} 
              alt={organizer.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg">{organizer.name}</h3>
            {organizer.isVerified && <VerifiedBadge />}
          </div>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {organizer.description}
          </p>
          <div className="flex items-center text-muted-foreground text-sm mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>
              {organizer.upcomingTournaments} upcoming tournaments
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button className="gaming-button">Contact</Button>
            <Button variant="outline" className="flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              <span>View Tournaments</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
