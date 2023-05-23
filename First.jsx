import React from 'react'
import { Typography, TextField } from '@mui/material'
const First = ()=> {
  return (
    <div>
      <h1>NETFLIX</h1>
      <input placeholder="Enter your gmail" input/>
      <br></br>
      <input type="password" placeholder="password" input/>
      <br></br><br></br>
      <button>sign in</button>
      <br></br><br></br>
  
      <Typography variant='outlined'>  Welcome to netflix </Typography>
      <br></br><br></br>
      <TextField variant='standard' label='search your movie'></TextField>
   
    </div>
  )
}

export default First