
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const { user } = useAuth();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.id],
    queryFn: async () => {
      if (!user) return false;
      
      try {
        // Use a more basic query approach to avoid type issues
        const { data, error } = await supabase
          .from('user_roles')
          .select('*')
          .eq('user_id', user.id)
          .eq('role', 'admin');

        if (error) {
          console.error("Error checking admin status:", error);
          return false;
        }

        // Check if we have any matching rows
        return data && data.length > 0;
      } catch (error) {
        console.error("Exception checking admin status:", error);
        return false;
      }
    },
    enabled: !!user,
  });

  return { isAdmin, isLoading };
}
