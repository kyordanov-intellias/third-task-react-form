import { useState, ChangeEvent, useEffect } from "react";
import FormComponent from "../components/Form.component";
import { InputField, SignInInterface } from "../interfaces/formInterface";

const SignInView = () => {
  const [signInFields, setSignInFields] = useState<InputField[]>([]);
  const [formData, setFormData] = useState<SignInInterface>({
    username: "",
    password: "",
  });

  useEffect(() => {
    setSignInFields(Object.keys(formData).map((key) => ({ name: key })));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Signing In", formData);
  };

  return (
    <FormComponent
      formData={formData}
      fields={signInFields}
      onDataChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SignInView;
