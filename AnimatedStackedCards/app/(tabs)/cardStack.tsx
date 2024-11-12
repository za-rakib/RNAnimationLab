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

const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

const Card = ({ index, progress }: CardProps) => {
  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, index * 20]);
    const translateY = interpolate(progress.value, [0, 1], [0, index * -5]);
    const rotate = interpolate(progress.value, [0, 1], [-index * 8, index * 8]);

    return {
      transform: [{ translateX }, { translateY }, { rotate: `${rotate}deg` }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        rStyle,
        { backgroundColor: colors[index % colors.length], zIndex: -index },
      ]}
    />
  );
};

const CardStack = () => {
  const progress = useSharedValue(0);

  const handleTouchStart = () => {
    progress.value = withSpring(1, { damping: 15, stiffness: 100 });
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
      {[...Array(5)].map((_, index) => (
        <Card key={index} index={index} progress={progress} />
      ))}
    </View>
  );
};

export default CardStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a7ea4",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 180,
    aspectRatio: 3 / 4,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    position: "absolute",
  },
});
