import * as React from 'react';
import ReactPlayer from 'react-player';
import { Container } from './Container.styled';
import PrivateButtonAppBar from './PrivateButtonAppBar';

export default function FisicaUnidade1() {
    return (
<>
<PrivateButtonAppBar position="fixed"/>
<Container className='containerVideo' sx={{ flexGrow: 1 }}>
     <div>
          <h1 className='nome'>Física • Caderno 1 • Unidade 1</h1>
     </div>
    <ReactPlayer className='video' width="90%"  config={{
        file: {
        attributes: {
            onContextMenu: e => e.preventDefault(),
            controlsList: 'nodownload',
        
        }
        }
        
    }} controls  url='http://mundotrivium.com.br/videos/fisica_unidade1.mp4' />
</Container>
</>

    )}