import useFormHandler from "./useFormHandler";

import { router } from "expo-router";
import { SignupFormData } from "../interface/SignupInterface";

const useSignup = () => {
  const { loading, formData, setFormData, setLoading, handleChange } =
    useFormHandler<SignupFormData>({
      username: "",
      email: "",
      password: "",
    });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log(formData);

      setFormData({
        username: "",
        email: "",
        password: "",
      });
      router.push("/auth/doctorDetails");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    handleSubmit,
    handleChange,
  };
};

export default useSignup;
