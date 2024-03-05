import css from './ModalFormWithChoice.module.css';

const ModalFormWithChoice = ({ register, label, id, name, options, addLabel = true, defaultLabel, ...selectProps }) => {
    return (
        <div className={css.contain}>
            {addLabel && <label htmlFor={id}>{label}</label>}

            <select className={css.input} id={id} name={name} {...register(name)} {...selectProps}>
                <option value={""}>{defaultLabel}</option>
                {options?.map((option, index) =>
                    typeof option === "object" ? (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ) : (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    )
                )}
            </select>
        </div>
    )
}
export {ModalFormWithChoice}