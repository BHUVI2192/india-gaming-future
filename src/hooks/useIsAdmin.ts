
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const { user } = useAuth();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.id],
    queryFn: async () => {
      if (!user) return false;
      
      const { data, error } = await supabase
        .rpc('has_role', {
          user_id: user.id,
          role: 'admin'
        } as {
          user_id: string;
          role: string;
        });

      if (error) {
        console.error("Error checking admin status:", error);
        return false;
      }

      return data || false;
    },
    enabled: !!user,
  });

  return { isAdmin, isLoading };
}
