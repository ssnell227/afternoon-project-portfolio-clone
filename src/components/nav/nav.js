import React from 'react'
import Button from '../button/button'

function Header (props) {
    return (
        <div>
            <img></img>
            <Button className='nav-button' name={'SERVICES'}/>
            <Button className='nav-button' name={'PORTFOLIO'} />
            <Button className='nav-button' name={'ABOUT'}/>
            <Button className='nav-button' name={'TEAM'} />
            <Button className='nav-button' name={'CONTACT'}/>
        </div>
    )
}

export default Header