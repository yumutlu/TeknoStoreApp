import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import Cards from "./src/components/Cards";
import datas from "./src/data.json";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = React.useState("");

  const filteredProduct = datas.filter((data) =>
    `${data.title}`.toLowerCase().includes(text.toLowerCase())
  );
  const handleChange = (e) => {
    setText(e);
  };

  //////////////////
  const renderCards = ({ item }) => <Cards card={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tekno Store</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
        horizontal={false}
        numColumns={2}
        data={filteredProduct}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#eceff1",
    width: "75%",
    backgroundColor: "#eceff1",
    padding: 10,
    margin: 10,
    marginBottom: 7,
    marginTop: 3,
    borderRadius: 10,
    color: "#000",
  },
});
