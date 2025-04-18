
export interface TournamentOrganizer {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  isVerified: boolean;
  upcomingTournaments: number;
  contactInfo: string;
}

export const mockTournamentOrganizers: TournamentOrganizer[] = [
  {
    id: "1",
    name: "Bharat Esports Xpress",
    description: "Official tournament organizers for major Indian esports events. Specializing in BGMI, Valorant, and Free Fire tournaments.",
    logoUrl: "/placeholder.svg",
    isVerified: true,
    upcomingTournaments: 3,
    contactInfo: "contact@bharatesportsxpress.in"
  },
  {
    id: "2",
    name: "GamersFirst India",
    description: "Professional tournament organizers focusing on grassroots esports development across India.",
    logoUrl: "/placeholder.svg",
    isVerified: true,
    upcomingTournaments: 2,
    contactInfo: "tournaments@gamersfirst.in"
  },
  {
    id: "3",
    name: "NextLevel Gaming",
    description: "Specialized in competitive PC gaming tournaments with international standards.",
    logoUrl: "/placeholder.svg",
    isVerified: true,
    upcomingTournaments: 1,
    contactInfo: "events@nextlevelgaming.in"
  },
  {
    id: "4",
    name: "Mobile Masters",
    description: "India's premier mobile esports tournament organizers with a focus on accessible competitions.",
    logoUrl: "/placeholder.svg",
    isVerified: true,
    upcomingTournaments: 4,
    contactInfo: "info@mobilemasters.co.in"
  },
  {
    id: "5",
    name: "Campus Gaming League",
    description: "Organizing inter-college gaming tournaments across India.",
    logoUrl: "/placeholder.svg",
    isVerified: false,
    upcomingTournaments: 2,
    contactInfo: "support@campusgaming.in"
  }
];
