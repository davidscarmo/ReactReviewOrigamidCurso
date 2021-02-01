import React from 'react'; 
import ProductUseContext from './ProductUseContext';
import {GlobalStorage} from './GlobalContext';
const UseContextExample = () => {
    return (
        <div>
            <GlobalStorage>
                <ProductUseContext />
            </GlobalStorage>
        </div>
    )
}

export default UseContextExample;
