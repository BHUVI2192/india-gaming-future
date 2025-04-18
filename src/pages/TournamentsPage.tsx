
import { PageHeader } from "@/components/common/PageHeader";
import { OrganizerCard } from "@/components/tournaments/OrganizerCard";
import { mockTournamentOrganizers } from "@/data/mockTournaments";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const TournamentsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Verified Tournament Organizers"
        description="Find legitimate tournament and scrims organizers verified by Bharat Esports Xpress"
      />

      <div className="bg-gaming-card p-4 md:p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search for organizers..." 
              className="pl-10 bg-gaming-dark border-muted w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge className="bg-gaming-purple hover:bg-gaming-purple-light">BGMI</Badge>
            <Badge variant="outline">Valorant</Badge>
            <Badge variant="outline">Free Fire</Badge>
            <Badge variant="outline">Call of Duty Mobile</Badge>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Looking for safe and legitimate tournament organizers? All organizers with the <span className="text-gaming-cyan font-medium">Verified</span> badge have been vetted and approved.</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {mockTournamentOrganizers.map((organizer) => (
          <OrganizerCard key={organizer.id} organizer={organizer} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-gaming-card rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Are you a tournament organizer?</h3>
          <p className="text-muted-foreground mb-4">
            Get verified and reach thousands of players looking for legitimate tournaments
          </p>
          <Button className="gaming-button">Apply for Verification</Button>
        </div>
      </div>
    </div>
  );
};

export default TournamentsPage;
