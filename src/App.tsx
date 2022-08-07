import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './Components/Home';
import theme from './theme';

function App() {
  const { t } = useTranslation();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, ...theme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Home />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
