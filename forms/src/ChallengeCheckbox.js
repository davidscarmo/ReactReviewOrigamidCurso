import React from 'react';

const ChallengeCheckbox = () => {
    const colorsArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
    const [colors, setColors] = React.useState(['roxo', 'cinza']); 
    
    const handleChange = ({target}) => 
    {
        if(target.checked)
            setColors([...colors, target.value]);
        else
            setColors(colors.filter((cor) => cor !== target.value))
    }; 
    return (
        <div>
            {colorsArray.map((cor) => 
            {
                return <label key={cor}>
                            <input 
                                type="checkbox"
                                value={cor}
                                onChange={handleChange}
                                checked={colors.includes(cor)}
                            />
                            {cor.charAt(0).toUpperCase() + cor.slice(1)}
                            {console.log(colors)}
                       </label>
            })}
        </div>
    )
}

export default ChallengeCheckbox
