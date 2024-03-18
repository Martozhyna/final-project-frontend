import css from './ModalFormInput.module.css';

const ModalFormInput = ({ register, label, id, name, addLabel = true, placeholder, ...inputProps }) => {


    return (
        <div className={css.container}>
            {addLabel ? <label >{label}</label> : null}

            <input
                placeholder={placeholder || label}
                {...register(name)}
                {...inputProps}
                className={css.input}
            />

        </div>
    )
}
export {ModalFormInput}