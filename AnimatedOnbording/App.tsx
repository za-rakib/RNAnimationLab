import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import data from './src/data/data';
import RenderItem from './src/components/RenderItem';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePress = () => {
    if (currentIndex === data.length - 1) {
      console.log('END');
      return;
    }
    setCurrentIndex(prev => prev + 1);
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
      <CustomButton handlePress={handlePress} />
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
