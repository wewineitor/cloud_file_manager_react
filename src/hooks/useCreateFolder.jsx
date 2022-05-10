const useCreateFolder = (path) => {
    const createFolder = async(e) => {
        e.preventDefault()
        const url = path === undefined ? 'http://127.0.0.1:8000/createFolder/' 
        : `http://127.0.0.1:8000/createFolder?path_param=${path}/`
        const data = new FormData(e.target)
        console.log(data);
        await fetch(url, {
            method: 'post',
            body: data
        })
        window.location.reload()
    }
    return createFolder
}

export default useCreateFolder