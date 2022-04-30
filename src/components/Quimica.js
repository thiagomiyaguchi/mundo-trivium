import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import { Container } from './Container.styled';
import CadernosQuimica from './CadernosQuimica';

const Quimica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
            <div>
              <h1 className='nome'>Química</h1>
            </div>
                
                <CadernosQuimica />
          
            </Container>
        </div>
    );
};

export default Quimica;