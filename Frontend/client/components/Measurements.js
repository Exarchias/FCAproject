import React, { useState } from "react";

function Measurements() {
    const [data, setData] = useState();

    async function fetchMeasurements() {
        //const response = await fetch("/api/measurements");
        const response = await fetch("/fireget");
        const json = await response.json();
        setData(json);
    }

    return (
        <section>
            <h1>Measurements</h1>
            <pre>
                {data && JSON.stringify(data, null, 2)}
            </pre>
            <button onClick={fetchMeasurements}>Fetch Data</button>
        </section>
    )
}

export default Measurements;