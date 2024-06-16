import React from 'react';
import { Text, Touchable, TouchableOpacity } from 'react-native';
import * as S from './OwnedRunes.styles'
import { useUserRunes } from '@hooks/useUserRunes';

export const OwnedRunes: React.FC = () => {

  const { userRunes, handleAddRune } = useUserRunes()

  console.log("🚀 ~ userRunes:", userRunes)


  return (
    <S.Container>
      {
        userRunes.map((rune) => <Text style={{ color: 'white' }}>{rune}</Text>)
      }

      <TouchableOpacity onPress={() => handleAddRune('El')}>
        <Text style={{ color: 'white' }}>Add Rune</Text>
      </TouchableOpacity>
    </S.Container >
  );
}


