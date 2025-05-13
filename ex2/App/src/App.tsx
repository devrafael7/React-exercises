import './style/index.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  
  return (
    <>
      <div className='p-40'>
        <h1 className='text-4xl'>{count}</h1>
        <button onClick={()=> setCount(count + 1)} type="button">
          Set count
        </button>
        <input onChange={(e)=> setValue(e.target.value)} className='mx-10 border border-black border-solid rounded-sm px-3 py-2' placeholder='text' type="text" />
        <h1 className='mx-5 text-xl'>{value}</h1>
      </div>
    </> 
  ) 
}

export default App;
