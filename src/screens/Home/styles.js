import React from "react";
import { StyleSheet, YellowBox } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    paddingLeft: 50,
    flexDirection: "row",
    paddingLeft: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderBottomColor: "#000000",
    height: 100,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 20,
  },
  textField: {
    alignContent: "center",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
