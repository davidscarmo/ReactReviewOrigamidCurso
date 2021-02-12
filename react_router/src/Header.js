import React from 'react'; 
import {NavLink, useLocation} from 'react-router-dom';

const Header = () => {

    const location = useLocation(); 

    React.useEffect(() =>
      {
        const search = new URLSearchParams(location.search);
        console.log(search.get('tipo'));
        console.log('Toda vez que a rota mudar');
      }, [location]
    );
    return (
        <nav>
          <NavLink to="/" activeStyle={{color: 'tomato'}} end> 
          Home
          </NavLink>{' '} 
           |
           {' '}  
          <NavLink to="about" activeStyle={{color: 'tomato'}}> 
          Sobre
          </NavLink>  
           |
           {' '}  
          <NavLink to="login" activeStyle={{color: 'totamo'}}> 
          Login
          </NavLink>  
           
        </nav>
    )
}

export default Header;
