import * as React from 'react';
import { useState} from "react";
import	{Link} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardFisicaUn1 from './CardFisicaUn1';
import ReactPlayer from 'react-player';
import CardFisicaUn2 from './CardFisicaUn2';
import CardFisicaUn3 from './CardFisicaUn3';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function FisicaUnidades() {
  const [url,setUrl] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')
  
  const FisUn1 = () => {
    setUrl('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
  
  }

  return ( 
    <Box className='containerVideo' sx={{ flexGrow: 1 }}>
       
         <ReactPlayer className='video' playing={true} width="100%" config={{
          file: {
            attributes: {
              onContextMenu: e => e.preventDefault(),
              controlsList: 'nodownload'
            }
            }
            
          }} controls url={url} />

        
        
      <div className='grid' >
      <Grid container spacing={{xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
          <Grid item xs={4}>
               <Item onClick={FisUn1} >
               <CardFisicaUn1 /></Item>  
          </Grid>

           <Grid item xs={4}>
                <Item onClick={()=> setUrl('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4') } >
                <CardFisicaUn2  /></Item>
            
          </Grid>

          <Grid item xs={4}>
              <Link to="/video">
                <Item><CardFisicaUn3 /></Item>
              </Link>
          </Grid>

      </Grid>
      </div>
    </Box>
  );
}