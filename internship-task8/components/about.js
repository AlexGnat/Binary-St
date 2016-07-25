import React, { Component } from 'react'
import { Link } from 'react-router'
/* import Header from './common/header' */
import PageContent from '../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <PageContent>
                    <div>
                        <span>This is a demo app. Navigate to </span>
                        <Link to={`/#`}>/demo</Link>
                        <span>.</span>
                    </div>
                </PageContent>
            </div>
        )
    }
}

export default Demo