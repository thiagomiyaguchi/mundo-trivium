import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
import FisicaUnidades from './FisicaUnidades';

const fisica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Física</h1>
            </div>
                <FisicaUnidades />
          
            </Container>
        </div>
    );
};

export default fisica;