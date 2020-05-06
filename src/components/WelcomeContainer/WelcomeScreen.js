import React, { Component } from "react";

class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <h3> Welcome to Rock, Paper, Scissors Game</h3>
                 <button type="submit" className="btn btn-primary btn-block">Get Started</button>
            </div>
        );
    }
}

export default WelcomeScreen;