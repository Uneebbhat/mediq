import useFormHandler from "./useFormHandler";

import { router } from "expo-router";
import { DoctorDetailsFormData } from "../interface/DoctorDetailsInterface";

const useDoctorDetails = () => {
  const { loading, formData, setLoading, setFormData, handleChange } =
    useFormHandler<DoctorDetailsFormData>({
      clinicName: "",
      phoneNumber: "",
      docId: "",
    });

  const handleSubmit = () => {
    setLoading(true);
    try {
      console.log(formData);

      setFormData({
        clinicName: "",
        phoneNumber: "",
        docId: "",
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

export default useDoctorDetails;
