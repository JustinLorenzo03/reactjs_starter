import React, { Component } from "react";

class UserHome extends Component {
    render() {
        return (
            <div>
                <h3> Choose who you want to play</h3>
                 <button type="submit" className="btn btn-primary btn-block">Play Computer</button>
                 <button type="submit" className="btn btn-primary btn-block">Play Friend</button>
            </div>
        );
    }
}

export default UserHome;