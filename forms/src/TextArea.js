import React from 'react'; 

const TextArea = () => {
    const [textarea, setTextarea] = React.useState(''); 
     
    return (
        <form>
            <textarea value={textarea} id="textarea" rows="5" onChange={({target})=> setTextarea(target.value)} />
            {textarea}
        </form>
    )
}

export default TextArea
