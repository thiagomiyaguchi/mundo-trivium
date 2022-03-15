import * as React from 'react';
import Box from '@mui/material/Box';
import LoginButton from './LoginButton';

export default function BoxComponent() {
  return (
    // <Box sx={{
        
    //     p: 2, border: '1px solid grey' }}>

    <Box className='box'
      sx={{
     
        width: 300,
        height: 300,
        // backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
    }}>
    <h1 className='titulo'>Mundo Trivium </h1>
    <LoginButton />
    
     </Box>
  );
}