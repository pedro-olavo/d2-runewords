import { ImageSourcePropType } from 'react-native';

export interface IRunes {
  name: string;
  level: number;
  image: ImageSourcePropType;
  owned: boolean;
}
