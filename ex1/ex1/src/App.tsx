import './styles/index.css'
//import { useState } from 'react';
import DefaultBtn from './components/defaultBtn';
import CountBtn from './components/countBtn';
import Header from './components/Header';

function App() {
  const userName: string = "Rafael";

  return (
    <body className='bg-black w-full h-screen'>
      
    <Header/>


    <div className=''>
      <h1 className='font-light'>Hello, {userName}!</h1>
        <DefaultBtn />
        <CountBtn />
    </div>

    </body>
  );
}

export default App
