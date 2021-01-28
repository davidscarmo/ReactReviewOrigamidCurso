import React from 'react'; 

const Events = () => 
{
    const handleScroll = (event) => 
    {
        console.log(event);
    }
    window.addEventListener('scroll', handleScroll); 
    return (
        <div style={{height: '200vh'}}>
            <button onClick={(event) => alert(event.target.innerText)}>
                Compre já!
            </button>
        </div>
    ); 
}; 

export default Events;