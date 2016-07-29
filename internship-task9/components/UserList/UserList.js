import React, { Component } from 'react';
import './UserList.css';
import UserAdd from '../UserAdd/UserAdd.js';
import UserItem from '../UserItem/UserItem.js';
import UserFilter from '../UserFilter/UserFilter.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../../actions/userListActions";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.addUser = this.props.addUser.bind(this);
        this.deleteUser = this.props.deleteUser.bind(this);
        this.filterUsers = this.props.filterUsers.bind(this);
        this.updateCurrentName = this.props.updateCurrentName.bind(this);
        this.renderUsers = this.renderUsers.bind(this);
    }


    renderUsers(state) {
        const { filterName, users } = state;
        const filteredUsers = users.filter((item) => {
            return ((item.name || '').indexOf(filterName) > -1);
        });
        return filteredUsers.map((item, index) => {
            return (
                    <UserItem key={index} user={item} deleteUser={this.deleteUser}></UserItem>
                );
        });
    }

    render() {
        return (
            <div className='users'>
                <div className='users-title'>
                    <p>User Manager Component</p>
                </div>
                <div className='users-body'>
                    <ul className='user-left'>
                        { this.renderUsers(this.props.stateFromReducer) }
                    </ul>
                    <div className='user-right'>
                        <UserAdd addUser={this.addUser} updateCurrentName={this.updateCurrentName}></UserAdd>
                        <UserFilter filterUsers={this.filterUsers}></UserFilter>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;