import { useState } from "react";

const useFormHandler = <T,>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    loading,
    formData,
    setLoading,
    setFormData,
    handleChange,
  };
};

export default useFormHandler;
