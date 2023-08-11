import React from 'react'
import Button from '../../../Components/Shared/Button/Button';
function profilePic(props)
{
    return(
        <div>
        <div> Upload Your Profile Pic</div>
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

export default profilePic;