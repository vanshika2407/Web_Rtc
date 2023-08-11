import React from 'react'
import Card from '../../../Components/Shared/Card/Card';
import Button from '../../../Components/Shared/Button/Button';
function phoneEmail(props)
{
    return(
          <div className='containerRegister'>
     <Card 
     title="Enter Your Phone Number"
     icon="/images/call.png">
     <div>
        <Button
        username="Next"
        logo="/images/Arrow.png" 
        onClick={props.onClick}
        />
        
     </div>
     </Card>
     </div>
    )
}

export default phoneEmail;