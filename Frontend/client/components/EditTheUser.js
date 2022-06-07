import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';

function EditTheUser(prop) {

   //=========== EDIT USER MECHANISM AREA CODE STARTS HERE =======================
  const renderErrorMessageEdi = (name) =>
  name === prop.errorMessagesEdi.name && (
  <div className="error">{prop.errorMessagesEdi.message}</div>
  );

  const handleSubmitEdi = (event) => {
    if(prop.isAdmin){
      //run the code
      // Prevent page reload
    event.preventDefault();

    //all the forms are in an aray. loginis 0 reg is 1, 2 for Create A user 3 for Edit User and 4 for deleting a user
    //var { unameEdi, passEdi, adminEdi } = document.forms[3]; //form 3 for Edit User

    var formi = document.getElementById("edittheuser"); 
    var passEdi2 = formi.passEdi.value;

// Find user login info
const userDataEdi = prop.userInFocus;


// Compare user info
if (userDataEdi) {
// Username IS found. It is a good thing.
console.log("The user exists. the edit code runs")
userDataEdi.password = passEdi2;
userDataEdi.admin = "true"; //it gives admin privileges by default until we fix the checkbox thing

prop.theUsers.map(obj => {
  console.log("username:" + obj.username + " , password: " + obj.password);
});


//theUsers.push({
  //username: unameEdi.value,
  //password: passEdi.value,
  //admin: adminEdi
//});



//setTheUsers(database); //passes the new user to the collection of the users of the system
//setTheUsers(database); //passes the new user to the collection of the users of the system

console.log(prop.database); //prints the database object that contains the users.

theUsers.map(obj => {
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
        <section className='edittheuser' style={{display: prop.panel =="edittheuser" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Edit {prop.userInFocus.username}</h1>
            <h3>This is an admin panel function</h3>
            <button onClick={prop.goToCreateUser} style={{display: prop.isAdmin ? 'inline' : 'none'}}><span>Create User</span></button>
            <button onClick={prop.goToDeleteUser}style={{display: prop.isAdmin ? 'inline' : 'none'}}><span>Delete User</span></button>
            <hr />
            <DisplayUsers
        userInFocus = {prop.userInFocus}
        setUserInFocus = {prop.setUserInFocus} 
        userSupervised = {prop.userSupervised}
        setUserSupervised = {prop.setUserSupervised} 
        theUsers = {prop.theUsers} 
        isAdmin = {prop.isAdmin}
        setPanel = {prop.setPanel} 
        />
     <form id="edittheuser" onSubmit={handleSubmitEdi}>
       <div className="input-container">
         <label>Username: {prop.userInFocus.username} </label>
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

export default EditTheUser