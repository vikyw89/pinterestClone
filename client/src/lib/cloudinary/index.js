const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
// const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET


export class Cloudinary {
  static setStorage = async (file, options = { folder: undefined, public_id: undefined, tags: undefined, context: undefined }) => {
    const { folder, public_id, tags, context } = options
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('api_key', API_KEY)
    folder && formData.append('folder', folder)
    public_id && formData.append('public_id', public_id)
    tags && formData.append('tags', tags)
    context && formData.append('context', context)
    const response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    return data.url
  }
}
