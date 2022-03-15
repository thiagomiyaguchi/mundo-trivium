import React from "react";

import RMDBLogo from '../img/hero.jpg';

import { Wrapper, Content, LogoImg} from "./Header.styled";


const Header = () => (
    <Wrapper>
        <Content>
            {/* <h1>Mundo Trivium</h1> */}
            <LogoImg src={RMDBLogo} alt="Logo" />
        </Content>
    </Wrapper>
)

export default Header;