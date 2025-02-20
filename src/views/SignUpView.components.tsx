import { useState, ChangeEvent, useEffect } from "react";
import FormComponent from "../components/Form.component";
import { InputField, SignUpInterface } from "../interfaces/formInterface";

const SignUpView = () => {
  const [signUpFields, setSignUpFields] = useState<InputField[]>([]);
  const [formData, setFormData] = useState<SignUpInterface>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fieldsArray: InputField[] = Object.keys(formData).map((key) => ({
      name: key,
    }));
    setSignUpFields(fieldsArray);
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Signing Up", formData);
  };

  return (
    <FormComponent
      formData={formData}
      fields={signUpFields}
      onDataChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpView;
