import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import data from './src/data/data';
import RenderItem from './src/components/RenderItem';
import CustomButton from './src/components/CustomButton';
import {useSharedValue, withTiming} from 'react-native-reanimated';

const App = () => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonVal = useSharedValue(0);
  const handlePress = () => {
    if (currentIndex === data.length - 1) {
      console.log('END');
      return;
    }
    setCurrentIndex(prev => prev + 1);
    buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
  };
  return (
    <View style={styles.container}>
      <View>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      <CustomButton handlePress={handlePress} buttonVal={buttonVal} />
      <Text style={styles.bottomText}>All rights served by R@kib</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bottomText: {
    position: 'absolute',
    bottom: 22,
    color: 'black',
  },
});
