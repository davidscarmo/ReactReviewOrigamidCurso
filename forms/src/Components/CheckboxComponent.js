import React from 'react'; 

const CheckboxComponent = ({options, value, setValue}) => 
{
    const handleChange = ({target}) => 
    {
        if(target.checked)
            setValue([...value, target.value]); 
        else
            setValue(value.filter((option) => option !== target.value));
    }  
    return (
        <>
        {options.map(option => 
        {
         return <label key={option} style={{textTransform: 'capitalize'}}>
                    <input 
                        type="checkbox"
                        value={option}
                        onChange={handleChange}
                        checked={value.includes(option)}
                    />   
                    {option} 
                </label>  
        })
        } 
        </>
    )
}

export default CheckboxComponent
