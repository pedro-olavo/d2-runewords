import { createSlice } from '@reduxjs/toolkit';
import { IRunewords } from '../types';
import runewords from './runewords';
interface RunewordsState {
  runewords: IRunewords[];
}

const initialState: RunewordsState = {
  runewords,
};

const runewordsSlice = createSlice({
  name: 'runewords',
  initialState,
  reducers: {},
});

export default runewordsSlice.reducer;
