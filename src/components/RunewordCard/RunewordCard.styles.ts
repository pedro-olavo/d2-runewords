import styled from 'styled-components/native';
import { Typography } from '@components';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['surface-01']};
  border-radius: ${({ theme }) => theme.radii['corner-08']};
  padding-vertical: ${({ theme }) => theme.space['spacing-08']};
  padding-horizontal: ${({ theme }) => theme.space['spacing-16']};
  gap: ${({ theme }) => theme.space['spacing-12']};
  elevation: 6;
`;

export const RunewordItemInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const RuneName = styled(Typography)<{ owned: boolean }>`
  opacity: ${({ owned }) => (owned ? 1 : 0.5)};
`;
