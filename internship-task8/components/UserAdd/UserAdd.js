import React, { Component } from 'react';
import './UserAdd.css';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const currentInputValue = this.refs.UserAddInput.value.trim();
        if (currentInputValue) {
            this.props.onClick({
                name: currentInputValue,
                id: Date.now()
            });
        }
        this.refs.UserAddInput.value = '';
    }

    render() {
        return (
            <div className='user-add'>
                <input type='text' placeholder='Enter user name' ref='UserAddInput'></input>
                <button type='submit' onClick={this.handleClick}>ADD USER</button>
            </div>
        );
    }
};

export default UserAdd;