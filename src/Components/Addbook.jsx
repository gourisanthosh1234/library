import React from 'react'
import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import axios from 'axios'

const Addbook = () => {
  var [input, setInput] = useState(props.data)
  console.log("add page props"+props.data)
   
  const inputHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const readValues = () => {
    console.log("clicked")
    console.log(input);
  if(props.method === "post"){
    axios.post("http://localhost:3005/students", input)
      .then(response => {
        console.log("post data"+ response.data)
        alert("success")
      })
      .catch(err => {console.log(err)
    })
  } else if(props.method === "put") {
    axios.put("http://localhost:3005/students/" + input.id,input)
    .then((response) => {
      console.log("put data"+response.data)
      alert("success")
      window.location.reload(false);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
  return (
    <div><br></br>

      <TextField label='Name of book' name='name of book' variant='outlined'
        value={input.name} onChange={inputHandler} />

      <br>
      </br>

      <TextField label='author' name='author' variant='outlined'
        value={input.grade} onChange={inputHandler} />

      <br></br>

      <TextField label='genre' name='genre' variant='outlined'
        value={input.grade} onChange={inputHandler} />

      <br></br>
      <Button variant='contained' onClick={readValues} color='success'>submit</Button>


    </div>
  )
}

export default Addbook
