import React, { memo } from 'react';
import * as S from './RunewordCard.styles'
import { IRunewords } from '@stores/slices/types';
import { RunewordDescription, Typography } from '@components'
import { useRunes } from '@hooks/useRunes';
import { FlatList } from 'react-native';

interface IRunewordCard {
  runeword: IRunewords
}

export const RunewordCard: React.FC<IRunewordCard> = ({ runeword }) => {
  const { title, runes, level, description, bases } = runeword
  const { ownedRunes } = useRunes()


  return (
    <S.Container>
      <Typography variant='title-02' color='diablo-brown-01' align='center'>{title}</Typography>
      <FlatList
        data={bases}
        renderItem={({ item }) => <Typography>{item}</Typography>}
        ItemSeparatorComponent={() => <Typography>, s</Typography>}
        contentContainerStyle={{ width: '100%', justifyContent: 'center' }}
        horizontal
      />

      <FlatList
        data={runes}
        renderItem={({ item }) => <S.RuneName color='diablo-orange-01' owned={ownedRunes.includes(item)} >{item}</S.RuneName>}
        ItemSeparatorComponent={() => <Typography>+</Typography>}
        contentContainerStyle={{ width: '100%', justifyContent: 'center' }}
        horizontal
      />

      <S.RunewordItemInfo>
        <Typography variant='body-02'>Level {level}</Typography>
        <Typography>{runes.length} Sockets</Typography>
      </S.RunewordItemInfo>

      <RunewordDescription>
        {description}
      </RunewordDescription>
    </S.Container>
  );
}

export const MemoizedRunewordCard = memo(RunewordCard)

