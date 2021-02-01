import React from 'react';
import ProductContextChallenge from './ProductContextChallenge';
import {GlobalStorageChallenge} from './GlobalContextChallenge'; 
import ClearDados from './ClearDados';

const UseContextChallenge = () => {
    return (
        <GlobalStorageChallenge>
            <ProductContextChallenge />
            <ClearDados />
        </GlobalStorageChallenge>
    )
}

export default UseContextChallenge
