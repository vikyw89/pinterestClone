import { setAsyncV, useAsyncV } from "use-sync-v"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const DetailCardComponent = () => {
    const auth = useAsyncV('auth', { initialState: { loading: true } })
    const pinDetail = useAsyncV('pinDetail')
    const boards = useAsyncV('boards')
    const isFollower = useAsyncV('isFollower')
    console.log("🚀 ~ file: index.js:12 ~ DetailCardComponent ~ isFollower:", isFollower)

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
            const creator_uuid = pinDetail.data.users.uuid
            const user_uuid = auth.data.user.id
            const response = await supabase
                .from('users_followers')
                .select(`count`)
                .eq('user_uuid', creator_uuid)
                .eq('follower_uuid', user_uuid)
            const data = response.data[0].count === 0 ? false : true
            return data
        })
    }, [])

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
            <div className="flex flex-col w-96 rounded-r-3xl bg-neutral p-5">
                <div className="flex items-center justify-between">
                    <MoreHorizIcon />
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
                <div className="flex justify-between">
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
                    <div>
                        {isFollower
                            ?
                            <button className="btn btn-primary">
                                Follow
                            </button>
                            :
                            <button className="btn btn-primary">
                                Following
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}