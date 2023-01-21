import "../components-css/Hook.css";
import { useState, useEffect } from "react";

function Hook() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/SinhaVinit`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);
  // Remember to add [] at the end of useEffect so that API will be requested only once.
  if (info) {
    return <pre>{JSON.stringify(info, null, 2)}</pre>;
  }
  return <h1>Data</h1>;
}

export default Hook;
