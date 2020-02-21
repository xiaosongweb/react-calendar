


import React, { Component } from 'react'
import Calendar from '../../src'
export default class app extends Component {
    state = {
        value:new Date()
    }
    render() {
        return (
            <div style={{width:"100%"}}>
                <Calendar value={this.state.value}></Calendar>
            </div>
        )
    }
}
