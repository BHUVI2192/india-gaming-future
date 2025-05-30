import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "sonner";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting session:", error);
          toast.error("Authentication service unavailable. Please try again later.");
        } else {
          setSession(data.session);
          setUser(data.session?.user ?? null);
        }
      } catch (e) {
        console.error("Exception in auth initialization:", e);
        toast.error("Failed to initialize authentication.");
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      return () => subscription.unsubscribe();
    } catch (e) {
      console.error("Exception setting up auth listener:", e);
      toast.error("Failed to initialize authentication listener.");
      setLoading(false);
      return () => {}; // Empty cleanup function
    }
  }, []);

  // Sign up function
  async function signUp(email: string, password: string, username: string) {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          }
        }
      });
      
      if (error) throw error;
      
      toast.success("Registration successful! Check your email for verification.");
    } catch (error: any) {
      toast.error(error.message || "Error during sign up");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  
  // Sign in function
  async function signIn(email: string, password: string) {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      toast.success("Successfully signed in!");
    } catch (error: any) {
      toast.error(error.message || "Error during sign in");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  
  // Sign out function
  async function signOut() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      
      toast.success("Successfully signed out");
    } catch (error: any) {
      toast.error(error.message || "Error during sign out");
    } finally {
      setLoading(false);
    }
  }

  const value = {
    session,
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!session
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
