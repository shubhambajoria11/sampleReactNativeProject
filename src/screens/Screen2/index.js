import React from "react";
import { View, Text } from "react-native";
import api from "../../helpers/api";

const Screen2 = ({ route }) => {
  // const [result, setResult] = useState(null);
  const openURL = "https://api.publicapis.org/entries";

  const callAPI = () => {
    api(openURL, {})
      .then((e) => {
        console.log("response", e);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const screen2Id = route.params.text;
  callAPI();
  return (
    <View>
      <Text>Welcome to the new Screen - {screen2Id}</Text>
    </View>
  );
};

export default Screen2;
