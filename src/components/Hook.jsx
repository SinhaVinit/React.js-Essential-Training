import "../components-css/Hook.css";
// import { useState} from "react";
import { useReducer } from "react";

function Hook() {
    // const [checked, setChecked] = useState(false);
    const [checked, setChecked] = useReducer((checked) => !checked, false)
    return (
        <div>
            <input 
                type="checkbox"
                value={checked}
                onChange={setChecked}
            />
            <label>
                {checked ? "Checked" : "Not Checked"}
            </label>
        </div>
    );
}

export default Hook;