import React, { Component } from 'react';
import './UserItem.css';

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteUser(this.props.user);
    }

    render() {
        return (
            <li className='user-item'>
                <span>{this.props.user.name}</span>
                <span className='user-delete' onClick={this.handleClick}>&#x2716;</span>
            </li>
        );
    }
};

export default UserItem;