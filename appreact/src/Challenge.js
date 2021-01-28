import React from 'react'
import Header from './Components/Challenge/Header';
import Home from './Components/Challenge/Home';
import Products from './Components/Challenge/Products';
const Challenge = () => {
    
        let Page; 
        const {pathname} = window.location; 
        
        if(pathname === '/products')
        {
            Page = Products; 
        } 
        else 
        {
            Page = Home; 
        }
        console.log(Page);
    return (
        <div>
            <Header />
            <Page />
        </div>
    )
}

export default Challenge
