import React from 'react';

const SelectComponent = ({options, value, setValue, ...props}) => {
    return (
        <select value={value} onChange={({target}) => setValue(target.value)} style={{textTransform: 'capitalize'}}>
            <option value="" disabled>Selecione</option>
            {options.map((option) => 
            {
                return <option 
                key={option}
                value={option}
                checked={value.includes(option)}
                {...props}
                >
                {option}
                </option>
            })}
        </select>
    )
}

export default SelectComponent
