import React from "react";
import { SafeAreaView } from "react-native";
import ComponentScreen from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen2 from "./src/screens/Screen2";
import MainStackNavigator from "./src/navigation/mainStackNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  return <MainStackNavigator />;
};

export default App;
