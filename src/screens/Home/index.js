import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

const ComponentScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [goal, setGoal] = useState([]);

  function onHelloPress() {
    setGoal((e) => [...e, value]);
  }
  function consoleLog() {
    console.log("goal", goal);
  }

  return (
    <View>
      <View style={styles.outerContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the text"
          onChangeText={(enteredText) => {
            setValue(enteredText);
          }}
          autoCapitalize={false}
          autoCorrect={false}
        />
        <TouchableOpacity onPress={onHelloPress}>
          <Text style={styles.textField}>Hello</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>

      <FlatList
        data={goal}
        key={Math.random()}
        renderItem={(itemData) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Screen2", { text: itemData.item })
              }
            >
              <View>
                <Text style={styles.goalItem}>{itemData.item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ComponentScreen;
