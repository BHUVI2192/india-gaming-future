
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Trophy, Video, ShoppingCart, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative mt-4 md:mt-12 rounded-xl overflow-hidden">
        <div className="bg-gaming-dark rounded-xl overflow-hidden">
          <div className="container mx-auto py-10 px-4 md:py-16 md:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                The Future of Gaming in <span className="text-transparent bg-clip-text bg-gaming-gradient">India</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Your trusted platform for verified esports news, tournaments, videos, and gaming accessories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gaming-button">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Everything for Indian Gamers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform offers all the features gamers need - from verified news to tournament organizing and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <Link to="/news" className="group">
            <div className="bg-gaming-card hover:bg-gaming-card-hover border border-muted rounded-lg p-6 transition-all group-hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-gaming-purple/10 flex items-center justify-center mb-4">
                <Newspaper className="w-6 h-6 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified News</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with verified esports and gaming news from trusted sources.
              </p>
              <div className="flex items-center text-gaming-purple">
                <span>Explore News</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Feature 2 */}
          <Link to="/tournaments" className="group">
            <div className="bg-gaming-card hover:bg-gaming-card-hover border border-muted rounded-lg p-6 transition-all group-hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-gaming-purple/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Tournaments</h3>
              <p className="text-muted-foreground mb-4">
                Find legitimate tournament organizers and avoid scams with our verification system.
              </p>
              <div className="flex items-center text-gaming-purple">
                <span>Find Tournaments</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Feature 3 */}
          <Link to="/videos" className="group">
            <div className="bg-gaming-card hover:bg-gaming-card-hover border border-muted rounded-lg p-6 transition-all group-hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-gaming-purple/10 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gaming Videos</h3>
              <p className="text-muted-foreground mb-4">
                Upload, watch, and stream gameplay videos with zero commission donations.
              </p>
              <div className="flex items-center text-gaming-purple">
                <span>Watch Videos</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Feature 4 */}
          <Link to="/chat" className="group">
            <div className="bg-gaming-card hover:bg-gaming-card-hover border border-muted rounded-lg p-6 transition-all group-hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-gaming-purple/10 flex items-center justify-center mb-4">
                <MessagesSquare className="w-6 h-6 text-gaming-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">World Chat</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other gamers, discuss strategies, and build your gaming network.
              </p>
              <div className="flex items-center text-gaming-purple">
                <span>Join Chat</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gaming-card rounded-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">Mission</h3>
              <p className="text-muted-foreground">
                "To provide verified real-time news and verified tournament and scrims organizers."
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Vision</h3>
              <p className="text-muted-foreground">
                "To become the largest trusted esports and gaming app in India."
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gaming-dark rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">What Problem Are We Solving?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gaming-purple flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-muted-foreground">Protecting players from scam tournament organizers</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gaming-purple flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-muted-foreground">Providing verified gaming news from trusted sources</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gaming-purple flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-muted-foreground">Creating a one-stop platform for all gaming needs</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gaming-gradient rounded-lg p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join India's Gaming Revolution?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Be part of the movement that's building the future of gaming in India. Access verified news, tournaments, and connect with like-minded gamers.
        </p>
        <Button size="lg" variant="outline" className="bg-white text-gaming-purple hover:bg-white/90">Get Started Now</Button>
      </section>
    </div>
  );
};

export default Index;
