import styled from 'styled-components/native';

export const IconWrapper = styled.View<{ focused: boolean }>`
  width: 100%;
  height: 100%;

  border-top-width: ${({ theme }) => theme.borderWidths['stroke-03']};
  border-top-color: ${({ theme, focused }) =>
    focused ? theme.colors['primary-01'] : theme.colors['surface-01']};
`;
