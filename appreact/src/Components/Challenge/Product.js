import React from 'react'

function Product({nome, propriedades}) {
    return (
        <div  style={{border: '1px solid #000000', padding: '1.2rem .75rem 1rem .75rem', marginBottom: '1rem'}}>
                    <p>{nome}</p>
                    <ul>
                        {propriedades.map((propriedades) => 
                        {
                            return( 
                                <li>
                                    {propriedades}
                                </li>
                            )
                        })}
                    </ul>
                    </div>
    )
}

export default Product
