import { Center, Container, Group } from '@mantine/core';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppStateContext } from '../AppStateContext';
import CityButtons from './CityButtons';
import CurrentWeather from './CurrentWeather';
import LanguageButtons from './LanguageButtons';
import ThemeButton from './ThemeButton';

const Home = () => {
  const { t } = useTranslation();
  const { weatherQuery } = useContext(AppStateContext);
  console.log({ weatherQuery });
  return (
    <Container size="xl" pt="lg">
      <Group position="right">
        <ThemeButton />
        <LanguageButtons />
      </Group>
      <Center>
        <h1>{t('WEATHER_TITLE')}</h1>
      </Center>
      <CityButtons />
      <CurrentWeather />
    </Container>
  );
};

export default Home;
