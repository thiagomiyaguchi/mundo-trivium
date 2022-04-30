import React from 'react';
// import	{Link} from 'react-router-dom';
import PrivateButtonAppBar from './PrivateButtonAppBar';
import Profile from './Profile';
import { Container } from './Container.styled';
import Disciplinas from './Disciplinas';

const Dashboard = () => {
    return (
        <div>
            <PrivateButtonAppBar position="fixed"/>
            <Container>
                <Profile />
                <Disciplinas />
            </Container>
        </div>
    );
};

export default Dashboard;