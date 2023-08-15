import React from 'react'
import  './Input.css'
function Input(props)
{
    return(
        <div>
            <input className='inputText' type="text" {...props}/>
        </div>
    )
}

export default Input;