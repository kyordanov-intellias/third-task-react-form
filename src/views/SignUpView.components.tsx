import { useState, ChangeEvent, useEffect } from "react";
import FormComponent from "../components/Form.component";
import { InputField, SignUpInterface } from "../interfaces/formInterface";
import "./SignView.styles.css";
import useAuthHook from "../hooks/useAuthHook";

const SignUpView = () => {
  const [signUpFields, setSignUpFields] = useState<InputField[]>([]);
  const { register, user } = useAuthHook();

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

  const handleSubmit = async () => {
    register(formData);
    console.log(user);
  };

  return (
    <div className="sign-container">
      <h1 className="sign-title">Sign Up</h1>
      <FormComponent
        formData={formData}
        fields={signUpFields}
        onDataChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUpView;
