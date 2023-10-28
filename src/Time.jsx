import React, { useState } from 'react';

export default function Time() {
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



// In this example:

// We import the necessary components from React, including useState.

// We define a state variable currentTime using the useState hook and initialize it with the current date and time (a Date object), just like in the previous example.

// We use setInterval to update the currentTime state variable at specified intervals (in this case, every second). The function passed to setInterval updates the state with the current time.

// To avoid memory leaks, we don't need to return a cleanup function in this approach, as the interval is created in the component body and will automatically be cleared when the component is unmounted.

// This code will continuously display the current time, and the time will be updated automatically without using useEffect. However, keep in mind that this approach can have some performance implications in certain situations, especially when dealing with complex components or frequent updates, as it doesn't provide the same level of control over component lifecycle events as useEffect.


// UsingEffect for God knows what

// function currentDate() {

//     const [time, setTime] = useState(new Date());

//     const updateTime = () => {
//         setTime(new Date());
//     }

//     useEffect(() => {
//         const intervalId = setInterval(updateTime, 1000);

//         return () => {
//             clearInterval(intervalId);
//         }
//     }, [])

//     return time.toLocaleString();

//     // const [d, setD] = useState(Date());
//     // const day = d.getDate();
//     // const month = d.getMonth();
//     // const year = d.getFullYear();
//     // const sec = d.getSeconds();
//     // const min = d.getMinutes();
//     // const hour = d.getHours();

//     // setTime(`${hour}:${min}:${sec} ${day}-${month}-${year}`);
//     // setTime(Date());

//     // alert(time.toLocaleDateString);

// }




