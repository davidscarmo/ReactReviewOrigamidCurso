import React from "react";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  };
  return <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        <input type="password" value={password} placeholder="Senha" onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
  </form>;
};

export default TokenPost;
