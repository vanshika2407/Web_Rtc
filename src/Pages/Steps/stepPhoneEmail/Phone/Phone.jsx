import React from 'react'
import {useState} from 'react'
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button';
import Input from '../../../../Components/Shared/Input/Input';
import './PhoneNumber.css';
function Phone(props)
{
    const[phonenumber,setPhone]=useState('');
    return(
        <div className='containerPhone'>
     <Card 
     title="Enter Your Phone Number"
     icon="/images/call.png">
     <Input value={phonenumber} onChange={(e)=>setPhone(e.target.value)}/>
     <div className='phoneButton'>
        <Button
        username="Next"
        logo="/images/Arrow.png" 
        onClick={props.onClick}
        />
        </div>
        <p className="para"> By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks! </p>
     </Card>
     </div>
    )
}

export default Phone;