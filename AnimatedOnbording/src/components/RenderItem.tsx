import {View, Text, useWindowDimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import {OnboardingData} from '../data/data';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  const IMAGE_WIDTH = SCREEN_WIDTH; // 85% of screen width

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}>
      <Image
        style={[styles.image, {width: IMAGE_WIDTH}]}
        source={item.image}
        resizeMode="contain"
      />
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
    height: 500,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
