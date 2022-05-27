import React, { useState } from 'react';
import DisplayUsers from './DisplayUsers';

function CreateUser(prop) {

    //=========== CREATE USER MECHANISM AREA CODE STARTS HERE =======================
  const renderErrorMessageCre = (name) =>
  name === prop.errorMessagesCre.name && (
  <div className="error">{prop.errorMessagesCre.message}</div>
  );

  const handleSubmitCre = (event) => {
    if(prop.isAdmin){
      //run the code
      // Prevent page reload
    event.preventDefault();

    //all the forms are in an aray. loginis 0 reg is 1 etc.
    var formi = document.getElementById("createuser"); 
    var unameCre2 = formi.unameCre.value;
    var passCre2 = formi.passCre.value;
    console.log("unameCre:" + unameCre2);


    if(prop.theUsers.length == 0){
      prop.database.map(obj => {
      prop.theUsers.push({username: obj.username,
      password: obj.password,
      admin: obj.admin});
      });
  
  
      prop.theUsers.map(obj => {
      console.log("username:" + obj.username + " , password: " + obj.password);
    });
  } //end  if(theUsers.length == 0)

// Find user login info
const userDataCre = prop.theUsers.find((user) => user.username == unameCre2);



// Compare user info
if (userDataCre) {
    //prop.setErrorMessagesCre({ name: "unameCre", message: errorsCre.unameCre });
    prop.setErrorMessagesCre("This user already exists!");
} else {
// Username not found. It is a good thing.

if(prop.theUsers.length == 0){
    prop.database.map(obj => {
    prop.theUsers.push({username: obj.username,
    password: obj.password,
    admin: obj.admin});
    });


    prop.theUsers.map(obj => {
    console.log("username:" + obj.username + " , password: " + obj.password);
  });
} //end  if(theUsers.length == 0)

prop.theUsers.push({
  username: unameCre2,
  password: passCre2,
  admin: "true"
});

//setTheUsers(database); //passes the new user to the collection of the users of the system
//setTheUsers(database); //passes the new user to the collection of the users of the system

console.log(prop.database); //prints the database object that contains the users.

prop.theUsers.map(obj => {
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
        <section style={{display: prop.panel =="createuser" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Create a User Inderpendently</h1>
            <h3>This is an admin panel function</h3>
            <button onClick={prop.goToEditUser} style={{display: prop.isAdmin ? 'inline' : 'none'}}>Edit User</button>
            <button onClick={prop.goToDeleteUser}style={{display: prop.isAdmin ? 'inline' : 'none'}}>Delete User</button>
            <hr />
            <DisplayUsers 
        theUsers = {prop.theUsers} 
        isAdmin = {prop.isAdmin} 
        />
     <form id="createuser" onSubmit={handleSubmitCre}>
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

export default CreateUser