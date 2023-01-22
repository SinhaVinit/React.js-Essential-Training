import "../components-css/Hook.css";
import { useState, useEffect } from "react";

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function Hook() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setInfo) // .then((data) => setInfo(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []); // Remember to add [] at the end of useEffect so that API will be requested only once.
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!info) return null;
  console.log(info, "DATA!!");
  return (
    <div>
      {info.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default Hook;
