import { useState } from "react";

export const useForm = (onSubmit) => {
  const [form, setForm] = useState();
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    onSubmit({ ...form, check });
  };

  const handleCheck = (e) => {
    setCheck(!check);
  };
  return { form, handleChange, handleSubmit, handleCheck };
};
