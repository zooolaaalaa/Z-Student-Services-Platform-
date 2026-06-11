import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hzcxmmegjrtaboffgsry.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Y3htbWVnanJ0YWJvZmZnc3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNjYzMDIsImV4cCI6MjA5Njc0MjMwMn0.yC0Atccochn5h3iars4TtRBTuz5xU3NGlmD0QiY6v_s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
