import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  handlePress: () => void;
};

const CustomButton = ({handlePress}: Props) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.arrowIcon}>
        <Image source={require('../assets/images/ArrowIcon.png')} />
      </View>
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
