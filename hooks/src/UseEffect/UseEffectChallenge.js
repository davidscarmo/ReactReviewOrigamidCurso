import React from "react";
import ProductChallenge from "./ProductChallenge";
const UseEffectChallenge = () => {
  const [dados, setDados] = React.useState(null);
  const [preference, setPreference] = React.useState(null);

  const handleDados = () => {
    if (preference) {
        setDados('loading'); 
    fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${preference.toLowerCase()}`
      ).then((response) => response.json())
       .then((json) => setDados(json));
   
    } else {
      setDados(null);
    }

    console.log(dados);
  };

  const handlePreference = (event) => {
    setPreference(event.target.innerText);
  };

  React.useEffect(() => {
    if (localStorage.getItem("preference")) {
      setPreference(localStorage.getItem("preference"));
    }
  }, []);

  React.useEffect(() => {
    if (preference)
    {
        handleDados(); 
        localStorage.setItem("preference", preference);
    } 
  }, [preference]);

  return (
    <div>
      <p>Preferência: {preference}</p>
      <button style={{ margin: "1rem" }} onClick={handlePreference}>
        Notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={handlePreference}>
        Smartphone
      </button>
       {dados && <ProductChallenge dados={dados} />}
    </div>
  );
};

export default UseEffectChallenge;
