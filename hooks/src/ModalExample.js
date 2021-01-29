import React from 'react'
import ButtonModal from './Components/ButtonModal';
import Modal from './Components/Modal';

const ModalExample = () => {
    const [modal, setModal] = React.useState(false); 

    return (
        <div>
            <div>{modal ? 'Modal Ativo' : 'Modal Inativo'}</div>
            <Modal modal={modal} setModal={setModal}/>
            <ButtonModal setModal={setModal}/>      
        </div>
    )
}

export default ModalExample
