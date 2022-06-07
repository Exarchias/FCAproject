import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

function Measurements() {
    const [data, setData] = useState();
    const [theUsers, setTheUsers] = useState([]);
    const [loggedUser, setLoggedUser] = useState({username:"Visitor"}); //The user that is logged in
    const [userInFocus, setUserInFocus] = useState({username:"Visitor"}); //The same as logged user apart when the user is selected, (eg for edit)
    const [userSupervised, setUserSupervised] = useState({username:"Visitor"}); //The same as logged user apart when admin works in god mode.
    const [panel, setPanel] = useState("index"); //for changing panel mechanism
    document.title = "Welcome to " + panel; //setting the title
    const [loggedIn, setLoggedIn] = useState(false); //for access control
    const [isAdmin, setIsAdmin] = useState(false); //for access control
    const [username, setUseranme] = useState("Visitor"); //for access control 
    const [errorMessages, setErrorMessages] = useState({}); //for log in mechanism
    const [errorMessagesReg, setErrorMessagesReg] = useState({}); //for registration mechanism
    const [errorMessagesCre, setErrorMessagesCre] = useState({}); //for Create-User mechanism
    const [errorMessagesEdi, setErrorMessagesEdi] = useState({}); //for Edit-User mechanism
    const [errorMessagesDel, setErrorMessagesDel] = useState({}); //for Edit-User mechanism
    const [isSubmitted, setIsSubmitted] = useState(false); //for log in mechanism. 
    //we might want to turn isSumbitted false during the logout.
    //doing so it will help us with the registration.

    //========== SWITCHING PANELS MECHANISM STARTS HERE ================================
    //A super cool mechanism that "changes" pages, (panels) while we are in the same page.

    async function loadTheUsers() {
      //loading the users
      if(theUsers.length == 0){
        database.map(obj => {
          theUsers.push({username: obj.username,
          password: obj.password,
          admin: obj.admin});
          });
      
      } //end  if(theUsers.length == 0)
  }


    async function goToIndex() {
      loadTheUsers();
        setPanel("index");
        document.title = "Welcome to " + panel; //setting the title
    }
    
    async function goToLogin() {
      loadTheUsers();
      if(!loggedIn){
        setPanel("login");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }

    async function goToRegistration() {
      loadTheUsers();
      if(!loggedIn){
        setIsSubmitted(false);
        setPanel("registration");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }

    //we will probably not use that.
    async function goToUserDashboard() {
        loadTheUsers();
        setPanel("dashboard");
        document.title = "Welcome to " + panel; //setting the title
    }

    async function goToAdminPanel() {
      if(isAdmin){
        loadTheUsers();

        setPanel("adminpanel");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }

    async function goToCreateUser() {
      loadTheUsers();
      if(isAdmin){
        setPanel("createuser");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }

    async function goToEditUser() {
      loadTheUsers();
      if(isAdmin){
        setPanel("edituser");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }

    async function goToDeleteUser() {
      loadTheUsers();
      if(isAdmin){
        setPanel("deleteuser");
      } else {
        setPanel("index");
      }
      document.title = "Welcome to " + panel; //setting the title
    }
    //========== SWITCHING PANELS MECHANISM ENDS HERE ==================================



    //=========== LOGIN MECHANISM AREA CODE STARTS HERE ================================

    //Lavdim put your code here.

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        //if the system has no users. the system assigns the hardcoded ones.
        //setTheUsers(theUsers.push("fuck you!"));
          
          //theUsers.push("fuck you!");
          //console.log("The users: " + theUsers);
        if(theUsers.length == 0){
          database.map(obj => {
            theUsers.push({username: obj.username,
            password: obj.password,
            admin: obj.admin});
            });

          theUsers.map(obj => {
            console.log("username:" + obj.username + " , password: " + obj.password);
          });
        } //end  if(theUsers.length == 0)

        //all the forms are in an aray. loginis 0 reg is 1 etc.
        var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = theUsers.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    setUseranme(userData.username);
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      if(userData.admin == "true"){
        setIsAdmin("true");
      }
      setLoggedIn(true);
      setIsSubmitted(true);
      setLoggedUser(userData);
      setUserInFocus(userData);
      setPanel("index");
    }
  } else {
    // Username not found
    setUseranme("Visitor");
    setErrorMessages({ name: "uname", message: errors.uname });
  }
    
    };

    // User Login info
  var database = [
    {
      username: "user1",
      password: "pass1",
      admin: "true"
    },
    {
      username: "user2",
      password: "pass2",
      admin: "false"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const errorsReg = {
    unameReg: "invalid username. User already exists!",
    passReg: "invalid password"
  };
  
    //=========== LOGIN MECHANISM AREA CODE ENDS HERE ================================


    //=========== Registration MECHANISM AREA CODE STARTS HERE =======================
    const renderErrorMessageReg = (name) =>
    name === errorMessagesReg.name && (
    <div className="error">{errorMessagesReg.message}</div>
    );

    const handleSubmitReg = (event) => {
      // Prevent page reload
      event.preventDefault();

      //all the forms are in an aray. loginis 0 reg is 1 etc.
      var { unameReg, passReg } = document.forms[1]; 

// Find user login info
const userDataReg = theUsers.find((user) => user.username === unameReg.value);

// =============== Temportary code just for testing
let usernameTmp = unameReg.value;
let passTmp = passReg.value;
let adminTmp = false;
console.log("username:" + usernameTmp + " pass:" + passTmp + " admin:" + adminTmp)
// =============== Temportary code ends here

// Compare user info
if (userDataReg) {
  setUseranme("Visitor"); //unecessary code.
  setErrorMessagesReg({ name: "unameReg", message: errorsReg.unameReg });
} else {
  // Username not found. It is a good thing.
  setUseranme("Visitor"); //unecessary code.
  
  if(theUsers.length == 0){
    database.map(obj => {
      theUsers.push({username: obj.username,
      password: obj.password,
      admin: obj.admin});
      });


    theUsers.map(obj => {
      console.log("username:" + obj.username + " , password: " + obj.password);
    });
  } //end  if(theUsers.length == 0)

  theUsers.push({
    username: unameReg.value,
    password: passReg.value,
    admin: "false"
  });

  //setTheUsers(database); //passes the new user to the collection of the users of the system
  //setTheUsers(database); //passes the new user to the collection of the users of the system

  console.log(database); //prints the database object that contains the users.

  theUsers.map(obj => {
    console.log("username:" + obj.username + " , password: " + obj.password);
  });
  //console.log("The users: " + theUsers);
  //setErrorMessagesReg({ name: "unameReg", message: errorsReg.unameReg });
}
  
  };

  //=========== Registration MECHANISM AREA CODE ENDS HERE =======================

  
    //=========== TEST AND LOGOUT AREA CODE ================================

    async function stopSupervision() {
    setUserInFocus(loggedUser);
    setUserSupervised(loggedUser);
  }


    async function forceLogin() {
      setUseranme("Someone Logged In");
      setLoggedUser({username:"dummyuser"});
    setUserInFocus({username:"dummyuser"});
    setUserSupervised({username:"dummyuser"});
      setIsAdmin(false);
      setLoggedIn(false);
      setIsSubmitted(true);
      setLoggedIn(true);
  }


    //Logout mechanism. Not only for testing. We will keep it.
    //also it revokes admin privileges for obvious reasons.
    async function logout() {
        setUseranme("Visitor");
        setIsAdmin(false);
        setLoggedIn(false);
        setIsSubmitted(false);
        setLoggedUser({username:"Visitor"});
      setUserInFocus({username:"Visitor"});
      setUserSupervised({username:"Visitor"});
        setPanel("index");
    
    }

    //Grants admin privileges. for testing and development purposes.
    //also it logs the user in, fpr obvious reasons
    async function forceMakeAdmin() {
      if(!loggedIn){
        setLoggedUser({username:"dummyadmin"});
      setUserInFocus({username:"dummyadmin"});
      setUserSupervised({username:"dummyadmin"});
      setLoggedIn(true);
      }
        setIsSubmitted(true);
        setIsAdmin(true);
    }

    //Revokes admin privileges. for testing and development purposes.
    async function forceRevokeAdmin() {
        setIsAdmin(false);
    }

    async function fetchMeasurements() {
        //const response = await fetch("/api/measurements");
        const response = await fetch("/fireget");
        const json = await response.json();
        setData(json);
    }

    async function postMeasurements() {
    // POST request using fetch with error handling
    const data2transmitted = {info:"This single piece of information was givnen by the front end"}
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data2transmitted),
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('/fireadd2', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data2 = isJson && await response.json();
            if(response.ok){
                console.log("We got an ok!");
            }

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data2 && data2.message) || response.status;
                return Promise.reject(error);
                //console.log("error detected")
            }

            //this.setState({ postId: data.id })
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }


    //this method posts data which is taken through arguments
    async function postMeasurements2(vsx, vsy, vdx, vdy, vinfo) {
        // POST request using fetch with error handling
        const data2transmitted = {sx:vsx, sy:vsy, dx:vdx, dy:vdy, info:vinfo}
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data2transmitted),
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('/fireadd2', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data2 = isJson && await response.json();
                if(response.ok){
                    console.log("We got an ok!");
                }
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data2 && data2.message) || response.status;
                    return Promise.reject(error);
                    //console.log("error detected")
                }
    
                //this.setState({ postId: data.id })
            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
        }


    return (
        <section>
            <h1 class="h1TestAndLogout">Test and LogOut Area</h1>
            <p>
            You are in the page: {panel}<br />
            Your name is: {username}<br />
            The logged In user is: {(loggedUser != null)  ? loggedUser.username : ""}<br />
            The supervised user is: {(userInFocus != null) ? userSupervised.username : ""}<br />
            The user in focus is: {(userInFocus != null) ? userInFocus.username : ""}<br />
            {loggedIn ? "You are logged in": "You are NOT logged in"}<br />
            {isAdmin ? "You are an Admin": "You are NOT an Admin."}<br />
            {isSubmitted ? "User is in the system" : "user is NOT in the system"}
            </p>
            <pre>
                {data && JSON.stringify(data, null, 2)}
            </pre>
            <button onClick={fetchMeasurements}><span>Fetch Data</span></button>
            <button onClick={postMeasurements}><span>Send Data</span></button>
            <button onClick={forceLogin}><span>Forced log in</span></button>
            <button onClick={logout}><span>Logout</span></button>
            <button onClick={forceMakeAdmin}><span>Be Admin instantly</span></button>
            <button onClick={forceRevokeAdmin}><span>Revoke Admin Privileges forcefully</span></button>
            <button onClick={goToIndex}><span>Go to Index</span></button>
            <button onClick={goToLogin}><span>Go to Log In</span></button>
            <button onClick={goToRegistration}><span>Go to Registration</span></button>
            <button onClick={goToAdminPanel}><span>Go to Admin Panel</span></button>
            <br />
            <hr />
            <h1 class="theactualpage">THE ACTUAL PAGE</h1>
            <hr />
            <p>
            <span id="hellousernamespan">Hello {username}</span>
            {isAdmin ? ", You are an Admin!": "!"}<br />
            {loggedUser.username!=userSupervised.username? "You are supervising " + userSupervised.username:""}<br />
            </p>
            <button onClick={goToIndex}><span>Home</span></button>
            <button onClick={goToLogin} style={{display: loggedIn ? 'none' : 'inline'}}><span>Log In</span></button>
            <button onClick={goToRegistration} style={{display: loggedIn ? 'none' : 'inline'}}><span>Registration</span></button>
            <button onClick={goToAdminPanel} style={{display: isAdmin ? 'inline' : 'none'}}><span>Admin Panel</span></button>
            <button onClick={logout} style={{display: loggedIn ? 'inline' : 'none'}}><span>Logout</span></button>
            <button onClick={stopSupervision} style={{display: loggedUser.username!=userSupervised.username ? 'inline' : 'none'}}><span>Stop supervising </span>{userSupervised.username}</button>
            <br />
            <section style={{display: panel =="login" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Login Area</h1>
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </section>
   <section style={{display: panel =="registration" ? 'block' : 'none'}}>
            <div className="form">
            <h1>Registration Area</h1>
     <form onSubmit={handleSubmitReg}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="unameReg" required />
         {renderErrorMessage("unameReg")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="passReg" required />
         {renderErrorMessage("passReg")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </section>
   <section style={{display: isAdmin ? 'block' : 'none'}}>   
   <AdminPanel isAdmin = {isAdmin} 
            theUsers = {theUsers} 
            goToCreateUser = {goToCreateUser} 
            goToEditUser = {goToEditUser}
            goToDeleteUser = {goToDeleteUser} 
            userInFocus = {userInFocus} 
            userSupervised = {userSupervised}
            panel = {panel} 
            loggedIn = {loggedIn} 
            username = {username} 
            errorMessages = {errorMessages} 
            errorMessagesCre = {errorMessagesCre}  
            isSubmitted = {isSubmitted} 
            setUserInFocus = {setUserInFocus} 
            setUserSupervised = {setUserSupervised}
            setPanel = {setPanel} 
            setErrorMessages = {setErrorMessages} 
            setErrorMessagesCre = {setErrorMessagesCre}  
            setIsSubmitted = {setIsSubmitted}
            database = {database}
            loggedUser = {loggedUser} 
            errorMessagesEdi = {errorMessagesEdi}  
            setErrorMessagesEdi = {setErrorMessagesEdi}
            errorMessagesDel = {errorMessagesDel}  
            setErrorMessagesDel = {setErrorMessagesDel} 
            />
   </section>

        </section>
    )
}

export default Measurements;