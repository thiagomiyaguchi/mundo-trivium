import * as React from 'react';
import { useState} from "react";
import ReactPlayer from 'react-player';
import { Container } from './Container.styled';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Button from '@mui/material/Button';

export default function FisicaUnidade3() {
    const [url,setUrl] = useState('')
    const [play,setPlay] =useState(false);
    
    const FisUn3Part1 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade3.mp4');setPlay(true); window.scrollTo(0, 500)}
    const FisUn3Part2 = () => {setUrl('http://mundotrivium.com.br/videos/fisica_unidade3_pt2.mp4');setPlay(true);window.scrollTo(0, 500)}
    
  
  
    return (
<>
<PrivateButtonAppBar position="fixed"/>
<Container className='containerVideo' sx={{ flexGrow: 1 }}>
          <h1 className='nome'>Física • Caderno 1 • Unidade 3</h1>
     <div className='partes'>

     <Button onClick={FisUn3Part1} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
                  Parte 1
     </Button>

     <Button onClick={FisUn3Part2} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
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