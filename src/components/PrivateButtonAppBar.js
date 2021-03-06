import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useGoogleAuth } from './googleAuth';
import	{Link} from 'react-router-dom';


export default function PrivateButtonAppBar() {

  const { signOut } = useGoogleAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

        <Link to="/dashboard">
           <Button color="inherit">
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mundo Trivium
             </Typography>
           </Button>
        </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <Button onClick={signOut} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}