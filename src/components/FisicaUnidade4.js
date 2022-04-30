import * as React from 'react';
import { useState} from "react";
import ReactPlayer from 'react-player';
import { Container } from './Container.styled';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Button from '@mui/material/Button';

export default function FisicaUnidade4() {
    const [url,setUrl] = useState('')
    const [play,setPlay] =useState(false);
    
    const FisUn4Part1 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade4_pt1.mp4');setPlay(true); window.scrollTo(0, 500)}
    const FisUn4Part2 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade4_pt2.mp4');setPlay(true);window.scrollTo(0, 500)}
    
  

    return (
<>
<PrivateButtonAppBar position="fixed"/>
<Container className='containerVideo' sx={{ flexGrow: 1 }}>
          <h1 className='nome'>Física • Caderno 1 • Unidade 4</h1>
     <div className='partes'>

     <Button onClick={FisUn4Part1} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
                  Parte 1
     </Button>

     <Button onClick={FisUn4Part2} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
                  Parte 2
     </Button>
     </div>

    <ReactPlayer className='video' playing={play} width="90%"  config={{
        file: {
        attributes: {
            onContextMenu: e => e.preventDefault(),
            controlsList: 'nodownload',
        
        }
        }
        
    }} controls  url={url}  />
</Container>
</>

    )}