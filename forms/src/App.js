import React from 'react';

function App() {
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [form, setForm] = React.useState({
    nome: '',
    email: '', 
  }); 
  const handleSubmit= (event) => 
  {
      event.preventDefault();
  }

  const handleChange = ({target}) => 
  {
      const { id, value} = target; 
      setForm({...form, [id] : value}); 
  }
  return (
    // <form onSubmit={handleSubmit}>
    //     <label htmlFor="nome">Nome</label>
    //     <input 
    //     id="nome"
    //     type="text"
    //     value={nome}
    //     onChange={(event)=>setNome(event.target.value)}/>
    //     <label htmlFor="email">Email</label>
    //     <input 
    //     id="email"
    //     type="email"
    //     value={email}
    //     onChange={(event)=>setEmail(event.target.value)}/>
    //     <button>Enviar</button>
    // </form>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
        id="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}/>
        {form.nome}
        <label htmlFor="email">Email</label>
        <input 
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}/>
        {form.email}
        <button>Enviar</button>
    </form>
  );
}

export default App;
