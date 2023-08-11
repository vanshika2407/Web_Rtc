import React from 'react'
import './Button.css'
function Button(props)
{
    return(
         <button onClick={props.onClick} className="click buttonStyle">
            <span className="username">{props.username}</span>
            <img className='arrow' src={props.logo} alt="arrow"/>
            </button>
    )
}

export default Button;