
import { Link, useLocation } from "react-router-dom";
import { 
  Newspaper, 
  Search, 
  Trophy, 
  Video, 
  ShoppingCart, 
  MessagesSquare, 
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { 
    name: "News", 
    icon: Newspaper, 
    path: "/news" 
  },
  { 
    name: "Search", 
    icon: Search, 
    path: "/search" 
  },
  { 
    name: "Tournaments", 
    icon: Trophy, 
    path: "/tournaments" 
  },
  { 
    name: "Videos", 
    icon: Video, 
    path: "/videos" 
  },
  { 
    name: "Shop", 
    icon: ShoppingCart, 
    path: "/shop" 
  },
  { 
    name: "Chat", 
    icon: MessagesSquare, 
    path: "/chat" 
  },
  { 
    name: "Profile", 
    icon: User, 
    path: "/profile" 
  }
];

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gaming-dark border-t border-muted z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start md:gap-8 py-2">
          <Link to="/" className="hidden md:flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gaming-gradient">GamersXP</span>
          </Link>
          
          <div className="flex items-center justify-between w-full md:justify-start md:gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={cn(
                  "nav-item",
                  location.pathname === item.path && "active"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden md:inline-block">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
