import * as React from 'react';
import { useState} from "react";
import	{Link} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';
import CardQuimicaUn1 from './CardQuimicaUn1';
import CardFisicaUn2 from './CardFisicaUn2';
import CardFisicaUn3 from './CardFisicaUn3';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function QuimicaUnidades() {
  const [url,setUrl] = useState('http://mundotrivium.com.br/videos/quimica_unidade1.mp4')
  const [play,setPlay] =useState(false);
  
  const QuiUn1 = () => {setUrl('http://mundotrivium.com.br/videos/quimica_unidade1.mp4');setPlay(true)}
  // const FisUn2 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade2.mp4')}
  // const FisUn3 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade3.mp4');setPlay(true)}


  return ( 
    <Box className='containerVideo' sx={{ flexGrow: 1 }}>
       
         <ReactPlayer className='video' playing={play} width="90%" config={{
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
               <Item onClick={QuiUn1} >
               <CardQuimicaUn1 /></Item>  
          </Grid>

           <Grid item xs={4}>
                <Item onClick={QuiUn1} >
                <CardFisicaUn2  /></Item>
            
          </Grid>

          <Grid item xs={4}>
                <Item onClick={QuiUn1}>
                <CardFisicaUn3 /></Item>
          </Grid>

      </Grid>
      </div>
    </Box>
  );
}