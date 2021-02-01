import React from 'react'; 


const UseMemo = () => {
    const operacaoLenta = () =>
    {
        let c; 
        for (let i = 0; i < 100000000; i++) {
            c = i + i /10; 
        }

        return c; 
    } 
    const [count, setCount] = React.useState(0); 

    const t1 = performance.now(); 
    const value = React.useMemo(() => operacaoLenta(), []); 
    console.log(value); 
    console.log(performance.now() - t1); 
    return (
        <div>
            <button onClick={() => setCount(count +1)}>
                Add {count}
            </button>
        </div>
    )
}

export default UseMemo; 
