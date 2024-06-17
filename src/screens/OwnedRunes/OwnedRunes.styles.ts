import { IRunes } from '@stores/slices/types';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['background-01']};
  padding-horizontal: ${({ theme }) => theme.space['spacing-16']};
`;

export const RuneContainer = styled.TouchableOpacity<{ selected: boolean }>`
  width: 25%;
  align-items: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;

export const RuneImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RuneTitleContainer = styled.View`
  margin-top: ${({ theme }) => theme.space['spacing-04']};
`;

export const ListSeparator = styled.View`
  height: ${({ theme }) => theme.space['spacing-12']};
  background-color: transparent;
`;

export const ListHeaderContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.space['spacing-16']};
`;

export const RunesList = styled(FlatList).attrs<FlatListProps<IRunes>>(() => ({
  contentContainerStyle: { paddingVertical: 16 },
}))`
  width: 100%;
  margin-top: ${({ theme }) => theme.space['spacing-12']};
`;
