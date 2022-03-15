import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Profile from './Profile';
import { Container } from './Container.styled';
import ResponsiveGrid from './ResponsiveGrid';

const fisica = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
                <Profile />
                {/* <Link to="/teste">Teste</Link>
                <Link to="/video">Vídeo</Link> */}

                {/* <ResponsiveGrid /> */}
            </Container>
        </div>
    );
};

export default fisica;