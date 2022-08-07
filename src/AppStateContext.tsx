import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { createContext, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentWeatherForCity } from './utils/api';
import CitiesEnum from './utils/CitiesEnum';

interface IAppStateContext {
  selectedCity: CitiesEnum;
  setSelectedCity: React.Dispatch<SetStateAction<CitiesEnum>>;
  weatherQuery: any;
  units: 'metric' | 'imperial';
}

const AppStateContext = createContext<IAppStateContext>({
  selectedCity: CitiesEnum.LONDON,
  setSelectedCity: () => {},
  weatherQuery: {},
  units: 'metric',
});

interface Props {
  children: React.ReactNode;
}

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(CitiesEnum.LONDON);
  const { i18n } = useTranslation();
  const weatherQuery = useQuery(
    ['weather', { city: selectedCity, lang: i18n.language }],
    getCurrentWeatherForCity
  );

  useEffect(() => {}, [selectedCity]);

  return (
    <AppStateContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        weatherQuery,
        units: i18n.language === 'es' ? 'metric' : 'imperial',
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
