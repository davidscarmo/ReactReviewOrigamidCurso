import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';
const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => 
    {
        navigate('/about');
    };
    return (
        <div>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Página de login" /> 
            </Helmet>
           <p>Login</p> 
           <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default Login;
