import React from 'react'; 

import {GlobalContextChallenge} from './GlobalContextChallenge'; 

const ClearDados = () => {

    const {clearDados} = React.useContext(GlobalContextChallenge); 
    return (
        <button onClick={() => clearDados()}>
            Limpar Dados
        </button>
    )
}

export default ClearDados;