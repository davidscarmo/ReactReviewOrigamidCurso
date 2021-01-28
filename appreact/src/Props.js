import React from 'react'
import Form from './Components/Form/Form';
const Title = ({color, text, children}) => 
{
    return <h1 style={{color: color}}>{text}, {children}</h1>
}
function Props() {
    return (
        <div>
            <Title color="red" text="Meu título 1" > 
                This is a children!
                <p>This is also a children!</p>
            </Title>
            <Title color="blue" text="Meu título 2" />
            <Form />
        </div>
    );
};

export default Props;
