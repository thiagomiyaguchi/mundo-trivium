import * as React from 'react';
import { useState} from "react";
import ReactPlayer from 'react-player';
import { Container } from './Container.styled';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Button from '@mui/material/Button';

export default function QuimicaUnidade2() {
    const [url,setUrl] = useState('')
    const [play,setPlay] =useState(false);
    
    const QuiUn2Part1 = () => {setUrl('http://mundotrivium.com.br/videos/quimica_fec_unidade2.mp4');setPlay(true); window.scrollTo(0, 500)}
    const QuiUn2Part2 = () => {setUrl('http://mundotrivium.com.br/videos/quimica_fec_unidade2_pt2.mp4');setPlay(true);window.scrollTo(0, 500)}
    
  

    return (
<>
<PrivateButtonAppBar position="fixed"/>
<Container className='containerVideo' sx={{ flexGrow: 1 }}>
          <h1 className='nome'>Química • Caderno 1 • Unidade 2</h1>
     <div className='partes'>

     <Button onClick={QuiUn2Part1} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
                  Parte 1
     </Button>

     <Button onClick={QuiUn2Part2} color="primary" size='large' variant="contained" sx={{ marginBottom:'10px'}}>
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