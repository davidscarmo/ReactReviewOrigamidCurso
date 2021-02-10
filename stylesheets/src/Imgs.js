import React from 'react';
import photo from './assets/foto.jpg';
import DogSvg from './DogSVG';
import './SVGImport.css';

function Imgs() {
    const [eyes, setEyes] = React.useState(0);

    const handleClick = () => 
    {
        for(let i = 0; i < 6; i++)
        {
            setTimeout(() => 
            {
                setEyes(i);
            }, 30*i);
        }
    }
    return (
        <div>
            <div className="background"></div>
            <button onClick={handleClick}>Animar</button>
            <DogSvg color="#8844EE" eyes={eyes}/>
            <img src={photo} alt="Foto de um pug com gorro amarelo"/>
        </div>
    )
}

export default Imgs;
