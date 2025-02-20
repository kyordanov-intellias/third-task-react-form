import { useState, ChangeEvent, useEffect } from "react";
import { InputField } from "../interfaces/formInterface";

export function useFormFields<T extends Record<string, string>>(initialState: T | null) {
  const [fields, setFields] = useState<InputField[]>([]);
  const [formData, setFormData] = useState<T>(initialState || {} as T);

  useEffect(() => {
    setFields(Object.keys(formData).map((key) => ({ name: key })));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getInputType = (name: string): string => {
    const fieldName = name.toLowerCase();
    if (fieldName.includes('password')) return 'password';
    if (fieldName.includes('email')) return 'email';
    return 'text';
  };

  const getIcon = (name: string): string => {
    const fieldName = name.toLowerCase();
    if (fieldName.includes('email')) return '📧';
    if (fieldName.includes('password')) return '🔑';
    return '🔍';
  };

  return {
    fields,
    formData,
    handleChange,
    getInputType,
    getIcon
  };
};