import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// This 'export' allows contact.js to find the 'supabase' module
export const supabase = createClient(supabaseUrl, supabaseAnonKey);