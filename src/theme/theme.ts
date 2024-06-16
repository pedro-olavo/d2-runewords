import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { fontSizes, iconSizes, lineHeights } from './fonts';
import { borderWidths, radii, space } from './scales';
import { Theme } from './types';

const theme: Theme = {
  colors,
  fontSizes,
  lineHeights,
  iconSizes,
  space,
  radii,
  borderWidths
};

export default theme;
