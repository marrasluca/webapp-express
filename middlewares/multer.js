import multer from "multer"

//funzione di upload
const storage = multer.diskStorage({
    destination: "./public/image/",
    filename: (req,file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

export default upload