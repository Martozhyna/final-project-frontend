import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Modal from 'react-modal';

import css from "../../components/Headline/Headline.module.css";
import {OrderCreateForm, OrderStatistics, Users} from "../../components";


Modal.setAppElement('#root')

const AdminPage = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)


    return (
        <div>
            <div className={css.main}>
                <div>
                    <img className={css.img} src='https://i.pinimg.com/564x/76/88/f5/7688f5198092cf5347c6453ed145a3e1.jpg'
                         alt="logo"/>
                </div>
                <div className={css.btnContainer}>
                    <button className={css.btn} onClick={() => navigate("/orders")}>Back</button>
                    <button className={css.btn} onClick={() => navigate("/login")}>Exit</button>
                </div>
            </div>
            <OrderStatistics/>
            <button className={css.btn} onClick={() => setOpen(true)}>Create</button>
            <Modal isOpen={open}
                   className={`${css.modalCustom}`}
                   overlayClassName={css.overlay}
                   contentLabel="Example ModalConstruction">
                <div >
                    <OrderCreateForm setOpen={setOpen}/>


                </div>
                <div className={css.btns}>
                    <button className={css.btn2} onClick={() => setOpen(false)}>Close</button>
                </div>
            </Modal>
            <Users/>
        </div>




    )
}
export {AdminPage}