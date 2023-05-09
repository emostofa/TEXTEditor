import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(props.button); //text is the value to use 
    //setText is the way to change the value of the text;

    
    function handleUpBtn() {
      let newText = text.toUpperCase(); //newText will be the old text to uppercase (step2)
      setText(newText); //setting the text to newText (step3)
      console.log("Button was clicked");
    }
    const handleInput = (event) =>{
      
      setText(event.target.value);   //getting the value of input area to text (step1)
      
    }

    return (
<>
  <h1 className='lowtoup my-3' >Convert lowercase to UPPERCASE</h1>
<div className="input-group-lg my-2">
  <textarea type="text" className="form-control" value={text} rows={9} onChange={handleInput}/> 
</div>
<div className='buttonDiv my-5'>
    <button className="btn btn-success my-2" onClick={handleUpBtn}>{props.button}</button>

</div>

</>
  )
}
