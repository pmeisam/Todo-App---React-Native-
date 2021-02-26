import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Todo</Text>
      <TextInput
        style={styles.input}
        placehoder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    marginTop: 35,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
