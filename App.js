import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CustomButton } from "./button.js";
export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton />
      <CustomButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#faf",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
