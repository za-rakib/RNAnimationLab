import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const index = () => {
  const progress = useSharedValue(0);

  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        progress.value = withSpring(1, { mass: 2 });
      }}
      onTouchEnd={() => {
        progress.value = withSpring(0);
      }}
    >
      <StatusBar style="auto" />

      {new Array(4).fill(null).map((_, index) => {
        const rStyle = useAnimatedStyle(() => {
          const translateX = interpolate(
            progress.value,
            [0, 1],
            [0, index * 20]
          );
          const translateY = interpolate(
            progress.value,
            [0, 1],
            [0, index * -5]
          );
          const rotate = interpolate(
            progress.value,
            [0, 1],
            [-index * 8, index * 8]
          );
          return {
            transform: [
              {
                translateX: translateX, //progress.value * index * 20, //index * 20,
              },
              {
                translateY: translateY, // progress.value * index * -5, // index * -5,
              },
              {
                rotate: `${rotate}deg`, //`${ index * 8}deg`
              },
            ],
          };
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.card,
              rStyle,
              {
                zIndex: -index,
                // transform: [
                //   {
                //     rotate: `${index * - 10}deg`,
                //   },
                // ],
              },
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 180,
    aspectRatio: 3 / 4,
    backgroundColor: "white",
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    position: "absolute",
  },
});
