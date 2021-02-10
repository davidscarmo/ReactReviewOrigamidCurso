import React from 'react';

import './Animated.css'; 
import AnimatedProduct from './AnimatedProduct';

const Animated = () => {
    const [active, setActive] = React.useState(false); 
    
    return (
        <div>
            <button onClick={()=>setActive(!active)} style={{margin: '2rem'}}> Mostrar  </button>
         {active && <AnimatedProduct/>}
        </div> 
    )
}

export default Animated; 