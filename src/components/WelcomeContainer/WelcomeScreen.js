import React, { Component } from "react";

import LoginButton from '../ButtonContainer/LoginButton.js';
import SignupButton from '../ButtonContainer/SignupButton.js';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import main from '../../assets/images/main.png';

import './WelcomeScreen.css';

class WelcomeScreen extends Component {
    render() {
        return (
            <Container>
                <Row><Image src={main} className="main" alt="main logo" /> </Row>
                <Row><h3> Welcome to Rock, Paper, Scissors Game</h3></Row>
                 <Row className="wel-btn"><LoginButton />
                 <SignupButton /> </Row>
            </Container>
        );
    }
}

export default WelcomeScreen;