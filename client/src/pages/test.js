import { useEffect, useState } from "react";

const Test = () => {

    useEffect(() => {
        fetch('http://127.0.0.1:5000/').then(
            response => response.json()
        ).then( result => console.log(result))
    }, [])

    return (
        // (typeof data.members === 'undefined') ? (
        //     <p>Loading...</p>
        // ) : (
        //     <p> {data.members}</p>
        // )
        <></>
    )
}

export default Test;