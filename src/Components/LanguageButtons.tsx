import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import esFlag from '../assets/es.svg';
import enFlag from '../assets/gb.svg';

const LanguageButtons = () => {
  const { i18n } = useTranslation();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group spacing="xs">
      <ActionIcon
        color={i18n.language === 'es' ? 'blue' : undefined}
        onClick={() => {
          i18n.changeLanguage('es');
        }}
        variant="light"
        size="xl"
        px="xs"
      >
        <img src={esFlag} />
      </ActionIcon>
      <ActionIcon
        color={i18n.language === 'en' ? 'blue' : undefined}
        onClick={() => {
          i18n.changeLanguage('en');
        }}
        variant="light"
        size="xl"
        px="xs"
      >
        <img src={enFlag} />
      </ActionIcon>
    </Group>
  );
};

export default LanguageButtons;
