import React from 'react'
import{useState} from 'react'
import './register.css'
import phoneEmail from '../Steps/stepPhoneEmail/phoneEmail';
import Name from '../Steps/stepName/Name';
import otp from '../Steps/stepOtp/otp'
import profilePic from '../Steps/stepProfilePic/profilePic';
import userName from '../Steps/stepUserName/userName';
const steps={
    1: phoneEmail,
    2: otp,
    3: Name,
    4: profilePic,
    5: userName,
};
function Register()
{
    const[step,setStep]=useState(1);
    const Step=steps[step];

   function handleClick()
    {
        setStep(prevState=>prevState+1);
    }
    return(
      <div>
       <Step onClick={handleClick}/>
      </div>
    )
}
export default Register;