import React from 'react';

const UseRef = () => {
    const [comments, setComments] = React.useState([]);
    const [input, setInput] = React.useState(''); 
    const inputElement = React.useRef(); 

    const handleComments = () =>
    {
        setComments([...comments, input]); 
        setInput('');
        inputElement.current.focus();
    }
    return (
        <div>
            <ul>
                {comments.map((comment, index) => 
                {
                    return <li kye={index}>{comment}</li>
                })}
            </ul>
            <input 
            type="text"
            ref={inputElement}
            value={input}
            onChange={({target})=> setInput(target.value)}/>
            
            <br/>
            <button onClick={handleComments}>Enviar</button>
        </div>
    )
}

export default UseRef
