
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wsnxchsountowpqjtbuc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzbnhjaHNvdW50b3dwcWp0YnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5ODU5MjYsImV4cCI6MjA2MDU2MTkyNn0.xHDyNJfZzTFwmEaJiYiUPfdQC6jaY-e5dYspwjMwXNs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
