import Button from "@/components/button";
import Input from "@/components/input";

import { StyleSheet, Text, View } from "react-native";
import useDoctorDetails from "../hooks/useDoctorDetails";

const DoctorDetailsForm = () => {
  const { loading, formData, handleChange, handleSubmit } = useDoctorDetails();
  return (
    <View style={styles.loginFormContainer}>
      <View>
        <Text>Clinic Name</Text>
        <Input
          placeholder="Clinic Name"
          onChangeText={(text: string) => handleChange("clinicName", text)}
        />
      </View>

      <View>
        <Text>Phone Number</Text>
        <Input
          placeholder="+92XXXXXXXXXX"
          keyboardType="phone-pad"
          onChangeText={(text: string) => handleChange("phoneNumber", text)}
        />
      </View>

      <View>
        <Text>Doc ID</Text>
        <Input
          placeholder="malik-9000"
          onChangeText={(text: string) => handleChange("docId", text)}
        />
      </View>

      {/* Buttons */}
      <View>
        <Button
          title="Complete"
          disabled={
            loading ||
            !formData.clinicName ||
            !formData.phoneNumber ||
            !formData.docId
          }
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    gap: 12,
    marginTop: 32,
  },
});

export default DoctorDetailsForm;
