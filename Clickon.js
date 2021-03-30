import React, {useState} from 'react'

const App = () => {

const [name, setName]= useState();
const [FullName, setFullName]= useState();

const inputEvent = (event) =>{
  console.log(event.target.value)
  setName(event.target.value)
}

const onSubmit = () =>{
  setFullName(name)
  // alert(`${"Welcome, "}${name}`)
}
return (<>
  <center>
  <div>
    <h2>Hello, {FullName} </h2>
    <input type="text" placeholder="Enter your Name" value={name} onChange={inputEvent}/><br/>
    <button onClick={onSubmit}>submit</button>
  </div>
  </center>
</>);
}

export default App;
