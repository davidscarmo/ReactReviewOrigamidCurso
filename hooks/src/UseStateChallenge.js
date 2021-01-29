import React from 'react'
import Product from './Components/Products/Product';

const UseStateChallenge = () => {
    const [dados, setDados] = React.useState(null); 
    const API_URL = 'https://ranekapi.origamid.dev/json/api/produto/'; 
    
    const handleClick = async (event) => 
    {
        setDados('loading');
        const item = event.target.innerText.toLowerCase();
        const response = await fetch(`${API_URL}${item}`); 
        const responseJson = await response.json(); 
        setDados(responseJson);
    }
    return (
        <div>
            <button style={{margin: '.5rem'}} onClick={handleClick}>Notebook</button> 
            <button style={{margin: '.5rem'}} onClick={handleClick}>Smartphone</button> 
            <button style={{margin: '.5rem'}} onClick={handleClick}>Tablet</button> 
            {dados && <Product dados={dados} />}
        </div>
    )
}

export default UseStateChallenge
