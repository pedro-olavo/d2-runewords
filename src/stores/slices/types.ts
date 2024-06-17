import { ImageSourcePropType } from 'react-native';

export interface IRunes {
  name: string;
  level: number;
  image: ImageSourcePropType;
  owned: boolean;
}

export interface IRunes {
  name: string;
  level: number;
  image: ImageSourcePropType;
  owned: boolean;
}

export interface IRunewords {
  title: string;
  level: number;
  runes: string[];
  bases: string[];
  description: string;
  additionalInfo?: string;
  version?: string;
  ladder?: boolean;
}
