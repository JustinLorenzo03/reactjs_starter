import React, { Component } from "react";
import UserVsComputer from "../ButtonContainer/UserVsComputerButton.js";
import UserVsPlayer from "../ButtonContainer/UserVsPlayerButton.js";

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import main from '../../assets/images/main.png';


import './UserHome.css';

class UserHome extends Component {
    render() {
        return (
            <Container>
                <Row><Image src={main} className="main" alt="main logo" /> </Row>
                <Row> <h3> Choose who you want to play</h3></Row>
                <Row className="wel-btn"><UserVsComputer/> <UserVsPlayer/> </Row>
            </Container>
        );
    }
}

export default UserHome;