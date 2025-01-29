import styled from './InputField.module.css';

function InputField({
    idInput,
    idDiv,
    label,
    type,
    min,
    register,
    validation,
    error,
    maxLength,
    autoFocus,
    placeholder,
    className,
    ...rest }) {
    return (
        <div className={styled.formGroup} id={idDiv}>
            <label htmlFor={idInput}>{label}</label>
            <input
                min={min}
                id={idInput}
                type={type}
                maxLength={maxLength}
                autoFocus={autoFocus}
                className={`${className} ${error ? styled.inputError : ''}`}
                placeholder={placeholder}
                {...(register ? register(idInput, validation) : {})}
                {...rest}
            />
            {error && <p className={styled.errorMessage}>{error.message}</p>}
        </div>
    );
}

export default InputField;
