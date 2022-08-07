import { Card, Image, Stack, Text, Title } from '@mantine/core';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppStateContext } from '../AppStateContext';
import { getISOLangCode } from '../utils/utils';

interface Props {
  weatherData: any;
}

const WeatherCard = ({ weatherData }: Props) => {
  const { units } = useContext(AppStateContext);
  const { t, i18n } = useTranslation();

  const date = weatherData.dt_txt ? new Date(weatherData.dt_txt) : null;

  return (
    <Card shadow="lg">
      <Stack align="center" spacing="sm">
        {date && (
          <Text>
            {date.toLocaleDateString(getISOLangCode(i18n.language), {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
            {t('AT')}
            {date.toLocaleTimeString(getISOLangCode(i18n.language), {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        )}
        <Image
          width={128}
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        />
        <Title order={1}>
          {Math.round(weatherData.main.temp)}º{' '}
          {units === 'imperial' ? 'F' : 'C'}
        </Title>
        <Title order={3}>{weatherData.weather[0].description}</Title>
      </Stack>
    </Card>
  );
};

export default WeatherCard;
