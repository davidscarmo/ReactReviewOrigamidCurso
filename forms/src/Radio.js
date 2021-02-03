import React from 'react';


const Radio = () => {
    const [produto, setProduto] = React.useState(''); 
    const [cor, setCor] = React.useState('');

  
    return (
        <form>
            <h2>Cores</h2>
            <label>
                <input 
                type="radio" 
                onChange={({target}) => setCor(target.value)}
                checked={cor === 'azul'}
                value="azul"
                />
                Azul
            </label>
            <label>
                <input 
                type="radio" 
                onChange={({target}) => setCor(target.value)}
                checked={cor === 'vermelho'}
                value="vermelho"
                />
                Vermelho
            </label>
            {cor}
            <h2>Produtos</h2>
            <label>
                <input 
                type="radio" 
                onChange={({target}) => setProduto(target.value)}
                checked={produto === 'notebook'}
                value="notebook"
                />
                Notebook
            </label>
            <label>
                <input 
                type="radio" 
                onChange={({target}) => setProduto(target.value)}
                checked={produto === 'smartphone'}
                value="smartphone"
                />
                Smartphone
            </label>    
            {produto}
        </form>
    )
}

export default Radio
