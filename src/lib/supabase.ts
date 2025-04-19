
import { createClient } from '@supabase/supabase-js';

// Supabase client is automatically initialized with environment variables
// These variables are injected by the Lovable platform
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);
