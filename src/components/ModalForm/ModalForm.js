import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './ModalForm.module.css'
import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
import {orderActions} from "../../redux";

const ModalForm = ({order}) => {

    const [title, setTitle] = useState(null);
    const {register, handleSubmit, setValue} = useForm({
        mode: "onChange", defaultValues: {
            id: order.id,
            name: order.name,
            surname: order.surname,
            email: order.email,
            phone: order.phone,
            age: order.age,
            course: order.course,
            course_format: order.course_format,
            course_type: order.course_type,
            status: order.status,
            sum: order.sum,
            alreadyPaid: order.alreadyPaid,
            group: order.group ? order.group.title : "",
        }
    });
    const dispatch = useDispatch();
    const {orderForUpdate} = useSelector(state => state.order)

    useEffect(() => {
        if (orderForUpdate) {
            setValue('name', orderForUpdate.name)
            setValue('surname', orderForUpdate.surname)
            setValue('email', orderForUpdate.email)
            setValue('phone', orderForUpdate.phone)
            setValue('age', orderForUpdate.age)
            setValue('course', orderForUpdate.course)
            setValue('course_format', orderForUpdate.course_format)
            setValue('course_type', orderForUpdate.course_type)
            setValue('status', orderForUpdate.status)
            setValue('sum', orderForUpdate.sum)
            setValue('alreadyPaid', orderForUpdate.alreadyPaid)
            setValue('group', orderForUpdate.group)
        }
    }, [orderForUpdate, setValue]);


    const submit = (data) => {
        setTitle(null)
        const newData = {};
        for (const [key, value] of Object.entries(data)) {
            if (value !== "") {
                newData[key] = value;
            }
        }
        dispatch(orderActions.updateById({id: order.id, data: newData}))
        setTitle(1)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {
                title === null ? <div className={css.initialState}>Please, make your choice</div> :
                    <div className={css.nextState}>Congratulations, changes saved!</div>
            }
            <div className={css.main}>

                <div>
                    <div>
                        <ModalFormWithChoice name={'group'} label={'group'} register={register}
                                             defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'name'} label={'name'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'surname'} label={'surname'}
                                        register={register}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'email'} label={'email'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'phone'} label={'phone'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'age'} label={'age'} register={register}/>
                    </div>
                </div>
                <div>
                    <div>
                        <ModalFormWithChoice name={'status'} label={'status'} register={register}
                                             options={['In work', 'New', 'Agree', 'Disagree', 'Dubbing']}
                                             defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormInput type={'sum'} name={'sum'} label={'sum'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput type={'text'} name={'alreadyPaid'} label={'already paid'}
                                        register={register}/>
                    </div>
                    <div>
                        <ModalFormWithChoice name={'course'} label={'course'} register={register}
                                             options={['FS', 'QACX', 'JCX', 'JSCX', 'FE', 'PCX']}
                                             defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormWithChoice name={'courseFormat'} label={'course format'}
                                             register={register} options={['static', 'online']}
                                             defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormWithChoice name={'courseType'} label={'course type'}
                                             register={register}
                                             options={['pro', 'minimal', 'premium', 'incubator', 'vip']}
                                             defaultLabel={'make your choice'}/>
                    </div>
                </div>

            </div>
            <div className={css.buttonContainer}>
                <button className={css.btn}>Save</button>
            </div>

        </form>
    )
}
export {ModalForm}