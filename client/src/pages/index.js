import { Page } from '@/common/layout/page'
import { FeedsComponent } from '@/components/feed'
import { SignInComponent } from '@/components/signIn'
import { useAuth } from '@/lib/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import { useState } from 'react'
import { mutate } from 'swr'
import { useSyncSWR } from 'swr-sync-state'
import useSWRImmutable from 'swr/immutable'

const FETCH_AMOUNT = 50

const Home = () => {
  const auth = useAuth()
  const showSignInComponent = useSyncSWR('show/signInComponent', true)
  const [nothingToFetch, setNothingToFetch] = useState(false)
  const { data: feeds } = useSWRImmutable('api/feeds', async () => {
    let previous = feeds ?? []
    if (nothingToFetch) {
      return [...previous, ...previous]
    }
    const startIndex = previous.length
    const endIndex = startIndex + FETCH_AMOUNT
    const response = await supabase
      .from('pins')
      .select(`*,
        users(*)`)
      .order('inserted_at', { ascending: false })
      .range(startIndex, endIndex)
    if (response.data.length < FETCH_AMOUNT) {
      setNothingToFetch(true)
    }
    return [...previous, ...(response.data)]
  })

  return (
    <Page>
      {!auth.data && showSignInComponent && <SignInComponent />}
      {feeds && <FeedsComponent props={{ feeds:feeds, infinite: true, refetchFn: () => mutate('api/feeds') }} />}
    </Page>
  )
}

export default Home
