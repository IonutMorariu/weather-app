import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { createContext, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  getCurrentWeatherForCity,
  getWeatherForecastForCity,
} from './utils/api';
import CitiesEnum from './utils/CitiesEnum';

interface IAppStateContext {
  selectedCity: CitiesEnum;
  setSelectedCity: React.Dispatch<SetStateAction<CitiesEnum>>;
  currentWeatherQuery: any;
  forecastWeatherQuery: any;
  units: 'metric' | 'imperial';
}

const AppStateContext = createContext<IAppStateContext>({
  selectedCity: CitiesEnum.LONDON,
  setSelectedCity: () => {},
  currentWeatherQuery: {},
  forecastWeatherQuery: {},
  units: 'metric',
});

interface Props {
  children: React.ReactNode;
}

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(CitiesEnum.LONDON);
  const { i18n } = useTranslation();
  const currentWeatherQuery = useQuery(
    ['currentWeather', { city: selectedCity, lang: i18n.language }],
    getCurrentWeatherForCity
  );

  const forecastWeatherQuery = useQuery(
    ['forecastWeather', { city: selectedCity, lang: i18n.language }],
    getWeatherForecastForCity
  );

  return (
    <AppStateContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        currentWeatherQuery,
        forecastWeatherQuery,
        units: i18n.language === 'es' ? 'metric' : 'imperial',
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
