import React from 'react'

const Product = ({dados}) => 
 {
    if(dados === 'loading')
    {
        return(
            <p>Carregando...</p>
        )
    };
    if(dados)
    {
        console.log(dados);
        return (
            <div>
                <h1>{dados.nome}</h1>
                <p>Preço: R$ {dados.preco}</p>
                <img src={dados.fotos[0].src} alt={`Foto de um ${dados.nome}`}/>
                <p>{dados.descricao}</p>
            </div>
        )
    }
    return null;
}

export default Product ;
