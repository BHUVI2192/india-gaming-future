
import { createClient } from '@supabase/supabase-js';

// Check for environment variables and provide helpful error messages
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase environment variables are missing! Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment."
  );
}

// Supabase client initialization with fallbacks to prevent runtime errors
// These fallbacks are only for development to prevent crashes, they won't actually work
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
