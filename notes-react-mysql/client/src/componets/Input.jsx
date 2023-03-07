import axios from 'axios'
import React, { useState } from 'react'

export default function Input({setNotes}) {
  const [value, setValue] = useState('')
  function createNote(e){
    e.preventDefault()
    axios.post('http://localhost:8000/note',{value})
    .then(({data})=>{
      setNotes(state=>{
      return [...state,{value,date_created:Date.now().toLocaleString()}]
    })
    setValue('')
  })
    .catch(err=>console.log('Error'))
  }
  return (
      <form className='flex p-3'onSubmit={createNote}>
        <input value={value} type="text" className='form-control input w-50 mx-auto'
         placeholder='Take a note'
         onChange={(e)=>setValue(e.target.value)}
           />
        <input type="submit" hidden />
      </form>
  )
}
