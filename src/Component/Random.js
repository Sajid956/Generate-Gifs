import useGif from '../hook/useGif'
import Spinner from './Spinner';
import { saveAs } from 'file-saver';

const Random = () => {

    const [gif, loading, download, fetchData] = useGif();

    const downloadImage = () => {
        saveAs(gif) // Put your image URL here.
    }

  return (
    <div className=' w-1/2 flex flex-col items-center gap-y-5 border-black border bg-green-400 rounded-xl '>
        <h1 className='text-2xl uppercase underline font-bold mt-3'>A Random gif</h1>

        {
            loading ? (<Spinner/>
            ) : (<img src={gif} alt='gif' />)
        }

        {
            download && <button className='w-10/12 bg-yellow-400 opacity-90 -mb-3 rounded-lg py-2 uppercase font-bold' onClick={downloadImage}>
                Download!
            </button>
        }
        
        <button className='w-10/12 bg-yellow-400 opacity-90 mb-5 rounded-lg py-2 uppercase font-bold'
            onClick={() => fetchData()}
        >
            generate
        </button>

    </div>
  )
}

export default Random