import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './ModalForm.module.css'
import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
import {groupAction, orderActions} from "../../redux";

const ModalForm = ({order, setIsOpen}) => {

    const [open, setOpen] = useState(1)
    const { groups } = useSelector((state) => state.group);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupAction.getAll());
    }, [dispatch])


    const {register, handleSubmit, setValue} = useForm({
        mode: "onSubmit", defaultValues: {
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

    const {orderForUpdate} = useSelector(state => state.order)

    const create = () => {
        setOpen(null)

    }

    const show = () => {
        if (open) {
            setOpen(1)
        }


    }

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


    const submit = async (data) => {
        if (open){
            const cleanedData = Object.fromEntries(
                Object.entries(data).filter(([key, value]) => value !== "")
            );
            dispatch(orderActions.updateById({ id: order.id, data: cleanedData }));
            setIsOpen(false)
        }
        else {
            await dispatch(groupAction.createGroup(data.group));
            setOpen(1)

        }

    }



    return (
        <form onSubmit={handleSubmit(submit)}>

            <div className={css.main}>

                <div>
                    <div>
                        {
                            open === null ?
                                (<>
                                    {/*<label htmlFor="group">Group</label>*/}
                                    <ModalFormInput type={'text'} id="group" name={'group'} label={'group'} register={register} />
                                </>) :
                                (<ModalFormWithChoice name={'group'} label={'group'} register={register}
                                                     defaultLabel={'make your choice'}
                                                     options={groups && groups.map((group) => ({
                                                         value: group.title,
                                                         label: group.title
                                                     }))}/>)
                        }
                        <div className={css.main}>
                            <button type={"button"}  className={css.littleBtn} onClick={create}>Add</button>
                            <button  className={css.littleBtn} onClick={show}>{open ? 'Show' : 'Select'}</button>
                        </div>

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
                <button className={css.btn} >Save</button>
            </div>

        </form>
    )
}
export {ModalForm}