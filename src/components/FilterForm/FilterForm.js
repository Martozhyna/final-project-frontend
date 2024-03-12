import {ModalFormInput} from "../ModalFormInput/ModalFormInput";
import {useForm} from "react-hook-form";
import css from './FilterForm.module.css';
import {ModalFormWithChoice} from "../ModalFormWithChoice/ModalFormWithChoice";
import {useSelector} from "react-redux";

const FilterForm = () => {

    const {register, handleSubmit, setValue, reset} = useForm({mode:"all"})
    const { groups } = useSelector((state) => state.group);
    return (
        <form>
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
                        <ModalFormWithChoice name={'courseFormat'} label={'course format'} addLabel={false}
                                             register={register} options={['static', 'online']}
                                             defaultLabel={'course format'}/>
                        <ModalFormWithChoice name={'courseType'} label={'course type'} addLabel={false}
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