import React, { Component } from 'react'
import './app.css'
import UserList from '../components/UserList/UserList'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <UserList></UserList>
        )
    }
}

export default App;