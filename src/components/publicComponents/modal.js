import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <div>
            <Button color="#fff" className={props.className} onClick={toggle}
                    disabled={props.disabled}>{props.name}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalExample;
