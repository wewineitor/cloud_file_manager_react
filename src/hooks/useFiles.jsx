import { useEffect, useState } from "react"

const useFiles = () => {
    const [files, setFiles] = useState([])

    const getFiles = async() => {
        const request = await fetch('http://127.0.0.1:8000/getFiles/')
        const response = await request.json()
        console.log(response.files);
        setFiles(response.files)
    }

    useEffect(() => {
        getFiles()
    }, [])
    return files
}

export default useFiles