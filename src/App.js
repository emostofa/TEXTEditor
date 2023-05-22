
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';
import React, {useState} from 'react'


function App() {

  const [mode,setMode] = useState('light');

  const darkToggle = () =>{
      if(mode === 'dark') setMode('light');
      else setMode('dark');
     
  }


  return (
        <>

        <Navbar title="TextUtilizer-make uppercase | count words and more!" about ="About"  dropdown = "Services" home = "Home" dropdown1 = "Pricing"
        dropdown2 = "Subscriptions" help ="Help" mode={mode} darkToggle={darkToggle}/>
        <TextForm button="Convert to Uppercase" mode={mode} />

        </>
  );
}

export default App;
