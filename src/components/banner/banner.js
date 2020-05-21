import React from 'react'
import Button from '../button/button'

import './banner.css'

function Banner (props) {
    return (
        <div className='banner'>
            <div className='banner-content'>
            <h2>Welcome To Our Studio</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <Button buttonClass='banner-button' name='TELL ME MORE' />
            </div>
        </div>
    )
}

export default Banner