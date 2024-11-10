import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}></View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c8cce0",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 180,
    aspectRatio: 3 / 4,
    backgroundColor: "red",
  },
});
