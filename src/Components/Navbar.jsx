import { AppBar,Box } from '@mui/material'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StudentApp
        </Typography>
        <Button color="inherit">
          <Link to ='/'style={{color:'white',textDecoration:'none'}}>
              view/</Link> </Button>
         
        <Button color="success"><Link to ='/add' >add</Link></Button>
      </Toolbar>
    </AppBar>
    </Box>
  )
  }

  

export default Navbar
