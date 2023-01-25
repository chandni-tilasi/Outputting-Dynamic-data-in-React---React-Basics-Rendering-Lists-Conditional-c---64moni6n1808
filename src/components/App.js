import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here

const [val,setVal] = useState("");
const [click,setClick] = useState("");
function handleChange(e){
  setVal(e.target.value)
}

function handleClick(){
setClick(val)
}



  return (
    <div id="main">
      <input id='input' value={val} onChange={handleChange}></input>
      <button id='button' onClick={handleClick}>Click</button>
      <p id='text'> Hello my name is {click?`${click}`:"____"} and I study at Newton School</p>
    </div>
  )
}


export default App;
