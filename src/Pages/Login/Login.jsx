import React from 'react';
import { useState } from 'react';
import phoneEmail from '../Steps/stepPhoneEmail/phoneEmail'
import otp from '../Steps/stepOtp/otp';

const steps={
    1: phoneEmail,
    2: otp,
};
function Login()
{
     const [step,setStep]=useState(1);
     const Step=steps[step];

     function handleClick()
     {
          setStep(prevState=>prevState+1);
     }
    return(
        <Step onClick={handleClick}/>
    )
}

export default Login;