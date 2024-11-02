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
    text: 'Glide into Fresh Beginnings',
    textColor: '#4A4A4A', 
    backgroundColor: '#E0C7E0', // Light Lavender
  },
  {
    id: 2,
    image: require('../assets/images/image2.png'),
    text: 'Nurture Growth with Every Step',
    textColor: '#333333', // Dark Charcoal for readability
    backgroundColor: '#A8E4A1', // Pale Green
  },
  {
    id: 3,
    image: require('../assets/images/image3.png'),
    text: 'Find Your Balance and Flow',
    textColor: '#FFFFFF', // White text for contrast
    backgroundColor: '#F2A1B8', // Light Coral
  },
];

export default data;
