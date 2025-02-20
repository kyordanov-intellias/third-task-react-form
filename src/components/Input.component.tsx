import { InputProps } from "../interfaces/formInterface";
import { useFormFields } from "../hooks/useFormFields";
import "./Input.styles.css";

const InputComponent = <T extends Record<string, string>>({
  inputName,
  value,
  onDataChange,
}: InputProps<T>) => {
  const { getInputType, getIcon } = useFormFields<T>(null);

  return (
    <>
      <label htmlFor={inputName} className="input-label">
        {getIcon(inputName)} {inputName}
      </label>
      <input
        type={getInputType(inputName)}
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
