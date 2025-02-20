import { ChangeEvent } from "react";

// Form in general
export interface FormInterface<T extends Record<string, string>> {
  formData: T;
  fields: InputField[];
  onDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

// Input
export interface InputProps<T extends Record<string, string>> {
  inputName: string;
  value: T[keyof T];
  onDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputField {
  name: string;
}

export interface SignInDataInterface {
  username: string;
  password: string;
  [key: string]: string; 
}

export interface SignInViewProps {
  login: (userData: { username: string; email: string }) => void;
}

export interface SignUpInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string; 
}

export interface SignUpViewProps {
  register: (userDate: { username: string, email: string, password: string, confirmPassword: string }) => void;
}


export interface User {
  username: string;
  email: string;
}
