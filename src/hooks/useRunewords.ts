import { useSelector } from 'react-redux';
import { RootState } from '@stores/store';

export const useRunewords = () => {
  const runewords = useSelector(
    (state: RootState) => state.runewords.runewords,
  );
  return { runewords };
};
