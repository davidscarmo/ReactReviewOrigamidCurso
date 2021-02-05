import React from 'react';
import InputWithHook from './Components/InputWithHook';
import useForm from './Hooks/useForm';
const ValidateFormUsingHook = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm(); 
    const sobrenome = useForm(false);
  const handleSubmit = (event) => 
   {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()){
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }
    return (
        <form onSubmit={handleSubmit}>
            <InputWithHook label="Nome" id="nome" type="text" {...nome} />
            <InputWithHook label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
            <InputWithHook 
                label="CEP"
                id="cep"
                type="text"
                placeholder="00000-000"
                {...cep}
            />
            <InputWithHook 
                label="Email"
                id="email"
                type="text"
                placeholder="example@email.com"
                {...email}
            />
            <button>Enviar</button>
        </form>
    )
}

export default ValidateFormUsingHook
