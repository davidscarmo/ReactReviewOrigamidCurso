import React from 'react'; 

const SetTimeOut = () => {
    const [cart, setCart] = React.useState(0);
    const [notification, setNotification] = React.useState(null); 
    const timeouRef = React.useRef(); 
    
    const handleAddToCart = () => 
    {
        setCart(cart + 1); 
        setNotification('Item Adicionado ao carrinho!'); 

        clearTimeout(timeouRef.current);

        timeouRef.current = 
        setTimeout(() => 
        {
            setNotification(null)
        }, 2000);
    }
    return (
        <div>
            <p>{notification}</p>
            <button onClick={handleAddToCart}> Adicionar Produto</button>
            <p>Produtos adicionados: {cart}</p>
        </div>
        
    )
}

export default SetTimeOut
