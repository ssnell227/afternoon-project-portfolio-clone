import React, { Component } from 'react'
import Nav from '../nav/nav'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <Nav className='desktop-nav'/>
                <Nav className='mobile-nav'/>
                <Banner />
            </div>
        )
    }
}

export default Header