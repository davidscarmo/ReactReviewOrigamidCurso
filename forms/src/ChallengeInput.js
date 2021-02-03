import React from 'react';

const formFields = [
    {
        id: 'nome', 
        label: 'Nome: ', 
        type: 'text' 
    },
    {
        id: 'email', 
        label: 'Email: ', 
        type: 'email' 
    },
    {
        id: 'senha', 
        label: 'Senha: ', 
        type: 'password' 
    },
    {
        id: 'cep', 
        label: 'CEP: ', 
        type: 'text' 
    },
    {
        id: 'rua', 
        label: 'Rua: ', 
        type: 'text' 
    },
    {
        id: 'numero', 
        label: 'Número: ', 
        type: 'text' 
    },
    {
        id: 'bairro', 
        label: 'Bairro: ', 
        type: 'text' 
    },
    {
        id: 'cidade', 
        label: 'Cidade: ', 
        type: 'text' 
    },
    {
        id: 'estado', 
        label: 'Estado', 
        type: 'text' 
    }
]; 

const objFields = formFields.reduce((acc, field) => 
{
    return {
        ...acc, 
        [field.id]: '', 
    }
}, {}); 

console.log(objFields);
const ChallengeInput = () => {

    const [form, setForm] = React.useState(objFields); 

    const [status, setStatus] = React.useState(null); 
    const [error, setError] = React.useState(null); 
    const handleChange = ({target}) => 
    {
        const {id, value} = target; 

        setForm({...form,[id]: value}); 
    }
    const handleSubmit = async (event) => 
    {
        event.preventDefault();
        try
        {
            const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', 
            {
                method: 'POST', 
                headers: 
                {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(form)
            }); 
            setStatus(response.status);
            
            if(response.status === 200)
            {
                setForm({
                    nome: '', 
                    email: '', 
                    senha: '', 
                    cep: '',
                    rua: '', 
                    numero: '', 
                    bairro: '', 
                    cidade: '', 
                    estado: '' 
                }); 
            }
           
        }
        catch(error)
        {
            setError(error.message);
        }
        finally
        {
            window.setTimeout(() => setStatus(null), 2000); 
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>

            {formFields.map(({id, label, type}) => 
            (
                <div key={id}>
                <label  htmlFor={id}>{label}</label>
                <input type={type} id={id}name={id} value={form[id]} onChange={handleChange}/>
                </div>
            ))}
            {status === 200 && <p>Cadastro realizado com sucesso! </p>}
            {error && <p>Erro ao tentar realizar o Cadastro! </p>}
            {(status === 403 || status === 404 || status === 500) && <p>Erro ao tentar realizar o Cadastro! </p>}
            <button>Enviar</button>
        </form>
    )
}

export default ChallengeInput
