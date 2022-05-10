const useUploadFile = (path) => {
    const uploadFile = async(e) => {
        e.preventDefault()
        const url = path === undefined ? 'http://127.0.0.1:8000/uploadFile/' 
        : `http://127.0.0.1:8000/uploadFile?path_param=${path}/`
        const data = new FormData(e.target)
        console.log(data);
        await fetch(url, {
            method: 'post',
            body: data
        })
        window.location.reload()
    }
    return uploadFile
}

export default useUploadFile