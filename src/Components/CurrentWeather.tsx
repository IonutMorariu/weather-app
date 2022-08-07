import {
  Card,
  Center,
  Container,
  Image,
  Loader,
  Stack,
  Title,
} from '@mantine/core';
import { useContext } from 'react';
import { AppStateContext } from '../AppStateContext';

const CurrentWeather = () => {
  const { weatherQuery, units } = useContext(AppStateContext);

  return (
    <Container color="teal" size={300} py="lg">
      {weatherQuery.isLoading ? (
        <Loader />
      ) : (
        <Card shadow="lg">
          <Stack align="center" spacing="sm">
            <Image
              width={128}
              src={`http://openweathermap.org/img/w/${weatherQuery.data.weather[0].icon}.png`}
            />
            <Title order={1}>
              {Math.round(weatherQuery.data.main.temp)}º{' '}
              {units === 'imperial' ? 'F' : 'C'}
            </Title>
            <Title order={3}>{weatherQuery.data.weather[0].description}</Title>
          </Stack>
        </Card>
      )}
    </Container>
  );
};

export default CurrentWeather;
