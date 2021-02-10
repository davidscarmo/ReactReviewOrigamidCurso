import React from 'react';

const Bootstrap = () => {
    return (
        <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
            <div className="card-header"> Notebook</div>
            <div className="card-body">
                <h5 className="card-title"> R$ 2500</h5>
                <p className="card-text">
                    Esse é um noteboook com 1TB, 16B de ram e placa de vídeo de 16GB.
                </p>
            </div>
            
        </div>
    )
}

export default Bootstrap;
