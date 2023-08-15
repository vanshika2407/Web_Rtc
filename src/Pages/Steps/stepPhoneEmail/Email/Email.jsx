import React from 'react'
import {useState} from 'react';
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button';
import Input from '../../../../Components/Shared/Input/Input';
import './Email.css'

function Email(props)
{
    const[email,setEmail]=useState('');
    return(
        <div>
             <Card 
     title="Enter Your Email Id"
     icon="/images/email.png">
      <Input value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <div className='emailButton'>
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

export default Email;