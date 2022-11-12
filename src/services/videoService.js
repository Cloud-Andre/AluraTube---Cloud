
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://znnxxhkkgndksuesmetk.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpubnh4aGtrZ25ka3N1ZXNtZXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODE2ODUsImV4cCI6MTk4Mzg1NzY4NX0.q0j8wO_scrhjMgBVO_irUBKNMVbhX936PO04T-ehvR0"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}