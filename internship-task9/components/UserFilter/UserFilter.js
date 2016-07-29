import React, { Component } from 'react';
import './UserFilter.css';

class UserFilter extends Component {
    constructor(props) {
        super(props);
        this.filterUsers = this.props.filterUsers.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const filterName = e.target.value;
        this.filterUsers(filterName);
    }

    render() {
        return (
            <div className='user-filter'>
                <input type='text' placeholder='Filter user name' onChange={(e) => {this.handleChange(e);}}></input>
                <p>FILTER USER</p>
            </div>
        );
    }
};

export default UserFilter;