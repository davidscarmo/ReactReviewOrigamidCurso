import React from 'react'; 

const Checkbox = () => {

    // const [termos, setTermos] = React.useState(false); it's for only one checkbox input
   /* { {termos && <p>Termos Aceitos!</p>}
    <label>
        <input 
        type="checkbox"
        value="termos"
        checked={termos}
        onChange={({target}) => setTermos(target.checked)}
        />  
        Li e concordo com os termos.   
    </label>        it's for only one checkbox input } */

    const [cores, setCores] = React.useState(['vermelho']); 
    
    const handleChange = ({target}) => 
    {
        if(target.checked)
            setCores([...cores, target.value]);
        else
            setCores(cores.filter((cor) => cor !== target.value));   

    }; 


    return (
    
        <div>
            <label>
                <input 
                type="checkbox"
                value="azul"
                onChange={handleChange}
                checked={cores.includes('azul')}
                />  
                Azul
            </label>
            <label>
                <input 
                type="checkbox"
                value="vermelho"
                onChange={handleChange}
                checked={cores.includes('vermelho')}
                />  
                Vermelho
            </label>
            
        </div>
    )
}

export default Checkbox
