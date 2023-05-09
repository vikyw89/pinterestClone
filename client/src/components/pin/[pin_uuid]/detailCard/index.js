import { setAsyncV, setSyncV, useAsyncV } from "use-sync-v"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Divider } from "@mui/material";

export const DetailCardComponent = () => {
    const auth = useAsyncV('auth', { initialState: { loading: true } })
    const pinDetail = useAsyncV('pinDetail')
    const boards = useAsyncV('boards')
    const isFollower = useAsyncV('isFollower')
    const creator_uuid = pinDetail.data.users.uuid
    const user_uuid = auth.data.user.id
    const boardSelectHandler = (e) => {
        setSelectedBoard(JSON.parse(e.target.value))
    }


    const saveHandler = () => {

    }

    useEffect(() => {
        if (!auth.data) return
        setAsyncV('boards', async () => {
            const response = await supabase
                .from('boards')
                .select()
                .filter('creator_uuid', 'eq', auth.data.user.id)
                .throwOnError()
            return response.data
        })
    }, [auth.data])

    useEffect(() => {
        if (!auth.data) return
        setAsyncV('isFollower', async () => {
            const response = await supabase
                .from('users_followers')
                .select(`count`)
                .eq('user_uuid', creator_uuid)
                .eq('follower_uuid', user_uuid)
                .throwOnError()
            const data = response.data[0].count === 0 ? false : true
            return data
        })
    }, [])

    const followHandler = () => {
        if (!auth.data) return
        setAsyncV('followUser', async () => {
            const response = await supabase
                .from('users_followers')
                .upsert({
                    'user_uuid': creator_uuid,
                    'follower_uuid': user_uuid
                })
                .select()
                .throwOnError()
            const data = response.data[0]
            setSyncV('isFollower.data', true)
            setSyncV('pinDetail.data.users.users_followers[0].count', p => p + 1)
            return data
        })
    }

    const unfollowHandler = () => {
        if (!auth.data) return
        setAsyncV('unfollowUser', async () => {
            const response = await supabase
                .from('users_followers')
                .delete()
                .eq('user_uuid', creator_uuid)
                .eq('follower_uuid', user_uuid)
                .select()
            const data = response
            setSyncV('isFollower.data', false)
            setSyncV('pinDetail.data.users.users_followers[0].count', p => p - 1)
            return data
        })
    }
    return (
        <div className="bg-neutral rounded-3xl flex flex-wrap h-fit">
            <Image
                src={pinDetail.data.image_url}
                alt="pinImage"
                height={0}
                width={0}
                sizes="100vw"
                className="w-96 aspect-auto rounded-l-3xl bg-neutral-focus"
            />
            <div className="flex flex-col w-96 rounded-r-3xl bg-neutral p-5 gap-3">
                <div className="flex items-center justify-end">
                    <button className="btn btn-ghost" >
                        <MoreHorizIcon />
                    </button>
                    <div className="flex-1"></div>
                    <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                        {boards.data &&
                            boards.data.map((p, i) => {
                                return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                            })
                        }
                    </select>
                    <button onClick={saveHandler} className="btn btn-primary">Save</button>
                </div>
                <div>
                    <p>{pinDetail.data.link_url}</p>
                </div>
                <div>
                    {pinDetail.data.title}
                </div>
                <div>
                    {pinDetail.data.description}
                </div>
                <div className="flex">
                    <Image
                        src={pinDetail.data.users.profile_picture_url}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-12 aspect-square rounded-full"
                    />
                    <div>
                        <div>
                            {pinDetail.data.users.username}
                        </div>
                        <div>
                            {pinDetail.data.users.users_followers[0].count} followers
                        </div>
                    </div>
                    <div className="flex-1 text-right">
                        {isFollower.data
                            ?
                            <button className="btn btn-primary text-primary-content" onClick={unfollowHandler}>
                                Following
                            </button>
                            :
                            <button className="btn btn-primary text-primary-content" onClick={followHandler}>
                                Follow
                            </button>
                        }
                    </div>
                </div>
                <div>
                    <div className="font-bold">
                        Comments
                    </div>
                    <div>
                        No comments yet! Add one to start the conversation.
                    </div>
                </div>
                <Divider/>
                <div>
                    
                </div>
            </div>
        </div>
    )
}