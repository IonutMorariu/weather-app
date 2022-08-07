import { Center, Container, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import CityButtons from './CityButtons';
import LanguageButtons from './LanguageButtons';
import ThemeButton from './ThemeButton';

const Home = () => {
  const { t } = useTranslation();
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
    </Container>
  );
};

export default Home;
