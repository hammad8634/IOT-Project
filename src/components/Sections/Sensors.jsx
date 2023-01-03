import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// Components

export default function Sensors({
	temperature,
	humidity,
	moisture,
	temperatureLimit,
	humidityLimit,
	moistureLimit,
}) {
	const maxTemperature = 60;
	const maxHumidity = 100;
	const maxMoisture = 350;

	const [temperatureWidth, setTemperatureWidth] = useState(
		(temperature / maxTemperature) * 100
	);
	const [humidityWidth, setHumidityWidth] = useState(
		(humidity / maxHumidity) * 100
	);
	const [moistureWidth, setMoistureWidth] = useState(
		(moisture / maxMoisture) * 100
	);
	const [temperatureColor, setTemperatureColor] = useState('green');
	const [humidityColor, setHumidityColor] = useState('green');
	const [moistureColor, setMoistureColor] = useState('green');

	useEffect(() => {
		if (
			temperature >= temperatureLimit - 4 &&
			temperature <= temperatureLimit + 4
		) {
			setTemperatureColor('orange');
		} else if (temperature < temperatureLimit - 4) {
			setTemperatureColor('green');
		} else {
			setTemperatureColor('red');
		}
		setTemperatureWidth((temperature / maxTemperature) * 100);

		if (humidity <= humidityLimit + 8 && humidity >= humidityLimit - 8) {
			setHumidityColor('orange');
		} else if (humidity > humidityLimit + 8) {
			setHumidityColor('green');
		} else {
			setHumidityColor('red');
		}
		setHumidityWidth((humidity / maxHumidity) * 100);

		if (moisture >= moistureLimit - 20 && moisture <= moistureLimit + 20) {
			setMoistureColor('orange');
		} else if (moisture < moistureLimit - 20) {
			setMoistureColor('green');
		} else {
			setMoistureColor('red');
		}
		setMoistureWidth((moisture / maxMoisture) * 100);
	}, [
		temperature,
		moisture,
		humidity,
		humidityLimit,
		temperatureLimit,
		moistureLimit,
	]);

	return (
		<Wrapper id='sensors'>
			<div className='whiteBg'>
				<div className='container'>
					<HeaderInfo>
						<h1 className='font40 extraBold'>Sensor Values</h1>
						<p className='font13'>
							The values of the important attributes i.e. Temperature, Humidity
							and Soil Moisture.
						</p>
					</HeaderInfo>
					<div className='row textCenter' style={{ marginTop: '30px' }}>
						<div className='col-xs-3 textLeft font20'>
							Temperature: {temperature}{' '}
							<sup style={{ fontSize: 'xx-small', verticalAlign: 'super' }}>
								o
							</sup>
							C
						</div>
						<div className='col-xs-9'>
							<div
								style={{
									width: `${temperatureWidth}%`,
									height: '20px',
									backgroundColor: temperatureColor,
								}}
							></div>
						</div>
					</div>
					<div className='row textCenter' style={{ marginTop: '30px' }}>
						<div className='col-xs-3 textLeft font20'>
							Humidity: {humidity} %
						</div>
						<div className='col-xs-9'>
							<div
								style={{
									width: `${humidityWidth}%`,
									height: '20px',
									backgroundColor: humidityColor,
								}}
							></div>
						</div>
					</div>
					<div
						className='row textCenter'
						style={{ marginTop: '30px', marginBottom: '40px' }}
					>
						<div className='col-xs-3 textLeft font20'>Moisture: {moisture}</div>
						<div className='col-xs-9'>
							<div
								style={{
									width: `${moistureWidth}%`,
									height: '20px',
									backgroundColor: moistureColor,
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-top: 20px;
`;
const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
