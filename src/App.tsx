import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import Home from './Components/Home';
import theme from './theme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppStateContext, AppStateProvider } from './AppStateContext';

// Create a client
const queryClient = new QueryClient();

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
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
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default App;
