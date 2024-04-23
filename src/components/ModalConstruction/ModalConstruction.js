import Modal from 'react-modal';
import {useState} from "react";

import css from './ModalConstruction.module.css'
import {ModalForm} from "../ModalForm/ModalForm";


Modal.setAppElement('#root')

const ModalConstruction = ({order, user}) => {

    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className={css.btn} onClick={openModal} disabled={order.manager && user.surname !== order.manager}>Edit</button>

            <Modal isOpen={modalIsOpen}
                   onAfterOpen={afterOpenModal}
                   onRequestClose={closeModal}
                   className={`${css.modalCustom}`}
                   overlayClassName={css.overlay}
                   contentLabel="Example ModalConstruction">
                <div >
                    <ModalForm order={order} setIsOpen={setIsOpen}/>

                </div>
                <div className={css.btns}>
                    <button className={css.btn2} onClick={closeModal}>Close</button>
                </div>
            </Modal>

        </div>
    )
}
export {ModalConstruction}