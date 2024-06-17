import { IRunewords } from '@stores/slices/types';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['background-01']};
`;

export const ListSeparator = styled.View`
  height: ${({ theme }) => theme.space['spacing-12']};
  background-color: transparent;
`;

export const ListHeaderContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.space['spacing-16']};
  gap: ${({ theme }) => theme.space['spacing-12']};
`;

export const ListEmptyScreen = styled.View`
  flex: 1;
  align-items: center;
`;

export const RunewordsList = styled(FlatList).attrs<FlatListProps<IRunewords>>(
  () => ({
    contentContainerStyle: { padding: 16 },
  }),
)`
  width: 100%;
  margin-top: ${({ theme }) => theme.space['spacing-12']};
`;

export const FilterChip = styled.TouchableOpacity<{ selected: boolean }>`
  width: 55%;
  align-items: center;

  padding-vertical: ${({ theme }) => theme.space['spacing-04']};
  padding-horizontal: ${({ theme }) => theme.space['spacing-12']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
  background-color: ${({ theme: { colors }, selected }) =>
    selected ? colors['primary-01'] : colors['surface-01']};
`;
