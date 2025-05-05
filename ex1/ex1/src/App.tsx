import './styles/index.css'
//import { useState } from 'react';
import DefaultBtn from './components/defaultBtn';
import CountBtn from './components/countBtn';

function App() {
  const userName: string = "Rafael";

  return (
    <>
    <div className=''>
      <h1 className='font-light'>Hello, {userName}!</h1>
        <DefaultBtn />
        <CountBtn />
    </div>
    </>
  );
}

export default App
