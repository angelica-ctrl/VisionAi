import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://hlehimspsexheyekrvue.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWhpbXNwc2V4aGV5ZWtydnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwOTk0MjcsImV4cCI6MjA5NzY3NTQyN30.jUx7ipkkK9ptI38Konbnt6Aj37k4qM-oqqTquEz5KSg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
