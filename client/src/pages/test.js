const Test = async () => {
    const res = await fetch('http://localhost:5000/')
    const data = await res.json()

    return (
        (typeof data.members === 'undefined') ? (
            <p>Loading...</p>
        ) : (
            <p> {data.members}</p>
        )
    )
}

export default Test;