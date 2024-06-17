import { createSlice } from '@reduxjs/toolkit';

interface Runeword {
  id: string;
  name: string;
}

interface RunewordsState {
  runewords: Runeword[];
}

const initialState: RunewordsState = {
  runewords: [
    { id: '1', name: "Ancient's Pledge" },
    { id: '2', name: 'Black' },
    { id: '3', name: 'Fury' },
  ],
};

const runewordsSlice = createSlice({
  name: 'runewords',
  initialState,
  reducers: {},
});

export default runewordsSlice.reducer;
