import InputComponent from "./Input.component";
import { FormInterface } from "../interfaces/formInterface"; // Import the interface

const FormComponent = <T extends Record<string, any>>({
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
    >
      {fields.map((field) => (
        <InputComponent
          key={field.name}
          inputName={field.name}
          value={(formData as Record<string, any>)[field.name] ?? ""}
          onDataChange={onDataChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;