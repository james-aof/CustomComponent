import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert("乐")}>
        <View style={styles.button}>
          <Text>Example</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#faf",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
