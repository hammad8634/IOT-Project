import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// Components
import ProjectBox from '../Elements/ProjectBox';
// Assets
import Gif1 from '../../assets/img/gifs/fan.gif';
import Gif2 from '../../assets/img/gifs/sprinkle.gif';
import Gif3 from '../../assets/img/gifs/water.gif';
import StaticGif1 from '../../assets/img/gifs/static-fan.jpg';
import StaticGif2 from '../../assets/img/gifs/static-sprinkle.jpg';
import StaticGif3 from '../../assets/img/gifs/static-water.jpg';
import Sensors from './Sensors';

export default function Projects() {
	const [fanOn, setFanOn] = useState(false);
	const [sprinklerOn, setSprinklerOn] = useState(false);
	const [waterPumpOn, setWaterPumpOn] = useState(false);

	const tempLimit = 18;
	const humLimit = 60;
	const moistureLimit = 250;

	const [tempValue, setTempValue] = useState(20);
	const [humValue, setHumValue] = useState(80);
	const [moistureValue, setMoistureValue] = useState(260);

	useEffect(() => {
		if (tempValue > tempLimit) {
			setFanOn(true);
		} else {
			setFanOn(false);
		}
		if (moistureValue > moistureLimit) {
			setWaterPumpOn(true);
		} else {
			setWaterPumpOn(false);
		}
		if (humValue < humLimit) {
			setSprinklerOn(true);
		} else {
			setSprinklerOn(false);
		}
	}, [tempValue, humValue, moistureValue]);

	return (
		<Wrapper id='dashboard'>
			<div className='whiteBg'>
				<div className='container'>
					<HeaderInfo>
						<h1 className='font40 extraBold'>Dashboard</h1>
						<p className='font13'>
							Here is all the information that you need about your irrigation
							needs.
						</p>
					</HeaderInfo>
					<div className='row textCenter'>
						<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
							<ProjectBox
								value={fanOn}
								id='fan-img'
								staticImg={StaticGif1}
								img={Gif1}
								title='Fan'
								text='Reduce the temperature if the conditions become very hot.'
							/>
						</div>
						<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
							<ProjectBox
								value={sprinklerOn}
								id='sprinkler-img'
								img={Gif2}
								staticImg={StaticGif2}
								title='Sprinkler'
								text='Increase the humidity in the atmosphere if the air becomes very dry.'
							/>
						</div>
						<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
							<ProjectBox
								value={waterPumpOn}
								id='water-img'
								img={Gif3}
								staticImg={StaticGif3}
								title='Water Pump'
								text='Turn on if the soil moisture goes too low.'
							/>
						</div>
					</div>
				</div>
			</div>
			<Sensors
				temperature={tempValue}
				temperatureLimit={tempLimit}
				humidity={humValue}
				humidityLimit={humLimit}
				moisture={moistureValue}
				moistureLimit={moistureLimit}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
