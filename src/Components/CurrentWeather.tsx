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
import WeatherCard from './WeatherCard';

const CurrentWeather = () => {
  const { currentWeatherQuery } = useContext(AppStateContext);

  return (
    <Container color="teal" size={300} py="lg">
      {currentWeatherQuery.isLoading ? (
        <Loader />
      ) : (
        <WeatherCard weatherData={currentWeatherQuery.data} />
      )}
    </Container>
  );
};

export default CurrentWeather;
