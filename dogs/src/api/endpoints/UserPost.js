import React from "react";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };
  return <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        <input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label>
        <input type="password" value={password} placeholder="Senha" onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <button>Enviar</button>
  </form>;
};

export default UserPost;
