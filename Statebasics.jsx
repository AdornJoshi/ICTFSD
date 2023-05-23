import { Typography, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Statebasics = () => {
    var [name, setName] = useState("Adorn");
    var [val, setVal] = useState("");
    const inputHandler = (e) => {
        setVal(e.target.value);
        console.log(val);
    }
    const changeName = () => {
        console.log("Clicked");
        setName(val);
    }
    return (
        <div>
            <Typography variant='outlined'> {name} </Typography>
            <br></br><br></br>
            <TextField variant='outlined' onChange={inputHandler}></TextField>
            <br></br>
            <Button variant='text' onClick={changeName}>click to change</Button>
           
        </div>
    );
};

export default Statebasics