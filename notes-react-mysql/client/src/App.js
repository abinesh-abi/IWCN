import "./App.css";
import Input from "./componets/Input";
import Notes from "./componets/Notes";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import config from "./config";

function App() {
  const [notes, setNotes] = useState([])
  useEffect(()=>{
    axios.get(`${config.SERVER_URL}/notes`)
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
