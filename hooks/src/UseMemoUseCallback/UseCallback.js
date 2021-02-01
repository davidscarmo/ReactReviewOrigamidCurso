import React from 'react'; 

const set1 = new Set(); 
const set2 = new Set();
const Produto = () => 
{
    const func1 = () => 
    {
        console.log('Teste')
    }; 

    
    const func2 = React.useCallback(() => 
    {
        console.log('Teste')
    }, []); 
    set1.add(func1);
    set2.add(func2);

    console.log('set1: ', set1);
    console.log('set2: ', set2);
    return(
        <div>
        <button onClick={func1}> Teste 1</button>
        <button onClick={func2}> Teste 2</button>
        </div>
    )
}
const UseCallback = () => {
    const [count, setCount] = React.useState(0); 
    return (
        <div>
            <button onClick={()=> setCount(count +1)}>
                Refresh {count}
            </button>    
            <Produto />
        </div>
    )
}

export default UseCallback
