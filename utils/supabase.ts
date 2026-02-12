import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://baryummccshqwzuzzkfg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcnl1bW1jY3NocXd6dXp6a2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4Nzg0NTgsImV4cCI6MjA4NjQ1NDQ1OH0.y2XRWE6d7ndOuPWX0ZmZ9mPIHTQFPnotm4_uyRjrZkk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
