import React from 'react'
import Button from '../button/button'

import './nav.css'

function Nav (props) {
    return (
        <div className={`nav ${props.toggleClass}`}>
            <div className='nav-container'>
            <Button buttonClass='nav-button' name={'SERVICES'}/>
            <Button buttonClass='nav-button' name={'PORTFOLIO'} />
            <Button buttonClass='nav-button' name={'ABOUT'}/>
            <Button buttonClass='nav-button' name={'TEAM'} />
            <Button buttonClass='nav-button' name={'CONTACT'}/>
            </div>
        </div>
    )
}

export default Nav