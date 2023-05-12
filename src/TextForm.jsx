import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(''); //text is the value to use 
  const [oldText, setOldText] = useState(''); //text is the value to use 
  const [newText, setNewText] = useState(''); //text is the value to use 

  //setText is the way to change the value of the text;



  function handleUpBtn() {
    let newText = text.toUpperCase(); //newText will be the old text to uppercase (step2)
    setText(newText); //setting the text to newText (step3)
    console.log("Button was clicked");
  }
  const handleRepBtn = () => {

    setText(text.replaceAll(oldText, newText));
  }

  const handleInput = (event) => {

    setText(event.target.value);   //getting the value of input area to text (step1)

  }

  const handleFind = (event) => {

    setOldText(event.target.value);   //getting the value of input area to text (step1)

  }
  const handleRep = (event) => {

    setNewText(event.target.value);   //getting the value of input area to text (step1)

  }
  const style ={
    color: props.mode, 
    
    backgroundColor: props.mode ==='light'? 'cyan':'black'
  };
  

  return (
    <div className={`Converter bg-${props.mode} text-${props.mode==='dark'? 'light':'dark'}`}>
      <h1 className="lowtoup" >Convert lowercase to UPPERCASE</h1>
      <div className="input-group-lg my-2">
        <textarea className='form-control'  value={text} rows={4} onChange={handleInput} placeholder= 'Enter text here:-'
         style= {{backgroundColor: props.mode ==='light'? '#DCDCDC':'black', color: props.mode ==='light'?'black':'white', border: '.5rem' }}
        />
      </div>
      <div className='buttonDiv my-2'>
        <button className="btn btn-success mx-1" onClick={handleUpBtn}>{props.button}</button>

      </div>
      <div>
        <h4>Find and Replace</h4>
        <div>
          <textarea name="findWords" className='form-control' placeholder="Find a word and replace" rows="1" onChange={handleFind} 
          style= {{backgroundColor:props.mode ==='light'? '#DCDCDC':'black' , color:props.mode ==='light'?'black':'white', border: '.5rem'}}
          ></textarea>
          <textarea name="repWords" className='form-control my-1' placeholder="Replace with-" rows="1" onChange={handleRep} 
          style= {{backgroundColor:props.mode ==='light'? '#DCDCDC':'black', color: props.mode ==='light'?'black':'white', border: '.5rem'}}
          ></textarea>

        </div>
        <button className="btn btn-warning my-2 mx-1" onClick={handleRepBtn}>Replace</button>

      </div>

      <h2 className='TS my-2'>Text Summary</h2>
      <p className='summary'>There are {text.split(' ').length} words & {text.length} characters</p>
      <h4>Overview</h4>
      <p className='changedWords'>{text}</p>
    </div>
  )
}
