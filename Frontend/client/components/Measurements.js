import React, { useState } from "react";

function Measurements() {
    const [data, setData] = useState();

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
            <h1>Measurements</h1>
            <pre>
                {data && JSON.stringify(data, null, 2)}
            </pre>
            <button onClick={fetchMeasurements}>Fetch Data</button>
            <button onClick={postMeasurements}>Send Data</button>
        </section>
    )
}

export default Measurements;