import { useState, ChangeEvent, useEffect } from "react";
import FormComponent from "../components/Form.component";
import { InputField, SignInInterface } from "../interfaces/formInterface";
import "./SignView.styles.css";

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
    <div className="sign-container">
      <h1 className="sign-title">Sign In</h1>
      <FormComponent
        formData={formData}
        fields={signInFields}
        onDataChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignInView;
