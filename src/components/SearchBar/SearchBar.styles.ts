import { Search } from 'lucide-react-native';
import styled from 'styled-components/native';

export const SearchBarContainer = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['surface-01']};
  border-radius: ${({ theme }) => theme.radii['corner-12']};
  elevation: 6;
`;

export const IconContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.space['spacing-12']};
  justify-content: center;
`;

export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.colors['surface-02']};
  font-size: ${({ theme }) => theme.iconSizes['iconBody-01']};
`;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors['surface-02'],
}))`
  flex: 1;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii['corner-12']};
  color: ${({ theme }) => theme.colors['grayScale-01']};
`;
