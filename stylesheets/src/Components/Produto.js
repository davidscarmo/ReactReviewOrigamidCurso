import React from 'react';

import styles from './Produto.module.css'; 

const Produto = () => {
    console.log(styles);
    return (
        <div>
            <h1 className={styles.title}> Pacoter - Aloha</h1>
            <p className={styles.price}> R$ 3.000,00</p>
            <button className={styles.buy}>Compre já!</button>
        </div>
    )
}

export default Produto
