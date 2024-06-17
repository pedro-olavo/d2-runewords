import { ImageSourcePropType } from 'react-native';

export interface Runes {
  name: string;
  level: number;
  image: ImageSourcePropType;
  owned: boolean;
}
