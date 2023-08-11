import React from 'react';
import {Link} from 'react-router-dom'
function Navigation()
{
    const styles={
        width:'190px',
        // marginLeft:'-100px'
    }
    return(
       <nav className='container'>
        <Link to="/">
            <img style={styles}src="/images/Logo.png" alt="Logo"/>
        </Link>
       </nav>
    )
}

export default Navigation;