import "../components-css/Hook.css";
import { useState, useEffect} from "react";

function Hook() {
    const [emotion, setEmotion] = useState("Happy");
    useEffect(function name() {
        console.log(`It's ${emotion} right now.`)
    });
    // useEffect(function name() {
    //     console.log(`It's ${emotion} right now.`)
    // }, []);
    return (
        <div className="Hook-div">
            <h1 className="Hook1">Current emotion is {emotion}.</h1>
            <button className="btn1" onClick={() => setEmotion("Sad")}>Sad</button>
            <button className="btn1" onClick={() => setEmotion("Excited")}>Excited</button>
        </div>
    );
}

export default Hook;