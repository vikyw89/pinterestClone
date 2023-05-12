const CLOUD_NAME = proccess.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
const API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
const CLOUDINARY_URL = new URL(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`)
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

export class Cloudinary {
    static upload = async (files, { public_id, folder, tags, context }) => {
        const formData = new FormData();
        const dataGroup = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append("file", file);
            formData.append("upload_preset", UPLOAD_PRESET);
            folder && formData.append("folder", folder);
            public_id && formData.append("public_id", public_id);
            tags && formData.append("tags", tags);
            context && formData.append("context", context);
            const response = await fetch(url, {
                method: "POST",
                body: formData
            })
            const data = response.text()
            dataGroup.push(data)
        }
        return dataGroup
    }
}