import React from 'react'
import Product from './Product';
import Title from './Title';

const Products = () => {
    const products = 
    [
        {nome: 'Notebook', propriedades: ['16gb Ram', '512GB']}, 
        {nome: 'Smartphone', propriedades: ['2gb Ram', '128GB']}
    ]; 
    return (
        <div>
            <Title title="Produtos"/>
            {products.map((items) => 
            {
                return(
                    <Product {...items} />
                )
            }) }
        </div>
    );
};

export default Products;
