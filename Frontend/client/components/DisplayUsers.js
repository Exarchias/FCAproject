import React, { useState } from 'react';

function DisplayUsers(prop) {

  async function helloworld() {
    console.log("helloworld");
  }

  async function sayHello(name) {
    console.log("Hello " + name + "!");
  }

  async function deleteThe(user) {
    console.log("Deleting " + user.username + "!");
    delete user.username;
  delete user.password;
  delete user.admin;
  }

  async function editThe(name) {
    console.log("Editing " + name + "!");
  }

  async function superviseThe(user) {
    console.log("Supervising " + user.username + "!");
    prop.setUserInFocus(user);
  }



    
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
    <td><button onClick={() => deleteThe(item)}>Delete {item.username}</button>
    <button onClick={() => sayHello(item.username)}>Edit {item.username}</button>
    <button onClick={() => superviseThe(item)}>Become {item.username}</button></td>
  </tr>
):""}
  
</tbody>
</table>
            
            <hr />
   </section>
    )

}

export default DisplayUsers