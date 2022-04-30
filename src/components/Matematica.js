import React from 'react';
import	{Link} from 'react-router-dom';
import { Container } from './Container.styled';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import CadernosMatematica from './CadernosMatematica';
import Grid from '@mui/material/Grid';

const Matematica = () => {
    return (
        
        
        <div>
        
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Matemática</h1>
            </div>
             <CadernosMatematica />
          
            </Container>

        </div>
        
    );
};

export default Matematica;