import React from 'react'
import PropTypes from 'prop-types'; 

const Button = (props) => {
    return (
        <button style={
            {
                margin: props.margin,
                width: `${props.width}px`, 
                height: `${props.width} / 3px`, 
            }}
        disabled={props.disabled}
        >
            
            {props.children}
        </button>
    )
}; 

Button.defaultProps = 
{
    width: 200,
    disabled: false,
}; 

Button.propTypes = 
{
    margin: PropTypes.string.isRequired, 
    width: PropTypes.number,
    disabled: PropTypes.bool,
}; 

export default Button; 


