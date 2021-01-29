import React from 'react';

function App() {
  const [active, setActive] = React.useState(false); 
  const [dados, setDados] = React.useState({nome: 'David', idade: '30'});
  const handleActive = () =>
  {
    setActive(!active); 
    setDados({...dados, faculdade: 'Possui faculdade'});
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleActive}> {active ? 'Ativo' : 'Inativo'} </button>
    </div>
  );
}

export default App;
