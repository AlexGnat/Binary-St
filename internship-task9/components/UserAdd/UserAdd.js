import React, { Component } from 'react';
import './UserAdd.css';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.addUser = this.props.addUser.bind(this);
        this.updateCurrentName = this.props.updateCurrentName.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const nameInput = e.target.previousSibling;
        nameInput.value = '';
        this.addUser();
    }

    render() {
        return (
            <div className='user-add'>
                <input type='text' placeholder='Enter user name' onChange={
                        (e) => {this.updateCurrentName(e.target.value);}
                    }></input>
                <button type='submit' onClick={this.handleClick}>ADD USER</button>
            </div>
        );
    }
};

export default UserAdd;