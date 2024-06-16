import React from 'react';
import { AppProvider } from './contexts/app';
import Routes from './routes';

export function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
