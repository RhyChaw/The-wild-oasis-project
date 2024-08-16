import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fmbwjblmmbohnbqqrykp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYndqYmxtbWJvaG5icXFyeWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NjUzMjgsImV4cCI6MjAzOTA0MTMyOH0.Hv-8yarNuQee0UWufN8Dswjp2OmhWSbmx4ev4d7er4M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
