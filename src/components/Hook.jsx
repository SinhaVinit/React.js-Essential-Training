import "../components-css/Hook.css";
import { useState } from "react";

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ];
}

function Hook() {
    const [text, setText] = useInput("");
    const [color, setColor] = useInput("#000000");
    const submit = (e) => {
        e.preventDefault();
        alert(`${text.value}, ${color.value}`);
        setText("");
        setColor("#000000");
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    {...text}
                    type="text"
                    placeholder="Color Name.."
                    required={true}
                />
                <input 
                    {...color}
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