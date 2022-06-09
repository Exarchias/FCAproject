import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';
import DisplayFca from "./DisplayFca";

function EditTheItem(prop) {

   //=========== EDIT USER MECHANISM AREA CODE STARTS HERE =======================
  const renderErrorMessageEdi = (name) =>
  name === prop.errorMessagesEdi.name && (
  <div className="error">{prop.errorMessagesEdi.message}</div>
  );

  const handleSubmitEdi = (event) => {
    if(prop.loggedIn){
      //run the code
      // Prevent page reload
    event.preventDefault();

    //all the forms are in an aray. loginis 0 reg is 1, 2 for Create A user 3 for Edit User and 4 for deleting a user
    //var { unameEdi, passEdi, adminEdi } = document.forms[3]; //form 3 for Edit User

    var formi = document.getElementById("edittheitem"); 
    var passEdi2 = formi.passEdi.value;

// Find user login info
const itemDataEdi = prop.itemInFocus;


// Compare user info
if (itemDataEdi) {
// Username IS found. It is a good thing.
console.log("The item exists. the edit code runs")
itemDataEdi.password = passEdi2;
itemDataEdi.admin = "true"; //it gives admin privileges by default until we fix the checkbox thing

prop.userSupervised.items.map(obj => {
  console.log("username:" + obj.username + " , password: " + obj.password);
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
prop.setErrorMessagesEdi({ name: "unameEdi", message: errorsEdi.unameEdi });
}
    } else {
      //go to index
      prop.goToIndex();
    }

}; //handlesubmitCRE ends here

const errorsEdi = {
  unameEdi: "invalid username. User Doesn't exist!",
  passEdi: "invalid password"
};

  //=========== EDIT USER MECHANISM AREA CODE ENDS HERE =======================

    
    return (
        <section className='edittheitem' style={{display: prop.panel =="edittheitem" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Edit {prop.itemInFocus.username}</h1>
            <button onClick={prop.goToCreateItem} style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Create an FCA</span></button>
            <button onClick={prop.goToDeleteItem}style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Delete an FCA</span></button>
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
     <form id="edittheitem" onSubmit={handleSubmitEdi}>
       <div className="input-container">
         <label>Username: {prop.itemInFocus.username} </label>
         {renderErrorMessageEdi("unameEdi")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="passEdi" required />
         {renderErrorMessageEdi("passEdi")}
       </div>
       <div className="input-container">
       <label>Set Admin </label>
      <input type="checkbox" name="adminEdi" value="true"/>
    </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </section>
    )

}

export default EditTheItem