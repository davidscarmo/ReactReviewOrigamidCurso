import React from 'react'
import Button from './Button'
import Input from './Input'

function Form() {
    const arr = ['Item1', 'Item2']; 
    return (
        <form>
            <p>
            <Input label="Nome" id="nome" required/>
            </p>
            <p>
          
            <Input label="Password" id="password" type="password"/>
            </p>
            <Button items={arr}/>
        </form>
    );
};

export default Form;
