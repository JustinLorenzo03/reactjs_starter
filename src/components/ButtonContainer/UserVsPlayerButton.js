import React from 'react';

import { withRouter } from 'react-router-dom';

import './Buttons.css';

function UserVsPlayerButton(){
const Button = withRouter(({history}) => (
    <button
    type="button"
    className="btn"
    onclick={() => {history.push('/SignUp')}}
    >Player</button>
    ));
    return <Button />    
}

export default UserVsPlayerButton;