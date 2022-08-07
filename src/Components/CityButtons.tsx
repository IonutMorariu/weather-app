import { Button, Group } from '@mantine/core';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppStateContext } from '../AppStateContext';
import CitiesEnum from '../utils/CitiesEnum';

const CityButtons = () => {
  const { t } = useTranslation();
  const { setSelectedCity, selectedCity } = useContext(AppStateContext);

  const changeSelectedCity = (city: CitiesEnum) => {
    setSelectedCity(city);
  };

  return (
    <Group position="center">
      <Button
        variant={selectedCity === CitiesEnum.LONDON ? 'filled' : 'outline'}
        onClick={() => {
          changeSelectedCity(CitiesEnum.LONDON);
        }}
      >
        {t('LONDON')}
      </Button>
      <Button
        variant={selectedCity === CitiesEnum.TORONTO ? 'filled' : 'outline'}
        onClick={() => {
          changeSelectedCity(CitiesEnum.TORONTO);
        }}
      >
        {t('TORONTO')}
      </Button>
      <Button
        variant={selectedCity === CitiesEnum.SINGAPORE ? 'filled' : 'outline'}
        onClick={() => {
          changeSelectedCity(CitiesEnum.SINGAPORE);
        }}
      >
        {t('SINGAPORE')}
      </Button>
    </Group>
  );
};

export default CityButtons;
