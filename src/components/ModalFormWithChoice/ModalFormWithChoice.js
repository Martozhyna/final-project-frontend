import css from './ModalFormWithChoice.module.css';
import {ModalOptionItem} from "../ModalOptionItem/ModalOptionItem";

const ModalFormWithChoice = ({ register, label, name, options, addLabel = true, defaultLabel, ...selectProps }) => {
    return (
        <div className={css.contain}>
            {addLabel ? <label >{label}</label> : null}

            <select className={css.input} name={name} {...register(name)} {...selectProps}>
                <option value={""}>{defaultLabel}</option>
                {options?.map((option, index) => (
                    <ModalOptionItem key={index} option={option} index={index}/>
                    )

                )}
            </select>
        </div>
    )
}
export {ModalFormWithChoice}