export function Input({ value, onChangeFunc, placeholder }) {
    return <input type="text" onChange={(e) => onChangeFunc(e)} placeholder={placeholder} />;
}
