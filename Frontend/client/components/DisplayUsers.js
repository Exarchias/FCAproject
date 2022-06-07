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

  async function editThe(user) {
    console.log("Editing " + user.username + "!");
    prop.setUserInFocus(user);
    prop.setPanel("edittheuser");
  }

  async function superviseThe(user) {
    console.log("Supervising " + user.username + "!");
    prop.setUserSupervised(user);
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
    <tr style={{display: item.username!=null? 'table-row' : 'none'}}>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>{item.username}</td>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>{item.admin == "true"? "Admin" : "User"}</td>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>
    <button style={{display: item.username!=null? 'inline' : 'none'}} onClick={() => deleteThe(item)}><span>Delete</span> {item.username}</button>
    <button style={{display: item.username!=null? 'inline' : 'none'}} onClick={() => editThe(item)}><span>Edit</span> {item.username}</button>
    <button style={{display: item.username!=null? 'inline' : 'none'}} onClick={() => superviseThe(item)}><span>Become</span> {item.username}</button></td>
  </tr>
):""}
  
</tbody>
</table>
            
            <hr />
   </section>
    )

}

export default DisplayUsers