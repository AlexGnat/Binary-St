import React, { Component } from 'react';
import './UserList.css';
import UserAdd from '../UserAdd/UserAdd.js';
import UserItem from '../UserItem/UserItem.js';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [{
              name: 'Default User',
              id: Date.now()
          }],
          currentName: ''
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

   addUser(user) {
        console.log('adding user', user, this);
        const users = [...this.state.users];
        users.push(user);
        this.setState({
            users
        });
    }

    deleteUser(user) {
        console.log('deleting user', user, this);
        const users = [...this.state.users];
        const deleteIndex = users.findIndex((item) => {
            return (item.id === user.id);
        });
        users.splice(deleteIndex, 1);
        this.setState({
            users
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state.users.length !== nextState.users.length);
    }

    render() {
        return (
            <div className='users'>
                <div className='users-title'>
                    <p>User Manager Component</p>
                </div>
                <div className='users-body'>
                    <ul className='user-left'>
                        {
                            this.state.users.map((item, index) => {
                                return (
                                    <UserItem key={index} user={item} deleteUser={this.deleteUser}></UserItem>
                                );
                            })
                        }
                    </ul>
                    <UserAdd className='user-right' onClick={this.addUser}></UserAdd>
                </div>
            </div>
        );
    }
}

export default UserList;