import React from 'react';

import * as S from './SearchBar.styles';
import { TextInputProps } from 'react-native';

interface ISearchBarProps extends TextInputProps {
}

export const SearchBar: React.FC<ISearchBarProps> = ({ ...props }) => {
  return (
    <S.SearchBarContainer>
      <S.IconContainer>
        <S.SearchIcon />
      </S.IconContainer>
      <S.SearchInput placeholder='Search Runewords' {...props} />
    </S.SearchBarContainer>
  );
}
