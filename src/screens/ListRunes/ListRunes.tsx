import React, { useReducer } from 'react';
import * as S from './ListRunes.styles'
import { MemoizedRunewordCard, SearchBar, Typography } from '@components';
import { useRunewords } from '@hooks/useRunewords';

export const ListRunes: React.FC = () => {
  const [search, setSearch] = useReducer((_: string, value: string) => value, '')
  const [listOnlyAvailable, setListOnlyAvaible] = useReducer((state: boolean) => !state, false)

  const { runewords } = useRunewords({ search, listOnlyAvailable })

  return (
    <S.Container>
      <S.RunewordsList
        ItemSeparatorComponent={S.ListSeparator}
        ListHeaderComponent={
          <S.ListHeaderContainer>
            <SearchBar value={search} onChangeText={setSearch} />
            <S.FilterChip selected={listOnlyAvailable} onPress={setListOnlyAvaible}>
              <Typography variant='body-02'>Only Availables</Typography>
            </S.FilterChip>
          </S.ListHeaderContainer>
        }
        ListEmptyComponent={
          <S.ListEmptyScreen>
            <Typography color='surface-02'>No available runewords</Typography>
          </S.ListEmptyScreen>
        }
        data={runewords}
        renderItem={({ item }) => <MemoizedRunewordCard runeword={item} />} />
    </S.Container>
  );
}
