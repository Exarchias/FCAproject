import React, { useState } from 'react';
import CreateUser from './CreateUser';
import DeleteUser from "./DeleteUser";
import DisplayUsers from './DisplayUsers';
import EditUser from "./EditUser";
import EditTheUser from "./EditTheUser";

function AdminPanel(props) {

    
    return (
        <section className='adminpanel1' style={{display: props.isAdmin ? 'block' : 'none'}}> 
        <section className='adminpanel2' style={{display: props.panel =="adminpanel" ? 'block' : 'none'}}> 
        <div>
        <hr />
        <h1>This will be the separate Admin panel!</h1>
        <DisplayUsers 
        theUsers = {props.theUsers} 
        isAdmin = {props.isAdmin}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised} 
        userInFocus = {props.userInFocus}
        setUserInFocus = {props.setUserInFocus} 
        setPanel = {props.setPanel} 
        />
            <h2 style={{display: props.isAdmin ? 'none' : 'inline'}}>Dafug Are you doing here man?</h2>
            <br />
            <button onClick={props.goToCreateUser} style={{display: props.isAdmin ? 'inline' : 'none'}}><span>Create User</span></button>
            <button onClick={props.goToEditUser} style={{display: props.isAdmin ? 'inline' : 'none'}}><span>Edit User</span></button>
            <button onClick={props.goToDeleteUser}style={{display: props.isAdmin ? 'inline' : 'none'}}><span>Delete User</span></button>
            <hr />
        </div>
        </section>
        <CreateUser loggedUser = {props.loggedUser} 
        userInFocus = {props.userInFocus} 
        panel = {props.panel} 
        loggedIn = {props.loggedIn} 
        isAdmin = {props.isAdmin} 
        username = {props.username} 
        theUsers = {props.theUsers}
        errorMessages = {props.errorMessages} 
        errorMessagesCre = {props.errorMessagesCre}  
        isSubmitted = {props.isSubmitted} 
        setUserInFocus = {props.setUserInFocus} 
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesCre = {props.setErrorMessagesCre}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToEditUser = {props.goToEditUser} 
        goToDeleteUser = {props.goToDeleteUser}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
         />

        <EditUser  loggedUser = {props.loggedUser} 
        userInFocus = {props.userInFocus} 
        panel = {props.panel} 
        loggedIn = {props.loggedIn} 
        isAdmin = {props.isAdmin} 
        username = {props.username} 
        theUsers = {props.theUsers}
        errorMessages = {props.errorMessages} 
        errorMessagesEdi = {props.errorMessagesEdi}  
        isSubmitted = {props.isSubmitted} 
        setUserInFocus = {props.setUserInFocus} 
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesEdi = {props.setErrorMessagesEdi}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToCreateUser = {props.goToCreateUser} 
        goToDeleteUser = {props.goToDeleteUser}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
        />

<EditTheUser  loggedUser = {props.loggedUser} 
        userInFocus = {props.userInFocus} 
        panel = {props.panel} 
        loggedIn = {props.loggedIn} 
        isAdmin = {props.isAdmin} 
        username = {props.username} 
        theUsers = {props.theUsers}
        errorMessages = {props.errorMessages} 
        errorMessagesEdi = {props.errorMessagesEdi}  
        isSubmitted = {props.isSubmitted} 
        setUserInFocus = {props.setUserInFocus} 
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesEdi = {props.setErrorMessagesEdi}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToCreateUser = {props.goToCreateUser} 
        goToDeleteUser = {props.goToDeleteUser}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
        />

<DeleteUser 
            loggedUser = {props.loggedUser} 
            userInFocus = {props.userInFocus} 
            panel = {props.panel} 
            loggedIn = {props.loggedIn} 
            isAdmin = {props.isAdmin} 
            username = {props.username} 
            theUsers = {props.theUsers}
            errorMessages = {props.errorMessages} 
            errorMessagesDel = {props.errorMessagesDel}  
            isSubmitted = {props.isSubmitted} 
            setUserInFocus = {props.setUserInFocus} 
            setPanel = {props.setPanel} 
            setErrorMessages = {props.setErrorMessages} 
            setErrorMessagesDel = {props.setErrorMessagesDel}  
            setIsSubmitted = {props.setIsSubmitted}
            database = {props.database}
            goToCreateUser = {props.goToCreateUser} 
            goToEditUser = {props.goToEditUser}
            userSupervised = {props.userSupervised}
            setUserSupervised = {props.setUserSupervised}
            />
         </section>
    )

}

export default AdminPanel