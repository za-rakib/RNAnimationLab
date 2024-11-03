import { ImageProps } from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../assets/images/image1.png'),
    text: 'Stay Connected Always',
    textColor: '#2D3748',
    backgroundColor: '#E9D8FD', // Deep Purple to match the number display
  },
  {
    id: 2,
    image: require('../assets/images/image2.png'),
    text: 'Code Your Future',
    textColor: '#2D3748',
    backgroundColor: '#EDF2F7', // Light gray to complement the coding theme
  },
  {
    id: 3,
    image: require('../assets/images/image3.png'),
    text: 'Build Strong Partnerships',
    textColor: '#1A202C',
    backgroundColor: '#FED7D7', // Soft pink to match the accent colors
  },
];

export default data;