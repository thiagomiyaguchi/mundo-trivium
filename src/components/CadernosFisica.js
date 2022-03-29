import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
import CadernoFisica1 from './CadernoFisica1';
// import FisicaUnidades from './FisicaUnidades';

const CadernosFisica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Física</h1>
            </div>
                {/* <FisicaUnidades /> */}
                <CadernoFisica1/>
          
            </Container>
        </div>
    );
};

export default CadernosFisica;