import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { Container } from '@material-ui/core';
import BoxComponent from './BoxComponent';
import '../styles.css'


const Home = () => {
 
      return (
        <div>
            <ButtonAppBar />
            <Container maxWidth="sm">
                <div className='container'>
                    <BoxComponent />
                </div>
            </Container>
        </div>
    );
};

export default Home;