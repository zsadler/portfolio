import { createClient } from '@supabase/supabase-js'
const { SUPABASE_PROJECT_ID, VITE_SUPABASE_URL } = process.env
const SUPABASE_URL = 'https://'+SUPABASE_PROJECT_ID +'.'+ VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase =  createClient(SUPABASE_URL, SUPABASE_KEY);
