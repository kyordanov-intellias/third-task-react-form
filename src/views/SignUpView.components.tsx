import FormComponent from "../components/Form.component";
import { SignUpInterface, SignUpViewProps } from "../interfaces/formInterface";
import "./SignView.styles.css";
import { useFormFields } from "../hooks/useFormFields";

const initialState: SignUpInterface = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpView = ({ register }: SignUpViewProps) => {
  const { fields, formData, handleChange } = useFormFields<SignUpInterface>(initialState);

  const handleSubmit = async () => {
    register(formData);
  };

  return (
    <div className="sign-container">
      <h1 className="sign-title">Sign Up</h1>
      <FormComponent
        formData={formData}
        fields={fields}
        onDataChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUpView;
