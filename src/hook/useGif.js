import axios from 'axios';
import { useEffect, useState } from 'react'
import error_404 from '../error_404.gif'

const useGif = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const [download, setDownload] = useState(false);

    const API_KEY = "JXzOOzn63Afy2QeViLskdkDEiEuCuNwV"
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    async function fetchData (tag) {

        setLoading(true);
        setDownload(false);

        try {
            const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const response = data.data.images.downsized_large.url;
            setGif(response);
            setLoading(false);
            setDownload(true);
            
        } catch (error) {
            setLoading(false);
            setGif(error_404);
        }
        
    }

    useEffect( () => {
        fetchData('car');
    }, [])

    return [gif, loading, download, fetchData];
  
}

export default useGif