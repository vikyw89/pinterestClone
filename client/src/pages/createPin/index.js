import { Page } from '@/common/layout/page'
import { supabase } from '@/lib/supabase'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import { setAsyncV, setSyncV, updateAsyncV, useAsyncV } from 'use-sync-v'
import { v4 as uuidv4 } from 'uuid'
import imageCompression from 'browser-image-compression'

const initialPin = {
  title: '',
  description: '',
  link_url: '',
  image_url: '',
  creator_uuid: '',
  loading_image_url: ''
}

const CreatePin = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const boards = useAsyncV('boards')
  const [pin, setPin] = useState(initialPin)
  const [selectedBoard, setSelectedBoard] = useState('')
  const id = useId()

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
    const saveButton = document.querySelector(`#${CSS.escape(id)}`)
    if (pin.image_url === '') {
      saveButton.classList.add('btn-disabled')
    } else {
      saveButton.classList.remove('btn-disabled')
    }
  }, [pin.image_url, id])

  useEffect(() => {
    if (!boards.data) return
    setSelectedBoard(boards?.data?.[0])
  }, [boards.data])

  const pinImageHandler = async (e) => {
    e.stopPropagation()
    const file = e.target.files[0]

    const image_url = URL.createObjectURL(file)
    const blur_options = {
      maxSizeMB: 0.001,
      maxWidthOrHeight: 10,
      useWebWorker: true,
    }

    const compressedBlurFile = await imageCompression(file, blur_options)
    const image_blur_url = await imageCompression.getDataUrlFromFile(compressedBlurFile)
    setPin(p => ({
      ...p,
      image_url: image_url,
      loading_image_url: image_blur_url
    }))
  }

  const pinHandler = (e) => {
    const PIN_KEY_MAP = {
      pinTitle: 'title',
      pinDescription: 'description',
      pinLink: 'link_url',
      pinImageURL: 'image_url',
      pinLoadingURL: 'loading_image_url'
    }
    const key = PIN_KEY_MAP[e.target.id]
    const value = e.target.value
    setPin(p => ({
      ...p,
      [key]: value
    }))
  }

  const removeImageHandler = () => {
    setPin(p => ({
      ...p,
      image_url: initialPin.image_url,
      loading_image_url: initialPin.loading_image_url
    }))
  }

  const boardSelectHandler = (e) => {
    setSelectedBoard(JSON.parse(e.target.value))
  }

  const saveHandler = async () => {
    if (pin.image_url === '') return
    await updateAsyncV('pin', async () => {
      const fetchedImage = await fetch(pin.image_url)
      const fetchedLoadingImage = await fetch(pin.loading_image_url)
      // validate input
      const imageBlob = await fetchedImage.blob()
      const loadingImageBlob = await fetchedLoadingImage.blob()

      const storagePath = `pins/${auth.data.user.id}/${uuidv4()}`
      const loadingStoragePath = `pins/${auth.data.user.id}/${uuidv4()}loading`

      const storageResponse = await supabase.storage
        .from('pins')
        .upload(storagePath, imageBlob)

      const loadingStorageResponse = await supabase.storage
        .from('pins')
        .upload(loadingStoragePath, loadingImageBlob)

      if (storageResponse.error || loadingStorageResponse.error) {
        setSyncV('pin.error', storageResponse.error || loadingStorageResponse.error)
        setTimeout(() => {
          setSyncV('pin.error', false)
        }, 10000)
      }

      const imagePublicURL = supabase.storage
        .from('pins')
        .getPublicUrl(storagePath).data.publicUrl

      const loadingImagePublicURL = supabase.storage
        .from('pins')
        .getPublicUrl(loadingStoragePath).data.publicUrl

      const pinToUpload = {
        title: pin.title,
        description: pin.description,
        link_url: pin.link_url,
        creator_uuid: auth.data.user.id,
        board_uuid: selectedBoard.uuid,
        image_url: imagePublicURL,
        loading_image_url: loadingImagePublicURL
      }

      const response = await supabase.rpc('create_pin', pinToUpload)
      return response
    })
    setPin(initialPin)
  }

  return (
    <Page>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center justify-center p-10 max-w-5xl rounded-box bg-neutral text-neutral-content w-full">
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex justify-between items-center">
              <MoreHorizIcon className="text-4xl" />
              <div className="flex-1"></div>
              <select className="select max-w-xs bg-neutral text-neutral-content" onChange={boardSelectHandler}>
                {boards.data &&
                  boards.data.map((p, i) => {
                    return <option key={i} value={JSON.stringify(p)}>{p.title}</option>
                  })
                }
              </select>
              <button id={id} onClick={saveHandler} className="btn btn-primary rounded-btn">Save</button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex-1 flex flex-col bg-neutral text-neutral-content min-w-[300px]">
                {pin.image_url !== '' &&
                  <div className="flex-1 relative flex-col gap-2 rounded-box aspect-auto">
                    <Image src={pin.image_url}
                      alt="uploaded_image"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"
                      id="pinImageURL"
                    />
                    <button onClick={removeImageHandler} className="btn btn-circle absolute z-100 top-0 right-0 rounded-btn animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                }
                {pin.image_url === '' &&
                  <div className='flex flex-col gap-2'>
                    <div
                      className=' aspect-square flex flex-col items-center justify-center relative border-opacity-50 border-neutral-content border-4 border-dashed rounded-box'>
                      <CloudUploadIcon className='animate-bounce text-6xl' />
                      <div className='text-lg'>
                        click to upload
                      </div>
                      <input
                        className="w-full h-full absolute left-0 top-0 opacity-0"
                        type="file"
                        accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                        onChange={pinImageHandler} />
                    </div>
                    <button
                      className='btn btn-primary w-full rounded-btn'>
                      Save From Site
                    </button>
                  </div>
                }
              </div>
              <div
                id="createPinInput"
                className="text-base-content flex flex-col justify-between flex-1 min-w-[300px] gap-1">
                <input
                  id="pinTitle"
                  value={pin.title}
                  onChange={pinHandler}
                  type="text"
                  placeholder="Type your title"
                  className="input input-bordered w-full bg-neutral-focus text-neutral-content rounded-box p-5" />
                <textarea
                  id="pinDescription"
                  value={pin.description}
                  onChange={pinHandler}
                  type="text"
                  placeholder="Tell everyone what your pin is about"
                  className="input input-bordered w-full bg-neutral-focus text-neutral-content break-words placeholder:break-words h-full rounded-box p-5" />
                <input
                  id="pinLink"
                  value={pin.link}
                  onChange={pinHandler}
                  type="text"
                  placeholder="Add destination link"
                  className="input input-bordered w-full bg-neutral-focus text-neutral-content rounded-box p-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page >
  )
}

export default CreatePin