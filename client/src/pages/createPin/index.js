import { Page } from "@/common/layout/page"
import { supabase } from "@/lib/supabase";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";
import { useState } from "react";
import { debugSyncV, useSyncV } from "use-sync-v";
const CreatePin = () => {
    const [imageUrl, setImageUrl] = useState('../p-logo-lowres.png')
    debugSyncV('')
    const imageUploadHandler = async (e) => {
        const new_pin = e.target.files[0]
        const { data, error } = await supabase.storage
            .from('pins')
            .upload(`public/avatar1.png`, new_pin)
    }
    return (
        <Page>
            <div className="flex flex-1 items-center justify-center h-full">
                <div className="self-center flex items-center justify-center p-10 max-w-5xl rounded-box bg-neutral text-neutral-content w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-center">
                            <MoreHorizIcon className="text-4xl" />
                            <div className="flex-1"></div>
                            <select className="select max-w-xs bg-neutral">
                                <option>default</option>
                            </select>
                            <button className="btn btn-primary">Save</button>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col max-w-sm bg-red-50">
                                {/* <input aria-label="File upload" id="media-upload-input-84d4a143-07f3-4555-8e84-275bacea5209" data-test-id="media-upload-input-84d4a143-07f3-4555-8e84-275bacea5209" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp" aria-hidden="false" tabindex="0" style="cursor: pointer; height: 100%; opacity: 0; position: absolute; width: 100%; left: 0px; top: 0px; font-size: 0px;"> */}
                                <div className="flex-1  h-full relative">
                                    <Image src={imageUrl}
                                        alt="uploaded_image"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-auto"
                                    />
                                    <input className="w-full h-full absolute left-0 top-0 opacity-0" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                                        onChange={imageUploadHandler} />
                                </div>
                                <button>Save From Site</button>
                            </div>
                            <div id="createPinInput" className="text-base-content flex flex-col justify-between flex-1">
                                <input type="text" placeholder="Type your title" className="input input-bordered w-full bg-inherit text-primary-content" />
                                <textarea type="text" placeholder="Tell everyone what your pin is about" className="input input-bordered w-full bg-inherit text-primary-content break-words placeholder:break-words" />
                                <input type="text" placeholder="Add destination link" className="input input-bordered w-full bg-inherit text-primary-content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default CreatePin