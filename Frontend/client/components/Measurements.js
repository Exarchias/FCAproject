import React, { useState } from "react";

function Measurements() {
    const [data, setData] = useState();
    const [loggedIn, setLoggedIn] = useState(false); //for access control
    const [isAdmin, setIsAdmin] = useState(false); //for access control
    const [errorMessages, setErrorMessages] = useState({}); //for log in mechanism
    const [isSubmitted, setIsSubmitted] = useState(false); //for log in mechanism. 
    //we might want to turn isSumbitted false during the logout.
    //doing so it will help us with the registration.

    //=========== LOGIN MECHANISM AREA CODE STARTS HERE ================================

    //Lavdim put your code here.

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );


    //=========== LOGIN MECHANISM AREA CODE ENDS HERE ================================


    //=========== TEST AND LOGOUT AREA CODE ================================
    //Forces a login. for testing and development purposes.
    async function forceLogin() {
        setLoggedIn(true);
    }

    //Logout mechanism. Not only for testing. We will keep it.
    //also it revokes admin privileges for obvious reasons.
    async function logout() {
        setIsAdmin(false);
        setLoggedIn(false);
    
    }

    //Grants admin privileges. for testing and development purposes.
    //also it logs the user in, fpr obvious reasons
    async function forceMakeAdmin() {
        setLoggedIn(true);
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
            <h1>Test and LogOut Area</h1>
            <p>
            {loggedIn ? "You are logged in": "You are NOT logged in"}<br />
            {isAdmin ? "You are an Admin": "You are NOT an Admin."}
            </p>
            <pre>
                {data && JSON.stringify(data, null, 2)}
            </pre>
            <button onClick={fetchMeasurements}>Fetch Data</button>
            <button onClick={postMeasurements}>Send Data</button>
            <button onClick={forceLogin}>Forced log in</button>
            <button onClick={logout}>Logout</button>
            <button onClick={forceMakeAdmin}>Be Admin instantly</button>
            <button onClick={forceRevokeAdmin}>Revoke Admin Privileges forcefully</button>
            <br />
            <hr />
            <div className="form">
            <h1>Login Area</h1>
     <form>
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
    )
}

export default Measurements;