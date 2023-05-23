import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
const Navbar = () => {
  return (
    <div>
          <AppBar>
            <Toolbar>
            <Typography variant='outlined'> NAVBAR </Typography>
                <Button variant='text'>sign in</Button>
            </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar