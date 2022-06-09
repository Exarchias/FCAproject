import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';
import DisplayFca from "./DisplayFca";

function CreateFca(prop) {

    //=========== CREATE USER MECHANISM AREA CODE STARTS HERE =======================
  const renderErrorMessageCre = (name) =>
  name === prop.errorMessagesCre.name && (
  <div className="error">{prop.errorMessagesCre.message}</div>
  );

  const handleSubmitCre = (event) => {
    if(prop.loggedIn){
      //run the code
      // Prevent page reload
    event.preventDefault();

    //all the forms are in an aray. loginis 0 reg is 1 etc.
    var formi = document.getElementById("createfca"); 
    var unameCre2 = formi.unameCre.value;
    var passCre2 = formi.passCre.value;
    console.log("unameCre:" + unameCre2);


// Find user login info
const itemDataCre = prop.userSupervised.items.find((item) => item.username == unameCre2);



// Compare user info
if (itemDataCre) {
    //prop.setErrorMessagesCre({ name: "unameCre", message: errorsCre.unameCre });
    prop.setErrorMessagesCre("This item already exists!");
} else {
// Username not found. It is a good thing.

prop.userSupervised.items.push({
  username: unameCre2,
  password: passCre2,
  admin: "true"
});

//setTheUsers(database); //passes the new user to the collection of the users of the system
//setTheUsers(database); //passes the new user to the collection of the users of the system

console.log(prop.userSupervised.items); //prints the database object that contains the users.

prop.userSupervised.items.map(obj => {
  console.log("username:" + obj.username + " , password: " + obj.password);
});
//console.log("The users: " + theUsers);
//setErrorMessagesReg({ name: "unameReg", message: errorsReg.unameReg });
}
    } else {
      //go to index
      prop.goToIndex();
    }

}; //handlesubmitCRE ends here

const errorsCre = {
  unameCre: "invalid username. User already exists!",
  passCre: "invalid password"
};

  //=========== CREATE USER MECHANISM AREA CODE ENDS HERE =======================

    
    return (
        <section className='createfca' style={{display: prop.panel =="createfca" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Create an Item Inderpendently</h1>
            <button onClick={prop.goToEditFca} style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Edit an Item</span></button>
            <button onClick={prop.goToDeleteFca}style={{display: prop.loggedIn ? 'inline' : 'none'}}><span>Delete an Item</span></button>
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
     <form id="createfca" onSubmit={handleSubmitCre}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="unameCre" required />
         {renderErrorMessageCre("unameCre")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="passCre" required />
         {renderErrorMessageCre("passCre")}
       </div>
       <div className="input-container">
       <label>Set Admin </label>
      <input type="checkbox" name="adminCre" value="true"/>
    </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </section>
    )

}

export default CreateFca