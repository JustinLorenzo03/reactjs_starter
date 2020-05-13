import React from 'react';

import { withRouter } from 'react-router-dom';

import './Buttons.css';
function UserVsComputerButton(){
const Button = withRouter(({history}) => (
    <button
    type="button"
    className="btn"
    onclick={() => {history.push('/user-vs-computer')}}
    >Computer</button>
    ));
    return <Button />    
}

export default UserVsComputerButton;