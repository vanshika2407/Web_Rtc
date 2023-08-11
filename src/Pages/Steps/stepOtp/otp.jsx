import React from 'react'
import Button from '../../../Components/Shared/Button/Button';
function otp(props)
{
    return(
        <div>
        <div> OTP Page</div>
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

export default otp;