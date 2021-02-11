import React from 'react'
import {NavLink } from 'react-router-dom';
const Product = ({products}) => {
    return ( 
        <>
            {products.map((item) => 
            {
                return <NavLink to={`product/${item.id}`}>
                            <img src={item.fotos[0].src} alt={item.fotos[0].titulo}/>
                            <p>{item.nome}</p>
                       </NavLink>
            })};
        </>
    );
}

export default Product
