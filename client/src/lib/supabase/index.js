import { createClient } from '@supabase/supabase-js'


const URL = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// console.log(env)
// Create a single supabase client for interacting with your database
const supabase = createClient(URL, KEY)

export { supabase }