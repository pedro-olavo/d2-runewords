import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/store';
import { toggleRuneOwnership } from '@stores/slices/runes';

export const useRunes = () => {
  const runes = useSelector((state: RootState) => state.runes.runes);
  const ownedRunes = runes
    .filter(rune => rune.owned === true)
    .map(rune => rune.name);

  const dispatch = useDispatch();

  const toggle = (runeName: string) => {
    dispatch(toggleRuneOwnership(runeName));
  };

  return { runes, ownedRunes, toggleRuneOwnership: toggle };
};
