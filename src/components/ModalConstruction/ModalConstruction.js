import Modal from 'react-modal';
import {useEffect, useState} from "react";

import css from './ModalConstruction.module.css'
import {ModalForm} from "../ModalForm/ModalForm";
import {useSelector} from "react-redux";

Modal.setAppElement('#root')

const ModalConstruction = ({order}) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#2d7957';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            <button className={css.btn} onClick={openModal}>Edit</button>
            <Modal isOpen={modalIsOpen}
                   onAfterOpen={afterOpenModal}
                   onRequestClose={closeModal}
                   className={`${css.modalCustom}`}
                   overlayClassName={css.overlay}
                   contentLabel="Example ModalConstruction">
                <div >
                   <ModalForm order={order}/>
                </div>
                <div className={css.btns}>
                    <button className={css.btn} onClick={closeModal}>Close</button>
                    {/*<button className={css.btn} >Submit</button>*/}
                </div>



            </Modal>
        </div>
    )
}
export {ModalConstruction}