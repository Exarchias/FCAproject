import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';
import DisplayFca from "./DisplayFca";

function EditFca(prop) {

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

    var formi = document.getElementById("editfca"); 
    var unameEdi2 = formi.unameEdi.value;
    var passEdi2 = formi.passEdi.value;

// Find user login info
const itemDataEdi = prop.userSupervised.items.find((item) => item.username === unameEdi2);


// Compare user info
if (itemDataEdi) {
// Username IS found. It is a good thing.
console.log("The item exists. the edit code runs")
itemDataEdi.password = passEdi2;
itemDataEdi.admin = "true"; //it gives admin privileges by default until we fix the checkbox thing

prop.userSupervised.items.map(obj => {
  console.log("username:" + obj.username + " , password: " + obj.password);
});


console.log(prop.userSupervised.items); 

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
        <section className='edituser' style={{display: prop.panel =="editfca" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Edit an FCA Inderpendently</h1>
            <button onClick={prop.goToCreateFca} style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Create an FCA</span></button>
            <button onClick={prop.goToDeleteFca}style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Delete an FCA</span></button>
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
     <form id="editfca" onSubmit={handleSubmitEdi}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="unameEdi" required />
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

export default EditFca