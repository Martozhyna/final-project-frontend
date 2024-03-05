import css from './ModalFormInput.module.css';

const ModalFormInput = ({ register, label, id, name, addLabel = true, ...inputProps }) => {
    return (
        <div className={css.container}>
            {addLabel && <label htmlFor={id}>{label}</label>}

            <input
                id={id}
                placeholder={label}
                {...register(name)}
                {...inputProps}
                className={css.input}
            />

        </div>
    )
}
export {ModalFormInput}