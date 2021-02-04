import React from 'react';
import InputComponent from './Components/InputComponents';
import RadioComponent from './Components/RadioComponent';
import SelectComponent from './Components/SelectComponent';
import CheckboxComponent from './Components/CheckboxComponent';
const FormComponents = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [produto, setProduto] = React.useState('');
    const [cor, setCor] = React.useState('');
    const [frutas, setFrutas] = React.useState('');
    const [linguagens, setLinguagens] = React.useState([]);
    const [termos, setTermos] = React.useState([]); 
    return (
        <form>
            <h2>Termos Checkbox</h2>
                <CheckboxComponent options={['Li e aceito os termos!']} value={termos} setValue={setTermos}/>
            <h2>Checkbox</h2>
            <CheckboxComponent options={['JavaScript', 'PHP', 'Java', 'Kotlin']} value={linguagens} setValue={setLinguagens}/>
            <h2>Cores</h2>
            <RadioComponent options={['vermelho', 'azul', 'preto', 'rosa', 'branco']} value={cor} setValue={setCor}/>
            <h2>Frutas</h2>
            <RadioComponent options={['maçã', 'banana', 'morango', 'amora', 'melão']} value={frutas} setValue={setFrutas}/>
            <SelectComponent options={['tablet', 'smartphone', 'tv']} value={produto} setValue={setProduto} />
            <InputComponent id="nome" label="Nome: " setValue={setNome}/> 
            <InputComponent id="email" label="Email: " setValue={setEmail}/> 

        </form>
    )
}

export default FormComponents
