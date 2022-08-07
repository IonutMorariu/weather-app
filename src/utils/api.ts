import CitiesEnum from './CitiesEnum';

const API_KEY = '0d15a3289912e0a290a4d554f532108e';

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

type Params = {
  queryKey: [string, { city: CitiesEnum; lang: string }];
};

const getCurrentWeatherForCity = async ({ queryKey }: Params) => {
  const [, { city, lang }] = queryKey;
  try {
    const res = await fetch(
      `${CURRENT_WEATHER_URL}?q=${city}&appid=${API_KEY}&lang=${lang}&units=${
        lang === 'es' ? 'metric' : 'imperial'
      }`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export { getCurrentWeatherForCity };
