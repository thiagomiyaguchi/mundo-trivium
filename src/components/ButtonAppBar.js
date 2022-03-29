import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import	{Link} from 'react-router-dom';
import '../styles.css'

export default function ButtonAppBar() {
  
  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/teste">
          <Button color="inherit">
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Mundo Trivium
             </Typography>
           </Button>
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
     
    </>
  );
}