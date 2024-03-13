import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import css from './FilterForm.module.css';
import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
import {groupAction, orderActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const FilterForm = ({search, setSearch}) => {

    const {register, handleSubmit, setValue, reset} = useForm({mode:"all"})
    const { groups } = useSelector((state) => state.group);
    const {page} = useSelector(state => state.order)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupAction.getAll());
    }, [dispatch])

    useEffect(() => {
        dispatch(orderActions.getAll(search))
    }, [dispatch, search])

    const submit = (data) => {
        const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value !== "")
        );
        Object.entries(cleanedData).forEach(([key, value]) => {
            setSearch((currentQuery) => {
                const existingValues = currentQuery.getAll(key) || [];
                const newValues = Array.isArray(value) ? value : [value];

                currentQuery.set(key, newValues);
                currentQuery.set("page", page);
                return currentQuery;
            });
        })
    }



    return (
        <form onChange={handleSubmit(submit)}>
            <div className={css.first}>
                <div>
                    <ModalFormInput type={'text'} name={'name'} label={'name'} addLabel={false} register={register}/>
                    <ModalFormInput type={'text'} name={'surname'} label={'surname'} addLabel={false} register={register}/>
                </div>
                <div>
                    <ModalFormInput type={'text'} name={'email'} label={'email'} addLabel={false} register={register}/>
                    <ModalFormInput type={'text'} name={'phone'} label={'phone'} addLabel={false} register={register}/>
                </div>
                <div>
                        <ModalFormInput type={'text'} name={'age'} label={'age'} addLabel={false} register={register}/>
                        <ModalFormWithChoice name={'course'} label={'course'} addLabel={false} register={register}
                                             options={['FS', 'QACX', 'JCX', 'JSCX', 'FE', 'PCX']}
                                             defaultLabel={'course'}/>
                </div>
                <div>
                        <ModalFormWithChoice name={'course_format'} label={'course format'} addLabel={false}
                                             register={register} options={['static', 'online']}
                                             defaultLabel={'course format'}/>
                        <ModalFormWithChoice name={'course_type'} label={'course type'} addLabel={false}
                                             register={register}
                                             options={['pro', 'minimal', 'premium', 'incubator', 'vip']}
                                             defaultLabel={'course type'}/>
                </div>
                <div>
                        <ModalFormWithChoice name={'status'} label={'status'} addLabel={false} register={register}
                                             options={['In work', 'New', 'Agree', 'Disagree', 'Dubbing']}
                                             defaultLabel={'status'}/>
                        <ModalFormWithChoice name={'group'} label={'group'} addLabel={false} register={register}
                                             defaultLabel={'group'}
                                             options={groups && groups.map((group) => ({
                                                 value: group.title,
                                                 label: group.title
                                             }))}/>
                </div>
                <div>
                    <div className={css.contain}>
                        <input type="date" className={css.input}/>
                    </div>
                    <div className={css.contain}>
                        <input type="date" className={css.input}/>
                    </div>
                </div>
            </div>

        </form>
    )
}
export {FilterForm}