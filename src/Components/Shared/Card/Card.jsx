import React from 'react'
import "./Card.css"
function Card(props)
{
   return(
     <div className="card">

         <div className="heading">
            <img src={props.icon} alt="Logo"/>
            <h1 className="welcome"> {props.title}</h1>
         </div>
         {props.children}   
         {/* props.children is to display all the contents which are not props like paragraph button etc. */}
        </div>
   )
}

export default Card;