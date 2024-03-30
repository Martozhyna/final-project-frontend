    import {useDispatch, useSelector} from "react-redux";
    import {useEffect} from "react";

    import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
    import css from './FilterForm.module.css';
    import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
    import {groupAction, orderActions} from "../../redux";
    import {useDebounce} from "../../hooks";

    const FilterForm = ({search, setSearch, register, handleSubmit, setValue}) => {

        const { groups } = useSelector((state) => state.group);
        const {page} = useSelector(state => state.order)
        const debouncedSearchTerm = useDebounce(search, 500);
        const dispatch = useDispatch();

        useEffect(() => {
            const params = new URLSearchParams(search);
            setValue("name", params.get("name") || "");
            setValue("surname", params.get("surname") || "");
            setValue("email", params.get("email") || "");
            setValue("phone", params.get("phone") || "");
            setValue("age", params.get("age") || "");
            setValue("course", params.get("course") || "");
            setValue("course_format", params.get("course_format") || "");
            setValue("course_type", params.get("course_type") || "");
            setValue("status", params.get("status") || "");
            setValue("group", params.get("group") || "");
            setValue("start_date", params.get("start_date") || "");
            setValue("end_date", params.get("end_date") || "");
        }, [search, setValue]);


        useEffect(() => {
            dispatch(groupAction.getAll());
        }, [dispatch])

        useEffect(() => {
            if (debouncedSearchTerm.size > 1){
                dispatch(orderActions.getAll(debouncedSearchTerm))
            }

        }, [dispatch,  debouncedSearchTerm])

        const submit = async (data) => {
            const params = new URLSearchParams();

            Object.entries(data).forEach(([key, value]) => {
                if (value !== "") {
                    params.append(key, value);
                }
            });
            const ordering = search.get("ordering") || "-id";
            params.set("page", page);
            params.set("ordering", ordering);
            if (search.has('manager')){
                const manager = search.get('manager')
                params.set('manager', manager)
            }
            setSearch(params);
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
                        <ModalFormInput type={'date'} name={'start_date'} label={'start_date'} addLabel={false} register={register} placeholder={'start data'}/>
                        <ModalFormInput type={'date'} name={'end_date'} label={'end_date'} addLabel={false} register={register} placeholder={'end data'}/>
                    </div>

                </div>

            </form>
        )
    }
    export {FilterForm}