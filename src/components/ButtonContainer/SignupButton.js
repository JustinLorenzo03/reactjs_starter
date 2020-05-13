import React from 'react';

import { withRouter } from 'react-router-dom';

import './Buttons.css';
function SignupButton(){
const Button = withRouter(({history}) => (
    <button
    type="button"
    className="btn"
    onclick={() => {history.push('/SignUp')}}
    >Signup</button>
    ));
    return <Button />    
}

export default SignupButton;