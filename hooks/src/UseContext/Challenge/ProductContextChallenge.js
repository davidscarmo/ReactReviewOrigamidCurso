import React from 'react'; 
import {GlobalContextChallenge} from './GlobalContextChallenge'; 

const ProductContextChallenge = () => {
    const global = React.useContext(GlobalContextChallenge)
    if(global.dados === null) return null; 
    return (
        <div>
           Produto: {global.dados.map((items) => 
                {
                   return <li>{items.nome}</li>
                })}
                
               
           </div>
    )
}

export default ProductContextChallenge;

