import React from 'react'; 

export const GlobalContext = React.createContext(); 

export const GlobalStorage = ({children}) => 
{
    const [count, setCount] = React.useState(0); 

    const addOne = () => 
    {
        setCount((count) => count + 1); 
    }

    const addTwo = () => 
    {
        setCount((count) => count + 2); 
    }

    return(
        <GlobalContext.Provider value={{count, addOne, addTwo}}>
            {children}
        </GlobalContext.Provider>
    );
}