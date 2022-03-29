import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
import QuimicaUnidades from './QuimicaUnidades';

const Quimica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Química</h1>
            </div>
                
                <QuimicaUnidades />
          
            </Container>
        </div>
    );
};

export default Quimica;