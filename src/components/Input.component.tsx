import { InputProps } from "../interfaces/formInterface";
import "./Input.styles.css";

const InputComponent = <T extends Record<string, any>>({
  inputName,
  value,
  onDataChange,
}: InputProps<T>) => {
  return (
    <>
      <label htmlFor={inputName} className="input-label">
        Enter {inputName}
      </label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        onChange={onDataChange}
        value={value}
        className="input-field"
      />
    </>
  );
};

export default InputComponent;
