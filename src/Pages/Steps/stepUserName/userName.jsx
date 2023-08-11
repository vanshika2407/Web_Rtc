import React from 'react'
import Button from '../../../Components/Shared/Button/Button';
function userName(props)
{
    return(
        <div>
        <div> Enter Your UserName Page</div>
        <div>
            <Button
        username="Next"
        logo="/images/Arrow.png" 
        onClick={props.onClick}
        />
         </div>
         </div>
    )
}

export default userName;