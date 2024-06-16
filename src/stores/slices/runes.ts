import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserRunesState {
  runes: string[];
}

const initialState: UserRunesState = {
  runes: [],
};

const userRunesSlice = createSlice({
  name: 'userRunes',
  initialState,
  reducers: {
    addRune: (state, action: PayloadAction<string>) => {
      state.runes.push(action.payload);
    },
    removeRune: (state, action: PayloadAction<string>) => {
      state.runes = state.runes.filter(rune => rune !== action.payload);
    },
    clearRunes: state => {
      state.runes = [];
    },
  },
});

export const { addRune, removeRune, clearRunes } = userRunesSlice.actions;
export default userRunesSlice.reducer;
