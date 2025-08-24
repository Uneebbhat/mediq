import useFormHandler from "./useFormHandler";

import { router } from "expo-router";
import { LoginFormData } from "../interface/LoginInterface";

const useLogin = () => {
  const { loading, formData, setLoading, setFormData, handleChange } =
    useFormHandler<LoginFormData>({
      email: "",
      password: "",
    });

  const handleSubmit = () => {
    setLoading(true);
    try {
      console.log(formData);

      setFormData({
        email: "",
        password: "",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
