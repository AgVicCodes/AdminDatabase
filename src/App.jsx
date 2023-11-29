import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from './components/navbar.jsx'
import Time from "./Time.jsx";
import Image1 from "./assets/images/profile.jpg"
import Image2 from "./assets/images/inventory.jpg"
import Image3 from "./assets/images/cashierSquare.jpg"

function TimeStamp() {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Create an interval to update the time every second.
    const intervalId = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000); // Update every 1 second (1000 milliseconds).

    // Clean up the interval when the component unmounts.
    return (
        <div>
            {/* <h1>Current Time:</h1> */}
            <p>{currentTime.toLocaleString()}</p>
        </div>
    );
}

function App() {

    return (
        <>
            <Navbar />

            <main>

                <h1>Welcome Admin!</h1>
                <Time />
                {/* <button onClick={() => currentDate()}>Click me</button> */}
                {/* <p>{currentDate()}</p> */}

                <div className="imagecontainer">
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" className="shawty" />
                </div>

            </main>

        </>
    )

}

export default App
