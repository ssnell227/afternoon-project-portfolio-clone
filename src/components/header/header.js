import React, { Component } from 'react'
import Nav from '../nav/nav'
import Button from '../button/button'

import './header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu () {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <img className='logo' src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt='Logo'></img>
                    <Nav toggleClass={this.state.menuOpen ? 'menu-open' : null}/>
                    <Button clickFunction={this.toggleMenu} buttonClass='menu-button' name='MENU☰'/>
                </div>
            </div>
        )
    }
}

export default Header