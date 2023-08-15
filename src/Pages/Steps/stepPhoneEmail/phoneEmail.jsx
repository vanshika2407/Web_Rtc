import React from 'react';
import {useState} from 'react';
import './PhoneEmail.css';
import Phone from './Phone/Phone';
import Email from './Email/Email';

const PhoneEmailType={
    phone:Phone,
    email:Email
}
function PhoneEmail(props)
{

    const[type,setType]=useState('phone');
    const Type=PhoneEmailType[type]

    return(
          <div className="phoneEmail">
          <div>
          <div className='buttonsToggle'>
             <button className={(type==="phone"?"buttons active":"buttons")} onClick={()=>setType('phone')}><img src="/images/phone_android.png" alt="phone"/></button>
             <button className={(type==="email"?"buttons active":"buttons")} onClick={()=>setType('email')}><img src="/images/email.png" alt="email"/></button>
             </div>
            <Type onClick={props.onClick} />
          </div>
           </div>
    )
}

export default PhoneEmail;