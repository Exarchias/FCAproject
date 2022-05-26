import React, { useState } from 'react';

function DeleteUser(prop) {

//=========== DELETE USER MECHANISM AREA CODE STARTS HERE =======================
const renderErrorMessageDel = (name) =>
name === prop.errorMessagesDel.name && (
<div className="error">{prop.errorMessagesDel.message}</div>
);

const handleSubmitDel = (event) => {
  if(prop.isAdmin){
    //run the code
    // Prevent page reload
  event.preventDefault();

  if(prop.theUsers.length == 0){
    prop.database.map(obj => {
        prop.theUsers.push({username: obj.username,
      password: obj.password,
      admin: obj.admin});
      });
  
  } //end  if(theUsers.length == 0)

  //all the forms are in an aray. loginis 0 reg is 1, 2 for Create A user 3 for Edit User and 4 for deleting a user
 // var { unameDel } = document.forms[4]; //form 4 for Delete User
 var formi = document.getElementById("deleteuser"); 
    var unameDel2 = formi.unameDel.value;

// Find user login info
const userDataDel = prop.theUsers.find((user) => user.username === unameDel2);


// Compare user info
if (userDataDel) {
// Username IS found. It is a good thing.
console.log("The user exists. the delete code runs");
prop.theUsers.map(obj => {
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

console.log(prop.database); //prints the database object that contains the users.

prop.theUsers.map(obj => {
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
        <section style={{display: prop.panel =="deleteuser" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Delete a User Inderpendently</h1>
            <h3>This is an admin panel function</h3>
            <button onClick={prop.goToCreateUser} style={{display: prop.isAdmin ? 'inline' : 'none'}}>Create User</button>
            <button onClick={prop.goToEditUser} style={{display: prop.isAdmin ? 'inline' : 'none'}}>Edit User</button>
            <hr />
            <h3>Temportary Display of the Users</h3>
            <ol>
            {prop.theUsers!=null ? prop.theUsers.map((item) => <li>{item.username} </li>):""}
            </ol>
     <form id="deleteuser" onSubmit={handleSubmitDel}>
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

export default DeleteUser