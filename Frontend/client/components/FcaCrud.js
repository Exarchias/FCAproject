import React, { useState } from 'react';
import CreateUser from './CreateUser';
import DeleteUser from "./DeleteUser";
import DisplayUsers from './DisplayUsers';
import EditUser from "./EditUser";
import EditTheUser from "./EditTheUser";
import DisplayFca from "./DisplayFca";
import CreateFca from './CreateFca';
import EditFca from "./EditFca";
import EditTheItem from './EditTheItem';
import DeleteFca from "./DeleteFca";

function FcaCrud(props) {

    
    return (
        <section className='fcacrud1' style={{display: props.loggedIn ? 'block' : 'none'}}> 
        <section className='fcacrud2' style={{display: props.panel =="fcacrud" ? 'block' : 'none'}}> 
        <div>
        <hr />
        <h1>This will be the separate FCA Files' panel!</h1>
        <DisplayFca 
        theUsers = {props.theUsers} 
        isAdmin = {props.isAdmin}
        loggedIn = {props.loggedIn}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised} 
        userInFocus = {props.userInFocus}
        itemInFocus = {props.itemInFocus}
        setItemInFocus = {props.setItemInFocus} 
        setPanel = {props.setPanel} 
        />
            <h2 style={{display: props.loggedIn ? 'none' : 'inline'}}>Dafug Are you doing here man?</h2>
            <br />
            <button onClick={props.goToCreateFca} style={{display: props.loggedIn ? 'inline' : 'none'}}><span>Create an FCA</span></button>
            <button onClick={props.goToEditFca} style={{display: props.loggedIn ? 'inline' : 'none'}}><span>Edit an FCA</span></button>
            <button onClick={props.goToDeleteFca}style={{display: props.loggedIn ? 'inline' : 'none'}}><span>Delete an FCA</span></button>
            <hr />
        </div>
        </section>
        <CreateFca loggedUser = {props.loggedUser} 
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
        setItemInFocus = {props.setItemInFocus} 
        itemInFocus = {props.itemInFocus}
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesCre = {props.setErrorMessagesCre}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToEditUser = {props.goToEditUser} 
        goToDeleteUser = {props.goToDeleteUser}
        goToEditFca = {props.goToEditFca} 
        goToDeleteFca = {props.goToDeleteFca}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
         />

<EditFca  loggedUser = {props.loggedUser} 
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
        setItemInFocus = {props.setItemInFocus} 
        itemInFocus = {props.itemInFocus}
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesEdi = {props.setErrorMessagesEdi}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToCreateFca = {props.goToCreateFca} 
        goToDeleteFca = {props.goToDeleteFca}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
        />


<EditTheItem  loggedUser = {props.loggedUser} 
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
        setItemInFocus = {props.setItemInFocus} 
        itemInFocus = {props.itemInFocus}
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesEdi = {props.setErrorMessagesEdi}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToCreateFca = {props.goToCreateFca} 
        goToDeleteFca = {props.goToDeleteFca}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
        />

<DeleteFca loggedUser = {props.loggedUser} 
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
        setItemInFocus = {props.setItemInFocus} 
        itemInFocus = {props.itemInFocus}
        setPanel = {props.setPanel} 
        setErrorMessages = {props.setErrorMessages} 
        setErrorMessagesDel = {props.setErrorMessagesDel}  
        setIsSubmitted = {props.setIsSubmitted}
        database = {props.database}
        goToEditUser = {props.goToEditUser} 
        goToDeleteUser = {props.goToDeleteUser}
        goToEditFca = {props.goToEditFca} 
        goToCreateFca = {props.goToCreateFca}
        userSupervised = {props.userSupervised}
        setUserSupervised = {props.setUserSupervised}
         />







         </section>
    )

}

export default FcaCrud