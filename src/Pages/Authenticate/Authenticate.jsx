import React from 'react';
import { useState } from 'react';
import PhoneEmail from '../Steps/stepPhoneEmail/PhoneEmail'
import Otp from '../Steps/stepOtp/otp';

const steps={
    1: PhoneEmail,
    2: Otp,
};
function Authenticate()
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

export default Authenticate;