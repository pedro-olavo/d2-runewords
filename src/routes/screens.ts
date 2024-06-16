import { Home, LucideIcon, RailSymbol } from 'lucide-react-native';
import { Screens } from './types';

export interface IScreenInfo {
  name: string;
  icon: LucideIcon;
}

const screensInfo: { [key in Screens]: IScreenInfo } = {
  [Screens.ListRunes]: {
    name: 'List of Runes',
    icon: Home,
  },
  [Screens.OwnedRunes]: {
    name: 'Owned Runes',
    icon: RailSymbol,
  },
};

export const getScreenIcon = (screen: Screens): LucideIcon => {
  return screensInfo[screen].icon;
};

export const getScreenName = (screen: Screens): string => {
  return screensInfo[screen].name;
};
