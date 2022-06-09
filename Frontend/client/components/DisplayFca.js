import React, { useState } from 'react';

function DisplayFca(prop) {

  async function helloworld() {
    console.log("helloworld");
  }

  async function sayHello(name) {
    console.log("Hello " + name + "!");
  }

  async function deleteThe(item) {
    console.log("Deleting " + item.username + "!");
    delete item.username;
  delete item.password;
  delete item.admin;
  }

  async function editThe(item) {
    console.log("Editing " + item.username + "!");
    prop.setItemInFocus(item);
    prop.setPanel("edittheitem");
  }



    
    return (
        <section className='displayfca' style={{display: prop.loggedIn ? 'block' : 'none'}}>
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
{prop.userSupervised.items!=null ? prop.userSupervised.items.map((item) => 
    <tr style={{display: item.username!=null? 'table-row' : 'none'}}>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>{item.username}</td>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>{item.admin == "true"? "Admin" : "User"}</td>
    <td style={{display: item.username!=null? 'table-cell' : 'none'}}>
    <button style={{display: item.username!=null? 'inline' : 'none'}} onClick={() => deleteThe(item)}><span>Delete</span> {item.username}</button>
    <button style={{display: item.username!=null? 'inline' : 'none'}} onClick={() => editThe(item)}><span>Edit</span> {item.username}</button>
    </td>
  </tr>
):""}
  
</tbody>
</table>
            
            <hr />
   </section>
    )

}

export default DisplayFca