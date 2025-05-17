import './style/index.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello world!");
  const [inputText, setInputText] = useState("Hi!"); 
  const [isVisible, setIsVisible] = useState(true);
  const objects = ["fork", "ball", "cap", "cup"];
  
  return (
    <>
      <div className='w-full min-h-screen bg-gray-100 flex flex-col items-center pt-32'>
        <h1>
          Count {count}
        </h1>
        <button onClick={()=> setCount(count +1)} className='cursor-pointer w-32 h-7 text-center rounded-full bg-blue-500 text-white' type="button">
          Set Count
        </button>
        <h3 className='mt-10'>
          {text}
        </h3>
        <button onClick={()=> setText("You guys good?")} className='cursor-pointer w-32 h-7 text-center rounded-full bg-emerald-500 text-white' type="button">
          Set Text
        </button>

         <input onChange={(e)=> setInputText(e.target.value)} className='mt-10 text-center border border-solid border-black rounded-md py-1' type="text" name="" placeholder='Text value right here' id="" />
         <h3>
          {inputText}
        </h3>

        <h3 className='mt-10'>
          Visible
        </h3>
          <button onClick={()=> setIsVisible(!isVisible)} className='cursor-pointer w-32 h-7 text-center rounded-full bg-red-500 text-white' type="button">
          Set Visible
        </button>
      </div>
      <h1>
        {objects.map((currentObject, index) => (
          <h3 key={index}>{currentObject}</h3>
        ))}
      </h1>
    </> 
  ) 
}

export default App;
