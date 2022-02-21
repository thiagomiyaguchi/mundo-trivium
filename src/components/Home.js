import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { Container } from './Container.styled';
// import './PublicPage.css';

const Home = () => {
    return (
        <div>
             <ButtonAppBar />
             
            <Container>
            
            <h1 className='titulo'> Mundo Trivium </h1>
            
            
            </Container>
        </div>
    );
};

export default Home;