import React, { useState } from 'react';

function DisplayUsers(prop) {



    
    return (
        <section style={{display: prop.isAdmin ? 'block' : 'none'}}>
            <hr />
            <h3>Display of the Users</h3>
            <ol>
            {prop.theUsers!=null ? prop.theUsers.map((item) => 
            <li style={{display: item.username!="undefined"? 'block' : 'none'}} >{item.username} </li>):""}
            </ol>
            <hr />
   </section>
    )

}

export default DisplayUsers