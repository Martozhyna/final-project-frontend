const ModalOptionItem = ({option, index}) => {

    return (
            <option key={index} value={typeof option === "object" ? option.value : option}>
                {typeof option === "object" ? option.label : option}
            </option>
    )
}
export {ModalOptionItem}