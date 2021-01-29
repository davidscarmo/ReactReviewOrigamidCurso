import React from 'react'

const Count = () =>  
{
    const [count, setCount] = React.useState(1); 
    const [items, setItems] = React.useState(['Item 1']); 

    const handleClick = () => 
    {
        setCount(count +1); 
        setItems([...items, `Item ${count +1}`]);
    }
    return (
        <div>
            <ul>
            {items.map((items) => (
                <li key={items}> {items}</li>
            ))}
            </ul>
            <button onClick={handleClick}>Add Item</button>
        </div>
    )
}

export default Count
