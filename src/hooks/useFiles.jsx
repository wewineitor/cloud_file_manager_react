import { useEffect, useState } from "react"

const useFiles = (path) => {
    const [files, setFiles] = useState([])

    const getFiles = async() => {
        const url = path === undefined ? 'http://127.0.0.1:8000/getFiles/' 
        : `http://127.0.0.1:8000/getFiles?path_param=${path}/`
        
        const request = await fetch(url)
        const response = await request.json()
        console.log(response.files);
        setFiles(response.files)
    }

    useEffect(() => {
        getFiles()
    }, [path])
    return files
}

export default useFiles