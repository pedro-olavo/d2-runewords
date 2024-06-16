import React from 'react';
import { Screens } from '@routes/types';
import { getScreenIcon } from '@routes/screens';

import * as S from './TabBarIcon.styles'

interface ITabBarIconProps {
  name: Screens;
  color: string;
  size: number
  focused: boolean
}



export const TabBarIcon: React.FC<ITabBarIconProps> = ({ name, color, size, focused }) => {
  const Icon = getScreenIcon(name)

  return (
    <S.IconWrapper focused={focused}>
      <Icon color={color} size={size} style={{ margin: 'auto' }} />
    </S.IconWrapper>
  );
}


