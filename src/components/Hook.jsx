import "../components-css/Hook.css";
import { useState, useEffect} from "react";

function Hook() {
    const [emotion, setEmotion] = useState("Happy");
    const [greating, setGreating] = useState("Hi");
    useEffect(function name() {
        console.log(`It's ${emotion} right now.`)
    }, [emotion]);
    useEffect(function name() {
        console.log(`It's ${greating} right now.`)
    }, [greating]);

    // Calles only once

    // useEffect(function name() {
    //     console.log(`It's ${emotion} right now.`)
    // }, []);

    // Calles when only emotion changes

    // useEffect(function name() {
    //     console.log(`It's ${emotion} right now.`)
    // }, [emotion]);
    return (
        <div className="Hook-div">
            <h1 className="Hook1">Current emotion is {emotion}.</h1>
            <button className="btn1" onClick={() => setEmotion("Sad")}>Sad</button>
            <button className="btn1" onClick={() => setEmotion("Excited")}>Excited</button>
            <h1>{greating} everyone</h1>
            <button className="btn1" onClick={() => setGreating("Hello")}>Hello</button>
        </div>
    );
}

export default Hook;