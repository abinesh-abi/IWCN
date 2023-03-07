import "./App.css";
import Input from "./componets/Input";
import Notes from "./componets/Notes";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/notes')
    .then(({data})=>setNotes(data.data))
  },[])
  return (
    <div className="App">
      <h1>Notes</h1>
      <div className="container" id="main-container">
        <Input setNotes={setNotes} />
        <div>
          <Notes note={notes} setNotes={setNotes}/>
        </div>
      </div>
    </div>
  );
}

export default App;
