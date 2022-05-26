import React, { useState } from 'react';
import CreateUser from './CreateUser';

function AdminPanel(props) {

    
    return (
        <div>
        <hr />
        <h1>This will be the separate Admin panel!</h1>
        <h3>Temportary Display of the Users</h3>
            <ol>
            {props.theUsers!=null ? props.theUsers.map((item) => <li>{item.username} </li>):""}
            </ol>
            <h2 style={{display: props.isAdmin ? 'none' : 'inline'}}>Dafug Are you doing here man?</h2>
            <p style={{display: props.isAdmin ? 'inline' : 'none'}}>Displaying a few users... blah... blah... </p>
            <p>The isAdmin value is: {props.isAdmin}</p>
            <br />
            <button onClick={props.goToCreateUser} style={{display: props.isAdmin ? 'inline' : 'none'}}>Create User</button>
            <button onClick={props.goToEditUser} style={{display: props.isAdmin ? 'inline' : 'none'}}>Edit User</button>
            <button onClick={props.goToDeleteUser}style={{display: props.isAdmin ? 'inline' : 'none'}}>Delete User</button>
            <hr />
            <h1>Inderpendent components</h1>
            <hr />
        </div>
    )

}

export default AdminPanel