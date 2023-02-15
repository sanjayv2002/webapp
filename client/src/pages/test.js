import { useEffect, useState } from "react";

const Test = () => {

    useEffect(() => {
        fetch('https://web-production-865b.up.railway.app/',{headers:{'Content-Type':'application/json'}}).then(
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
