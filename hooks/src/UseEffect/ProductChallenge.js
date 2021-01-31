import React from 'react'; 

const ProductChallenge = ({dados}) => {
 
    
    if(dados === 'loading')
    {
       return <p>Carregando...</p>
    }
    else
    {
        return (
            <div>
                <h1>{dados.nome}</h1>
                <p>{dados.preco}</p>
                <img src={dados.fotos[0].src} alt=""/>
            </div>);
    }
   
}

export default ProductChallenge
