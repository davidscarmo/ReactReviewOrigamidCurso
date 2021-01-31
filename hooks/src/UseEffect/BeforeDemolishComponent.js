import React from 'react'
import ProductEffect from './ProducEffectt';

const BeforeDemolishComponent = () => {
    const [active, setActive] = React.useState(false); 

    return (
        <div>
            {active && <ProductEffect/>}
            <button onClick={() => setActive(!active)}>Ativar</button>
        </div>
    )
}

export default BeforeDemolishComponent
