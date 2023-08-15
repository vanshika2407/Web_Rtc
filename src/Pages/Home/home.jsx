import React from 'react'
import './home.css'
import {Link,useNavigate} from 'react-router-dom'
import Card from '../../Components/Shared/Card/Card'
import Button from '../../Components/Shared/Button/Button'
function Home()
{
    const styles={
   color: "#0077FF",
   textDecoration:'none'
    }
    const history=useNavigate()
    function getLogin()
    {
          history("/authenticate");
    }
    return (
        <div className='containerHome'>
        <Card
            title="Welcome To Connect+"
            icon="/images/Logoo.png">
            <p className='text'>Welcome to the best real time connecting app Connect+.
          Enjoy your evenings talking to friends and also joining new rooms to gain knowledge</p>

          <div className='click'>
            <Button onClick={getLogin} username="Let's Go" logo="/images/Arrow.png">
            </Button>
          </div>

          <div>
            <span className='link'>Have An Invite Text?</span>
            {/* <Link style={styles} to="/login">Sign In</Link> */}
          </div>
       </Card>
        </div>
    )
}

export default Home;