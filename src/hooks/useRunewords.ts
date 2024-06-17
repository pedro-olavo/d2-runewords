import { useSelector } from 'react-redux';
import { RootState } from '@stores/store';
import { useRunes } from './useRunes';
import { useMemo } from 'react';

export const useRunewords = ({ search = '', listOnlyAvailable = false }) => {
  const { ownedRunes } = useRunes();
  const runewords = useSelector(
    (state: RootState) => state.runewords.runewords,
  );

  const lowerCaseSearchTerm = search.toLowerCase();

  const filteredRunewords = useMemo(() => {
    return runewords.filter(runeword => {
      const matchesSearchTerm = runeword.title
        .toLowerCase()
        .includes(lowerCaseSearchTerm);
      const hasOwnedRunes = runeword.runes.every(rune =>
        ownedRunes.includes(rune),
      );
      return matchesSearchTerm && (!listOnlyAvailable || hasOwnedRunes);
    });
  }, [runewords, ownedRunes, lowerCaseSearchTerm, listOnlyAvailable]);

  return { runewords: filteredRunewords };
};
