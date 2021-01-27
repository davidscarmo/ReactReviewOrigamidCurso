import React from 'react';

const Arrays = () => 
{
    const books = 
    [
        {name: 'A Game of Thrones', year: 1996}, 
        {name: 'A Clash of Kings', year: 1998},
        {name: 'A Storm of Swords', year:2000 }
    ]; 
    const movies = ['Batman: Begins', 'Superman', 'WonderWoman']; 
    return(
        <div>
        <ul>
            {movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>

        <ul>
            {books
            .filter(({year}) => year >= 1998)
            .map(({name, year}) => (<li>{name}, {year}</li>))}
        </ul>
        </div>
    )
}; 

export default Arrays;