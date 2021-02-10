import React from 'react'; 
import Card from 'react-bootstrap/Card'
const ReactBootstrap = () => {
    return (
        <Card bg="dark" text="white" className="m-5"  style={{maxWidth: '18rem'}} >
            <Card.Header>
                Notebook
            </Card.Header>
            <Card.Body> 
                <Card.Title>
                    R$ 5000
                </Card.Title>
                <Card.Text>
                    Esse é um noteboook com 1TB, 16B de ram e placa de vídeo de 16GB.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReactBootstrap
