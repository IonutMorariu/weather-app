import { useContext } from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, Loader, Title } from '@mantine/core';
import { AppStateContext } from '../AppStateContext';
import WeatherCard from './WeatherCard';
import { useTranslation } from 'react-i18next';

const WeatherForecast = () => {
	const { forecastWeatherQuery } = useContext(AppStateContext);
	const { t } = useTranslation();
	if (forecastWeatherQuery.isLoading) {
		return <Loader />;
	}

	const renderWeatherCardList = () => {
		return forecastWeatherQuery.data.list.map((item: any) => {
			return (
				<Carousel.Slide key={item.dt}>
					<WeatherCard weatherData={item} />
				</Carousel.Slide>
			);
		});
	};
	return (
		<Container>
			<Title order={2} align='center' mb='md'>
				{t('NEXT_FIVE_DAYS')}
			</Title>
			<Carousel withIndicators height={350} slideSize='33.333333%' slideGap='md' loop align='start' slidesToScroll={3}>
				{renderWeatherCardList()}
			</Carousel>
		</Container>
	);
};

export default WeatherForecast;
