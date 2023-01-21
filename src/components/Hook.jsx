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
  useEffect(() => {
    fetch(`https://api.github.com/users/SinhaVinit`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);
  // Remember to add [] at the end of useEffect so that API will be requested only once.
  if (info) {
    return (
      <GitHubUser
        name={info.name}
        created_on={info.created_at}
        avatar={info.avatar_url}
      />
    );
  }
  return <h1>Data</h1>;
}

export default Hook;
