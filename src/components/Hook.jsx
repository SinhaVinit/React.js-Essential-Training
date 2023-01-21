import "../components-css/Hook.css";
import { useRef } from "react";

function Hook() {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`);
        // After aleart to clear the input use this
        txtTitle.current.value = "";
        hexColor.current.value = "";
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    ref={txtTitle}
                    type="text"
                    placeholder="Color Name.."
                    required={true}
                />
                <input 
                    ref={hexColor}
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