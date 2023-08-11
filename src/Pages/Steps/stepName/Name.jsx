import React from 'react'
import Button from '../../../Components/Shared/Button/Button';
function Name(props)
{
    return(
        <div>
        <div> Name Page</div>
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

export default Name;