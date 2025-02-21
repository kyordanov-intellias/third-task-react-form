import InputComponent from "./Input.component";
import { FormInterface } from "../interfaces/formInterface"; // Import the interface
import "./Form.styles.css";

const FormComponent = <T extends Record<string, string>>({
  formData,
  fields,
  onDataChange,
  onSubmit,
}: FormInterface<T>) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="form-container"
    >
      {fields.map((field) => (
        <InputComponent
          key={field.name}
          inputName={field.name}
          value={(formData as Record<string, string>)[field.name] ?? ""}
          onDataChange={onDataChange}
        />
      ))}
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
