import React from 'react'
import AboutImg from '../Assets/contato.jpg';
import Head from '../Components/Head';
import './About.css';
const About = () => {
    return (
        <div className="AboutArea">
            <Head title="Sobre" description="Página Sobre" />
           <div className="AboutImg">
                 <img src={AboutImg} alt="Imagem de uma máquina de escrever"/>     
           </div> 
           <div className="AboutDescription">
                   <h2>Entre em contato.</h2>
                   <p><span>__</span> david@david.com</p>
                   <p><span>__</span> 11111-1111</p>
                   <p><span>__</span> Rua Lá Longe, 111</p>
              
           </div>
        </div>
    );
};

export default About;
