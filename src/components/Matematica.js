import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
// import FisicaUnidades from './FisicaUnidades';

const Matematica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Matemática</h1>
            </div>
                {/* <FisicaUnidades /> */}
          
            </Container>
        </div>
    );
};

export default Matematica;