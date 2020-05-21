import React from 'react'

import './button.css'

function Button (props) {
    return (
        <div>
            <button className={props.buttonClass} onClick={props.clickFunction}>{props.name}</button>
        </div>
    )
}

export default Button