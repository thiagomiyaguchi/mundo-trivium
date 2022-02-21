import React from 'react';
import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Profile from './Profile';
import { Container } from './Container.styled';

const Dashboard = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
                <Profile />
                <h2>Dashboard</h2>
                <Link to="/teste">Teste</Link>
                <Link to="/video">Vídeo</Link>
            </Container>
        </div>
    );
};

export default Dashboard;