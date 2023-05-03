import { Page } from '@/common/layout/page'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Image from 'next/image'
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const initialPin = {
  title: '',
  description: '',
  link: '',
  imageURL: ''
}


const CreatePin = () => {
  const [pin, setPin] = useState(initialPin)
  const pinImageHandler = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    const imageURL = URL.createObjectURL(e.target.files[0])
    setPin(p => ({
      ...p,
      imageURL: imageURL
    }))
  }
  console.log(pin)
  const pinHandler = (e) => {
    const PIN_KEY_MAP = {
      pinTitle: 'title',
      pinDescription: 'description',
      pinLink: 'link',
      pinImageURL: 'imageURL'
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
      imageURL: initialPin.imageURL
    }))
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
              <div className="flex flex-col max-w-lg w-full bg-red-50">
                <div className="flex-1 h-full relative">
                  {pin.imageURL !== '' &&
                    <>
                      <Image src={pin.imageURL}
                        alt="uploaded_image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        id="pinImageURL"
                      />
                      <button onClick={removeImageHandler} className="btn btn-circle absolute z-100 top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </>
                  }
                  {pin.imageURL === '' &&
                    <>
                      <div className='aspect-square text-base-content flex flex-col border-2 border-primary-content items-center justify-center'>
                        <CloudUploadIcon />
                        <div>
                          click to upload
                        </div>
                      </div>
                      <input className="w-full h-full absolute left-0 top-0 opacity-0" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                        onChange={pinImageHandler} />
                      <button className='btn btn-primary w-full'>Save From Site</button>
                    </>
                  }
                </div>
              </div>
              <div id="createPinInput" className="text-base-content flex flex-col justify-between flex-1">
                <input id="pinTitle" value={pin.title} onChange={pinHandler} type="text" placeholder="Type your title" className="input input-bordered w-full bg-inherit text-primary-content" />
                <textarea id="pinDescription" value={pin.description} onChange={pinHandler} type="text" placeholder="Tell everyone what your pin is about" className="input input-bordered w-full bg-inherit text-primary-content break-words placeholder:break-words" />
                <input id="pinLink" value={pin.link} onChange={pinHandler} type="text" placeholder="Add destination link" className="input input-bordered w-full bg-inherit text-primary-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default CreatePin