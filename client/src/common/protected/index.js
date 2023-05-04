import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAsyncV } from 'use-sync-v'
import { Page } from '../layout/page'



const Protected = (Component) => {
    const AuthChecker = () => {
        const { data, loading, error } = useAsyncV('auth')
        const router = useRouter()

        if (loading) {
            return (
                <Page>
                </Page>
            )
        } else if (data) {
            return <Component />
        } else {
            router.push('/')
            return (
                <Page>
                </Page>
            )
        }
        return props
    }
    return AuthChecker
}

export default Protected