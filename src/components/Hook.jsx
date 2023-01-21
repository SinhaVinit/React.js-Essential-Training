import "../components-css/Hook.css";
import { useState } from "react";

function Hook() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("#000000");
    const submit = (e) => {
        e.preventDefault();
        alert(`${text}, ${color}`);
        setText("");
        setColor("#000000");
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    type="text"
                    placeholder="Color Name.."
                    required={true}
                />
                <input 
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    type="color"
                />
                <button>
                    Show
                </button>
            </form>
        </div>
    );
}

export default Hook;