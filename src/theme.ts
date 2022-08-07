import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  fontFamily: 'Inter',
  primaryColor: 'teal',
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
  },
};

export default theme;
