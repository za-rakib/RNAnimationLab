import {
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  handlePress: () => void;
  buttonVal: SharedValue<number>;
};

const CustomButton = ({handlePress, buttonVal}: Props) => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    console.log({buttonVal: buttonVal.value});

    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ['#ffffff', '#000000', 'red'],
    );
    console.log({backgroundColor});
    return {backgroundColor: backgroundColor};
  });

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Animated.View style={[styles.arrowIcon, animatedColor]}>
        <Image source={require('../assets/images/ArrowIcon.png')} />
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  arrowIcon: {
    position: 'absolute',
    bottom: 100,
    zIndex: 1,
    width: 120,
    height: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
