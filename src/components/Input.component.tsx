import { InputProps } from "../interfaces/formInterface";

const InputComponent = <T extends Record<string, any>>({
  inputName,
  value,
  onDataChange,
}: InputProps<T>) => {
  return (
    <>
      <label htmlFor={inputName}>Enter {inputName}</label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        onChange={onDataChange}
        value={value}
      />
    </>
  );
};

export default InputComponent;
