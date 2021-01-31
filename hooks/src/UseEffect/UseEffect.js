import React from 'react'

const UseEffect = () => {
    const [count, setCount] = React.useState(0); 
  
    React.useEffect(() => 
    {
        console.log('Im blu');
    }); 

    const title = 'Título '; 

    React.useEffect(() => 
    {
        document.title = title + count;  
    }, [count])
    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    )
}

export default UseEffect
