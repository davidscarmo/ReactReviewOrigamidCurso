import React from 'react';
import { NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom';
// import ProductCustom from './ProductCustom';
// import ProductDescription from './ProductDescription';
// import ProductReview from './ProductReview';

const Product = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Produto: {params.id}</h1>      
            <nav>
                <NavLink to="">Descrição</NavLink> <br/>
                <NavLink to="review">Avaliação</NavLink> <br/>
                <NavLink to="custom">Customização</NavLink>
            </nav>
            {/* <Routes>
                <Route path="/" element={<ProductDescription />} />
                <Route path="review" element={<ProductReview />} />
                <Route path="custom" element={<ProductCustom />} />
            </Routes> */}

            <Outlet />
        </div>
    )
}

export default Product
