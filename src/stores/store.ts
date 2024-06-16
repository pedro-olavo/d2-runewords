import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import runewordsReducer from './slices/runewords';
import userRunesReducer from './slices/runes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userRunes'],
};

const rootReducer = combineReducers({
  runewords: runewordsReducer,
  userRunes: userRunesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
