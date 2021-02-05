import React from 'react'; 
import InputValidateForm from './Components/InputValidateForm';

const ValidateForm = () => {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null); 

    const validateCep = (value) => 
    {
        if(value.length === 0)
        {
            setError('Preencha um valor!'); 
            return false;
        }
        else if(!/^\d{5}-?\d{3}$/.test(value))
        {
            setError('Preencha um CEP válido!'); 
            return false;
        }
        else
        {
            setError(null); 
            return true; 
        }
    }

    const handleBlur = ({target}) =>
    {
        validateCep(target.value);
    }

    const handleChange = ({target})=> 
    {
        if(error) validateCep(target.value); 
        setCep(target.value); 
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault(); 
        if(validateCep(cep))
            console.log('Enviou!');
        else
            console.log('Não enviar!');
    } 
    return (
        <form onSubmit={handleSubmit}>
            <InputValidateForm 
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="00000-000"
            />
        {error && <p>{error}</p>}
        <button> Enviar</button>
        </form>
)
}
export default ValidateForm;
