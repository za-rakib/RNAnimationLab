import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type CardProps = {
  index: number;
  progress: SharedValue<number>;
};

const gradients = [
  ["#fd5a5a", "#FFD93D"],
  ["#6BCB77", "#4D96FF"],
  ["#FF8E72", "#FF3CAC"],
  ["#8E54E9", "#4776E6"],
  ["#00C9FF", "#92FE9D"],
];

const Card = ({ index, progress }: CardProps) => {
  const rStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, index * -25]);
    const rotate = interpolate(progress.value, [0, 1], [-index * 8, 0]);

    return {
      transform: [{ translateY }, { rotate: `${rotate}deg` }],
    };
  });

  return (
    <Animated.View style={[styles.card, rStyle, { zIndex: -index }]}>
      <View
        style={[
          styles.cardOverlay,
          {
            backgroundColor: gradients[index % gradients.length][0],
          },
        ]}
      />
    </Animated.View>
  );
};

const index = () => {
  const progress = useSharedValue(0);

  const handleTouchStart = () => {
    progress.value = withSpring(1, { damping: 15, stiffness: 90 });
  };

  const handleTouchEnd = () => {
    progress.value = withSpring(0, { damping: 15, stiffness: 100 });
  };

  return (
    <View
      style={styles.container}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <StatusBar style="auto" />
      {[...Array(20)].map((_, index) => (
        <Card key={index} index={index} progress={progress} />
      ))}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a7ea4",
    alignItems: "center",
  },
  card: {
    height: 180,
    aspectRatio: 3 / 4,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 20,
    opacity: 0.9,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});
