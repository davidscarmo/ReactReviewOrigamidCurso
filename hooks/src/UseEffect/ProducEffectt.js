import React from 'react';

const ProductEffect = () => {
    React.useEffect(() => 
    {
        function handleScroll(event)
        {
            console.log(event); 
        }
        window.addEventListener('scroll', handleScroll); 
 
        return () => 
        {
            window.removeEventListener('scroll', handleScroll); 
        }
    }, []); 

    return (
        <div style={{height: '200vh'}}>
            
        </div>
    )
}

export default ProductEffect;

