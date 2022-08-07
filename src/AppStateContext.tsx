import { createContext, SetStateAction, useState } from 'react';
import CitiesEnum from './utils/CitiesEnum';

interface IAppStateContext {
  selectedCity: CitiesEnum;
  setSelectedCity: React.Dispatch<SetStateAction<CitiesEnum>>;
}

const AppStateContext = createContext<IAppStateContext>({
  selectedCity: CitiesEnum.LONDON,
  setSelectedCity: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppStateProvider: React.FC<Props> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(CitiesEnum.LONDON);
  return (
    <AppStateContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
