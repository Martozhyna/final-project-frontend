import {useForm} from "react-hook-form";

import css from './ModalForm.module.css'
import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {orderActions} from "../../redux";

const ModalForm = ({order}) => {
    const {id} = order

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
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
            status: order.manager === null ? "In work" : order.status,
            sum: order.sum,
            alreadyPaid: order.alreadyPaid,
            group: order.group ? order.group.title : "",
        }
    });

    const dispatch = useDispatch();
    const {orderForUpdate} = useSelector(state => state.order)

    useEffect(() => {
        if (orderForUpdate) {
            setValue('name', orderForUpdate.name, {shouldValidate: true})
            setValue('surname', orderForUpdate.surname, {shouldValidate: true})
            setValue('email', orderForUpdate.email, {shouldValidate: true})
            setValue('phone', orderForUpdate.phone, {shouldValidate: true})
            setValue('age', orderForUpdate.age, {shouldValidate: true})
            setValue('course', orderForUpdate.course, {shouldValidate: true})
            setValue('course_format', orderForUpdate.course_format, {shouldValidate: true})
            setValue('course_type', orderForUpdate.course_type, {shouldValidate: true})
            setValue('status', orderForUpdate.status, {shouldValidate: true})
            setValue('sum', orderForUpdate.sum, {shouldValidate: true})
            setValue('alreadyPaid', orderForUpdate.alreadyPaid, {shouldValidate: true})
            setValue('group', orderForUpdate.group, {shouldValidate: true})
        }
    }, [orderForUpdate, setValue]);

    console.log(order.group)

    const submit = (data) => {
        const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value !== ""))
        dispatch(orderActions.updateById({id, data: cleanedData}))
        console.log('knock-knock')

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={css.main}>
                <div>
                    <div>
                        <ModalFormWithChoice id={'group'} name={'group'} label={'group'} register={register}  defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormInput id={'name'} type={'text'} name={'name'} label={'name'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput id={'surname'} type={'text'} name={'surname'} label={'surname'}
                                        register={register}/>
                    </div>
                    <div>
                        <ModalFormInput id={'email'} type={'text'} name={'email'} label={'email'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput id={'phone'} type={'text'} name={'phone'} label={'phone'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput id={'age'} type={'text'} name={'age'} label={'age'} register={register}/>
                    </div>
                </div>
                <div>
                    <div>
                        <ModalFormWithChoice id={'status'} name={'status'} label={'status'} register={register}
                                             options={['In work', 'New', 'Agree', 'Disagree', 'Dubbing']} defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormInput id={'sum'} type={'sum'} name={'sum'} label={'sum'} register={register}/>
                    </div>
                    <div>
                        <ModalFormInput id={'alreadyPaid'} type={'text'} name={'alreadyPaid'} label={'already paid'}
                                        register={register}/>
                    </div>
                    <div>
                        <ModalFormWithChoice id={'course'} name={'course'} label={'course'} register={register}
                                             options={['FS', 'QACX', 'JCX', 'JSCX', 'FE', 'PCX']} defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormWithChoice id={'courseFormat'} name={'courseFormat'} label={'course format'}
                                             register={register} options={['static', 'online']} defaultLabel={'make your choice'}/>
                    </div>
                    <div>
                        <ModalFormWithChoice id={'courseType'} name={'courseType'} label={'course type'}
                                             register={register}
                                             options={['pro', 'minimal', 'premium', 'incubator', 'vip']} defaultLabel={'make your choice'}/>

                    </div>
                </div>


            </div>
            <button className={css.btn}>Save</button>
        </form>
    )
}
export {ModalForm}