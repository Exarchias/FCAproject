import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';
import DisplayFca from "./DisplayFca";

function DeleteFca(prop) {

//=========== DELETE USER MECHANISM AREA CODE STARTS HERE =======================
const renderErrorMessageDel = (name) =>
name === prop.errorMessagesDel.name && (
<div className="error">{prop.errorMessagesDel.message}</div>
);

const handleSubmitDel = (event) => {
  if(prop.loggedIn){
    //run the code
    // Prevent page reload
  event.preventDefault();


  //all the forms are in an aray. loginis 0 reg is 1, 2 for Create A user 3 for Edit User and 4 for deleting a user
 // var { unameDel } = document.forms[4]; //form 4 for Delete User
 var formi = document.getElementById("deletefca"); 
    var unameDel2 = formi.unameDel.value;

// Find user login info
const itemDataDel = prop.userSupervised.items.find((user) => user.username === unameDel2);


// Compare user info
if (itemDataDel) {
// Username IS found. It is a good thing.
console.log("The user exists. the delete code runs");
prop.userSupervised.items.map(obj => {
if(obj.username === unameDel2){
    //obj = null;
  delete obj.username;
  delete obj.password;
  delete obj.admin;
}
});


//theUsers.push({
//username: unameEdi.value,
//password: passEdi.value,
//admin: adminEdi
//});



//setTheUsers(database); //passes the new user to the collection of the users of the system
//setTheUsers(database); //passes the new user to the collection of the users of the system

console.log(prop.userSupervised.items); //prints the database object that contains the users.

prop.userSupervised.items.map(obj => {
console.log("username:" + obj.username + " , password: " + obj.password);
});
//console.log("The users: " + theUsers);
//setErrorMessagesReg({ name: "unameReg", message: errorsReg.unameReg });
} else {
//user doesn't exist
prop.setErrorMessagesDel({ name: "unameDel", message: errorsDel.unameDel });
}
  } else {
    //go to index
    prop.goToIndex();
  }

}; //handlesubmitCRE ends here

const errorsDel = {
unameEdi: "invalid username. User Doesn't exist!",
passEdi: "invalid password"
};

//=========== DELETE USER MECHANISM AREA CODE ENDS HERE =======================

    
    return (
        <section className='deletefca' style={{display: prop.panel =="deletefca" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Delete an FCA Inderpendently</h1>
            <button onClick={prop.goToCreateFca} style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Create an FCA</span></button>
            <button onClick={prop.goToEditFca} style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Edit an FCA</span></button>
            <hr />
            <DisplayFca 
        theUsers = {prop.theUsers} 
        isAdmin = {prop.isAdmin}
        loggedIn = {prop.loggedIn}
        userSupervised = {prop.userSupervised}
        setUserSupervised = {prop.setUserSupervised} 
        userInFocus = {prop.userInFocus}
        itemInFocus = {prop.itemInFocus}
        setItemInFocus = {prop.setItemInFocus} 
        setPanel = {prop.setPanel} 
        />
     <form id="deletefca" onSubmit={handleSubmitDel}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="unameDel" required />
         {renderErrorMessageDel("unameDel")}
       </div>

       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </section>
    )

}

export default DeleteFca