import FormComponent from "../components/Form.component";
import { SignInDataInterface, SignInViewProps } from "../interfaces/formInterface";
import "./SignView.styles.css";
import { useFormFields } from "../hooks/useFormFields";

const initialState: SignInDataInterface = {
  username: "",
  password: "",
};

const SignInView = ({ login }: SignInViewProps) => {
  const { fields, formData, handleChange } = useFormFields<SignInDataInterface>(initialState);

  const handleSubmit = () => {
    login({ 
      username: formData.username,
      email: formData.username
    });
  };

  return (
    <div className="sign-container">
      <h1 className="sign-title">Sign In</h1>
      <FormComponent
        formData={formData}
        fields={fields}
        onDataChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignInView;
