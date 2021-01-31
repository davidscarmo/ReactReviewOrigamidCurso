import React from 'react'

const AfterBuildComponent = () => {
    const [count, setCount] = React.useState(0); 
    const [dados, setDados] = React.useState(null); 
    
    React.useEffect(()=> 
    {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => response.json())
        .then((json)=> setDados(json)); 
    }, [])
    return (
        <div>
            {dados && (
                <div>
                    <h1>{dados.nome}</h1>
                    <p>R$ {dados.preco * count}</p> 
                </div>
            )}

            <button onClick={() => setCount(count +1)}>Preço de {count} notebooks</button>
        </div>
    )
}

export default AfterBuildComponent
