import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { runes } from './data';
import { ImageSourcePropType } from 'react-native';
import { Runes } from '../types';

interface RunesState {
  runes: Runes[];
}

const initialState: RunesState = {
  runes,
};

const runesSlice = createSlice({
  name: 'runes',
  initialState,
  reducers: {
    toggleRuneOwnership(state, action: PayloadAction<string>) {
      const runeName = action.payload;
      const runeToUpdate = state.runes.find(rune => rune.name === runeName);

      if (runeToUpdate) {
        runeToUpdate.owned = !runeToUpdate.owned;
      }
    },
  },
});

export const { toggleRuneOwnership } = runesSlice.actions;

export default runesSlice.reducer;
