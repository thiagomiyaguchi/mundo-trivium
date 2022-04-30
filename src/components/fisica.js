import React from 'react';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
import CadernosFisica from './CadernosFisica';

const Fisica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Física</h1>
            </div>
                <CadernosFisica />
          
            </Container>
        </div>
    );
};

export default Fisica;