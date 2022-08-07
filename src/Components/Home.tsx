import { Container, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
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
      <h1>{t('WEATHER')}</h1>
    </Container>
  );
};

export default Home;
