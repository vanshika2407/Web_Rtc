import React from 'react'
import{useState} from 'react'
import Button from '../../../Components/Shared/Button/Button';
import Card from '../../../Components/Shared/Card/Card';
import Input from '../../../Components/Shared/Input/Input';
import './otp.css';
function Otp(props)
{
    const[codeOtp,setOtp]=useState('');
    return(
        <div className="otpContainer">
        <Card 
     title="Enter The Code We Texted You"
     icon="/images/lock.png">
     <Input value={codeOtp} onChange={(e)=>setOtp(e.target.value)}/>
        <div className="otpButton">
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

export default Otp;