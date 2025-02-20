import { ChangeEvent } from "react";

// Form in general
export interface FormInterface<T extends Record<string, unknown>> {
  formData: T;
  fields: InputField[];
  onDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

// Input
export interface InputProps<T extends Record<string, unknown>> {
  inputName: string;
  value: T[keyof T];
  onDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputField {
  name: string;
}

// Extended Form Interfaces
export interface SignInInterface {
  username: string;
  password: string;
}

export interface SignUpInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateInterface {
  name: string;
  imageURL: string;
  quantity: string | number;
  price: string | number;
}

export interface ContactInterface {
  nameOfClient: string;
  message: string;
  age: number | string;
}
