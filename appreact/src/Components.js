import React from 'react'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form/Form';
const Components = () => 
{
    const Test = () => 
    {
        const active = true; 
        if(active)
        {
            return <p>Teste</p>; 
        }
        else{
            return null; 
        }
        
    };
    return( 
        <>  
            <Test />
            <Header /> 
            <Form/>
            <Footer />
        </>
    ); 
}

export default Components; 