import { useState } from "react";

export const useForm = (onSubmit) => {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    onSubmit(form);
  };

  return { form, handleChange, handleSubmit };
};
