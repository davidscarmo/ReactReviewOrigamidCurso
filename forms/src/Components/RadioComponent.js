import React from 'react'; 

const RadioComponent = ({options, value, setValue, ...props}) => {
    return (
        <>
        {options.map((option) =>
            {
                return <label key={option} style={{textTransform: 'capitalize'}}>
                            <input 
                                type="radio"
                                onChange={({target}) => setValue(target.value)}
                                checked={value === option}
                                value={option}
                                {...props}
                            />
                            {option}
                        </label>
            })}
       </>
    )
}

export default RadioComponent;
