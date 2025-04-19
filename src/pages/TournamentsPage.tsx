
import { PageHeader } from "@/components/common/PageHeader";
import { OrganizerCard } from "@/components/tournaments/OrganizerCard";
import { mockTournamentOrganizers } from "@/data/mockTournaments";
import { Button } from "@/components/ui/button";
import { Search, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import OrganizeTournamentForm from "@/components/tournaments/OrganizeTournamentForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface Tournament {
  id: string;
  title: string;
  game_name: string;
  prize_pool: string;
  registration_link: string;
  start_date: string;
  description: string;
  thumbnail_url: string;
  organizer_id: string;
  created_at: string;
}

const TournamentsPage = () => {
  const [organizeDialogOpen, setOrganizeDialogOpen] = useState(false);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const { data, error } = await supabase
          .from('tournaments')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          setTournaments(data);
        }
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, [organizeDialogOpen]); // Refetch when the dialog closes (new tournament might be added)

  const handleOrganizeClick = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to organize a tournament");
      return;
    }
    setOrganizeDialogOpen(true);
  };

  return (
    <div>
      <PageHeader 
        title="Verified Tournament Organizers"
        description="Find legitimate tournament and scrims organizers verified by Bharat Esports Xpress"
        action={
          <Button 
            onClick={handleOrganizeClick}
            className="gaming-button flex items-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            <span>Organize a Tournament</span>
          </Button>
        }
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
      
      {tournaments.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tournaments.map(tournament => (
              <div key={tournament.id} className="bg-gaming-card rounded-lg overflow-hidden border border-gaming-purple/20">
                <div className="aspect-video bg-gray-800">
                  <img 
                    src={tournament.thumbnail_url || "/placeholder.svg"}
                    alt={tournament.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{tournament.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge>{tournament.game_name}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(tournament.start_date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{tournament.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-semibold text-gaming-purple">{tournament.prize_pool}</span>
                    <a href={tournament.registration_link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gaming-button">Register</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4">Verified Organizers</h2>
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
          {isAuthenticated ? (
            <Button className="gaming-button" onClick={handleOrganizeClick}>Apply for Verification</Button>
          ) : (
            <Link to="/login">
              <Button className="gaming-button">Sign In to Apply</Button>
            </Link>
          )}
        </div>
      </div>
      
      <OrganizeTournamentForm open={organizeDialogOpen} setOpen={setOrganizeDialogOpen} />
    </div>
  );
};

export default TournamentsPage;
