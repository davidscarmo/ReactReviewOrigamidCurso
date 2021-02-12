import React from 'react'
import {NavLink } from 'react-router-dom';
import Head from './Head';
import './Product.css';
const Product = ({products}) => {
    return ( 
        <div className="productArea">
        <Head title="Produtos" description="Página dos produtos" />
            {products.map((item) => 
            {
                return <NavLink className="productItem" to={`product/${item.id}`}>
                            <img src={item.fotos[0].src} alt={item.fotos[0].titulo}/>
                            <p>{item.nome}</p>
                       </NavLink>
            })};
        </div>
    );
}

export default Product
