import React, { useEffect, useState } from "react";

function API () {
    const [dog, setDog] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            console.log(data);
            setDog(data); // now all our data is inside the dog variable
        }
        catch (error){
            console.log("Error fetching data:", error);
        };
    };
    // useEffect(() => {fetchData();}, []); // when we add the new function down below we can comment this one out
    const generateDog = () => {
        fetchData();
    }

    const [count, setCount] = useState(0);
    const [countNo, setCountNo] = useState(0);
    return (
        <>
            <div>
                <h2>Image of a dog:</h2>
                <button onClick={generateDog}>New dog</button>
                <br />
                <img className="dog-img" src={dog.message} alt="dog" />
                <br />
                <p>Did you like this picture?</p>
                <button onClick={() => setCount((c) => c + 1)}>yes</button>
                <button onClick={() => setCountNo((c) => c + 1)}>no</button>
                <p>Yes: {count}</p>
                <p>No: {countNo}</p>
            </div>
        </>
    );
}
export default API;

