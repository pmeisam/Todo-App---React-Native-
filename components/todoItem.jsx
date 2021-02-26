import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, deleteHandler }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => deleteHandler(item.key)}>
        <MaterialIcons name="delete" size={18} color="#333" />
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
  },
});
