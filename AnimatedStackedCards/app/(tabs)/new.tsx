import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import index from "./index";
import Animated, { useSharedValue } from "react-native-reanimated";

const New = () => {
  const progress = useSharedValue(0);
  console.log({ progress: progress.value });
  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        console.log("touched");
        progress.value = 1;
      }}
      onTouchEnd={() => {
        console.log("touched end");
        progress.value = 0;
      }}
    >
      <StatusBar style="auto" />
      {new Array(4).fill(null).map((_, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.card,
              {
                zIndex: -index,
                transform: [
                  {
                    translateX: 0, // index * 20,
                  },
                  {
                    translateY: 0, //index * -5
                  },
                  {
                    rotate: `${-index * 10}deg`, // `${index * 10}deg`,
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a7ea4",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 200,
    backgroundColor: "white",
    aspectRatio: 3 / 4,
    borderRadius: 25,
    shadowColor: "#cccccc",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#366376",
    position: "absolute",
  },
});
export default New;
