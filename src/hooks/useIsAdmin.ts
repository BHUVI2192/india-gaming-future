
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const { user } = useAuth();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.id],
    queryFn: async () => {
      if (!user) return false;
      
      // Define the parameters interface
      interface HasRoleParams {
        user_id: string;
        role: string;
      }
      
      // Fix the RPC call typing by specifying both input and output type parameters
      const { data, error } = await supabase
        .rpc<boolean, HasRoleParams>('has_role', {
          user_id: user.id,
          role: 'admin'
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
