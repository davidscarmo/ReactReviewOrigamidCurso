import React from 'react'; 

export const GlobalContextChallenge = React.createContext(); 

export const GlobalStorageChallenge = ({children}) => 
{
    const [dados, setDados] = React.useState(null); 

    React.useEffect(() => 
    {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json())
        .then((json) => setDados(json)); 
    }, []);
   
    const clearDados = ()=> 
    {
        setDados(null); 
    }
    return(
        <GlobalContextChallenge.Provider value={{dados, clearDados}}> 
            {children}
        </GlobalContextChallenge.Provider>
    )
 }