import axios from "axios";
import React from "react";
import config from "../config";

export default function Notes({ note,setNotes }) {

    function deleteNotes(id){
      axios.delete(`${config.SERVER_URL}/note/${id}`)
      .then(data=>{
        setNotes(state=>{
          return state.filter(val=>val.id !== id)
        })
      }).catch(err=>console.log('error'))
    }

  return (
    <div className="d-flex flex-wrap ">
      {note && note.map((val, i) => {
        return (
          <div key={i} className="note-item card m-3 p-3">
            <p>{val.value}</p>
            <div className="flex justify-content-between">
              <small>{new Date(val.date_created).toLocaleString()}</small>
              <i className="fa fa-trash " aria-hidden="true"
              onClick={()=>deleteNotes(val.id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
