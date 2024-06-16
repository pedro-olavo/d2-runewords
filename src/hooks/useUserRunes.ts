import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@stores/store';
import { addRune, removeRune, clearRunes } from '@stores/slices/runes';

export const useUserRunes = () => {
  const dispatch: AppDispatch = useDispatch();
  const userRunes = useSelector((state: RootState) => state.userRunes.runes);

  const handleAddRune = (rune: string) => {
    dispatch(addRune(rune));
  };

  const handleRemoveRune = (rune: string) => {
    dispatch(removeRune(rune));
  };

  const handleClearRunes = () => {
    dispatch(clearRunes());
  };

  return { userRunes, handleAddRune, handleRemoveRune, handleClearRunes };
};
