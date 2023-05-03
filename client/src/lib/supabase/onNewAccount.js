// This will execute on every account

import { supabase } from '.'

// create a default board under user if there's none
export const prepareNewAccountDatabase = () => {
  const user = supabase.auth.getUser()
  console.log(user)
}