import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://amuijjlmiyrmjasxaihu.supabase.co/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdWlqamxtaXlybWphc3hhaWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDc0NDQsImV4cCI6MjA5NzY4MzQ0NH0.LGVgMK_jSkaPM4CdBlDDwkDKkFTstyfuz2orLx8ZSgo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);