import './App.css';
import Random from './Component/Random';
import Tag from './Component/Tag';

function App() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center background">
      
      <div className='w-11/12 flex justify-center items-center bg-white mt-11 py-4 rounded-xl'>
        <h1 className='text-3xl font-bold uppercase'>Random Gifs</h1>
      </div>

      <div className='w-full flex flex-col gap-y-5 items-center mt-6 mb-12'>

        <Random />

        <Tag />

      </div>

    </div>
  );
}

export default App;
