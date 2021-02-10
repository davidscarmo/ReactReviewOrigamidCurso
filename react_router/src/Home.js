import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = () => {
    return (
        <div>
            <Head title="Home" description="Essa é a página home!"/>
            <h1>Home</h1>
            <p>Essa é a home.</p>

            <Link to="product/Smartphone"> Smartphone </Link> <br/>
            <Link to="product/Notebook">Notebook </Link>
        </div>
    )
}

export default Home;
