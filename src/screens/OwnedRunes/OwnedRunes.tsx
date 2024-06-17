import React from 'react';
import * as S from './OwnedRunes.styles'
import { Typography } from '@components';
import { useRunes } from '@hooks/useRunes';

export const OwnedRunes: React.FC = () => {
  const { runes, toggleRuneOwnership } = useRunes()

  return (
    <S.Container>
      <S.RunesList
        data={runes}
        keyExtractor={(rune) => rune.name}
        ListHeaderComponent={
          <S.ListHeaderContainer>
            <Typography variant='title-02' weight='bold' align='center'>Select Owned Runes</Typography>
          </S.ListHeaderContainer>
        }
        renderItem={({ item }) => (
          <S.RuneContainer selected={item.owned} onPress={() => toggleRuneOwnership(item.name)}>
            <S.RuneImage source={item.image} />
            <S.RuneTitleContainer>
              <Typography>{item.name}</Typography>
            </S.RuneTitleContainer>
          </S.RuneContainer>
        )}
        ItemSeparatorComponent={S.ListSeparator}
        numColumns={4}

      />
    </S.Container >
  );
}


