import React, { useState } from 'react';

function DisplayUsers(prop) {



    
    return (
        <section className='displayusers' style={{display: prop.isAdmin ? 'block' : 'none'}}>
            <hr />
            <h3>Display of the Users</h3>
            <table>
<thead>
  <tr>
    <th>Username</th>
    <th>Role</th>
    <th>Options</th>
  </tr>
</thead>
<tbody>
{prop.theUsers!=null ? prop.theUsers.map((item) => 
    <tr style={{display: item.username!="undefined"? 'table-row' : 'none'}}>
    <td>{item.username}</td>
    <td>{item.admin == "true"? "Admin" : "User"}</td>
    <td><button>Delete {item.username}</button><button>Edit {item.username}</button><button>Become {item.username}</button></td>
  </tr>
            ):""}
  
</tbody>
</table>
            
            <hr />
   </section>
    )

}

export default DisplayUsers