import React from 'react';
import Markdown from 'react-native-markdown-display';
import { useTheme } from 'styled-components/native';

interface IRunewordDescription {
  children: string
}

export const RunewordDescription: React.FC<IRunewordDescription> = ({ children }) => {
  const { colors, fontFamily } = useTheme()
  return (
    <Markdown style={{
      body: { color: colors['diablo-blue-01'], fontFamily: fontFamily.regular, fontSize: 18, lineHeight: 22 },
      heading4: { color: colors['diablo-brown-01'], fontFamily: fontFamily.bold, fontSize: 22, margin: 'auto' },
    }}>
      {children}
    </Markdown >
  );
}

