import React from 'react'; 
import {GlobalContext} from './GlobalContext'; 

const ProductUseContext = () => {
    const global = React.useContext(GlobalContext); 
    return (
        <div>
            <div>
                Produto: {global.count} <br/>
                <button onClick={() => global.addOne()}>Add 1 </button>
                <button onClick={() => global.addTwo()}>Add 2 </button>
            </div>
        </div>
    )
}

export default ProductUseContext;
