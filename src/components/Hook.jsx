import "../components-css/Hook.css";
import { useState, useEffect } from "react";

function GitHubUser({ name, created_on, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{created_on}</p>
      <img src={avatar} height={100} alt={name} />
    </div>
  );
}

function Hook() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/SinhaVinit`)
      .then((response) => response.json())
      //   .then((data) => setInfo(data))
      .then(setInfo)
      .then(() => setLoading(false))
      .catch(setError);
  }, []); // Remember to add [] at the end of useEffect so that API will be requested only once.
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!info) return null;
  return (
    <GitHubUser
      name={info.name}
      created_on={info.created_at}
      avatar={info.avatar_url}
    />
  );
}

export default Hook;
