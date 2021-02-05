import React from 'react';

const InputWithHook = ({
    id,
    label, 
    value, 
    type, 
    onChange, 
    error, 
    onBlur, 
    placeholder,
}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}    
        /> 
        {error && <p>{error}</p>}
        </>
    )
}

export default InputWithHook; 
