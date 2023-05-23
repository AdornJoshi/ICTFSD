import React, {useState} from 'react'
import { Typography,Button,TextField, colors } from '@mui/material'

const Test = () => {
    var [name,setName]= useState("");
    const changeDName = () =>{
        console.log("Clicked");
        setName("RRR");
    }
    const changeCName = () =>{
        console.log("Clicked");
        setName("Mr Bean");
    }
    const changeAName = () =>{
        console.log("Clicked");
        setName("JohnWick");
    }
  return (
    <div>
        <h1 color='red'>NETFLIX</h1>
        <TextField variant='standard' label='search your movie'></TextField>
        <br></br>
        <br></br>
        <Button variant='text' onClick={changeDName}>Drama</Button>
        <Button variant='text' onClick={changeCName}>Comedy</Button>
        <Button variant='text' onClick={changeAName}>Action</Button>
        <br></br>
        <Typography variant='outlined'> {name} </Typography>
    </div>
  )
}

export default Test