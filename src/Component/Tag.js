import React, { useState } from 'react'
import useGif from '../hook/useGif'
import Spinner from './Spinner';
import { saveAs } from 'file-saver';

const Tag = () => {

    const [gif, loading, download, fetchData] = useGif();
    const [tag, setTag] = useState('car');

    const downloadImage = () => {
        saveAs(gif) // Put your image URL here.
    }

  return (
        <div className=' w-1/2  flex flex-col items-center gap-y-5 border-black border bg-blue-400 rounded-xl '>
            <h1 className='text-2xl uppercase underline font-bold mt-3'>A Random gif</h1>

            {
                loading ? (<Spinner/>
                ) : (<img src={gif} alt='gif' />)
            }

            <input
                type='text'
                className='text-center w-10/12 bg-yellow-400 -mb-3 rounded-lg py-2 font-bold placeholder:text-blue-500'
                placeholder='Enter text to search'
                value={tag}
                onChange={(event) => setTag(event.target.value)}
             />
            
            <button className={`w-10/12 bg-yellow-400 opacity-90 rounded-lg py-2 uppercase font-bold ${download ? '' : 'mb-5'}`}
                onClick={() => fetchData(tag)}
            >
                generate

            </button>

            {
                download && <button className='w-10/12 bg-yellow-400 opacity-90 rounded-lg -mt-3 mb-5 py-2 uppercase font-bold' onClick={downloadImage}>
                    Download!
                </button>
            }

        </div>
  )
}

export default Tag