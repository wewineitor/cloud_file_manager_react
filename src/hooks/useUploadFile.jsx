const useUploadFile = () => {
    const uploadFile = async(e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data);
        await fetch('http://127.0.0.1:8000/uploadFile/', {
            method: 'post',
            body: data
        })
        window.location.reload()
    }

    return uploadFile
}

export default useUploadFile