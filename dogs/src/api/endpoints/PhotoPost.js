import React from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState(''); 
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(); 

    formData.append('img', img); 
    formData.append('nome', nome);
    formData.append('peso', peso); 
    formData.append('idade', idade);


    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: 'Bearer' + token, 
      },
      body: formData,
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
        <input type="text" value={token} placeholder="Token" onChange={(event) => setToken(event.target.value)}/>
      </label>
      <label>
        <input type="text" value={nome} placeholder="Nome" onChange={(event) => setNome(event.target.value)}/>
      </label>
      <label>
        <input type="text" value={peso} placeholder="Peso" onChange={(event) => setPeso(event.target.value)}/>
      </label>
      <label>
        <input type="text" value={idade} placeholder="Idade" onChange={(event) => setIdade(event.target.value)}/>
      </label>
      <label>
        <input type="file" onChange={(event) => setImg(event.target.files[0])}/>
      </label>
      <button>Postar</button>
  </form>;
};

export default PhotoPost;
