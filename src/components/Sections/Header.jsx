import React from 'react';
import styled from 'styled-components';
// Assets
import HeaderImage from '../../assets/img/header-img.png';
import QuotesIcon from '../../assets/svg/Quotes';
import Dots from '../../assets/svg/Dots';
import TechSlider from '../Elements/TechSlider';

export default function Header() {
	return (
		<>
			<Wrapper id='home' className='container flexSpaceCenter'>
				<LeftSide className='flexCenter'>
					<div>
						<h1 className='extraBold font60'>
							Smart irrigation for a sustainable future
						</h1>
						<HeaderP className='font13 semiBold'>
							Smart Irrigation System provides innovative solutions for managing
							and conserving water resources in the irrigation of landscapes. We
							offer advanced technology such as sensors, controllers, and
							software to optimize watering schedules and prevent over- or
							under-watering on the basis of humidity, temperature and soil
							moisture. With a smart irrigation system, save money on water
							bills, reduce water waste, and maintain healthy, beautiful
							landscapes.
						</HeaderP>
					</div>
				</LeftSide>
				<RightSide>
					<ImageWrapper>
						<Img
							className='radius6'
							src={HeaderImage}
							alt='office'
							style={{ zIndex: 9 }}
						/>
						<QuoteWrapper className='flexCenter darkBg radius8'>
							<QuotesWrapper>
								<QuotesIcon />
							</QuotesWrapper>
							<div>
								<p className='font15 whiteColor'>
									<em>
										Any sufficiently advanced technology is indistinguishable
										from magic.
									</em>
								</p>
								<p
									className='font13 orangeColor textRight'
									style={{ marginTop: '10px' }}
								>
									Arthur C. Clarke
								</p>
							</div>
						</QuoteWrapper>
						<DotsWrapper>
							<Dots />
						</DotsWrapper>
					</ImageWrapper>
				</RightSide>
			</Wrapper>
			<div
				className='lightBg'
				style={{ padding: '50px 0', marginBottom: '50px' }}
			>
				<div className='container'>
					<TechSlider />
				</div>
			</div>
		</>
	);
}

const Wrapper = styled.section`
	padding-top: 80px;
	width: 100%;
	min-height: 840px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;
const LeftSide = styled.div`
	width: 50%;
	height: 100%;
	@media (max-width: 960px) {
		width: 100%;
		order: 2;
		margin: 50px 0;
		text-align: center;
	}
	@media (max-width: 560px) {
		margin: 80px 0 50px 0;
	}
`;
const RightSide = styled.div`
	width: 50%;
	height: 100%;
	@media (max-width: 960px) {
		width: 100%;
		order: 1;
		margin-top: 30px;
	}
`;
const HeaderP = styled.div`
	max-width: 470px;
	padding: 15px 0 50px 0;
	line-height: 1.5rem;
	@media (max-width: 960px) {
		padding: 15px 0 50px 0;
		text-align: center;
		max-width: 100%;
	}
`;
const ImageWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	z-index: 9;
	@media (max-width: 960px) {
		width: 100%;
		justify-content: center;
	}
`;
const Img = styled.img`
	@media (max-width: 560px) {
		width: 80%;
		height: auto;
	}
`;
const QuoteWrapper = styled.div`
	position: absolute;
	left: 0;
	bottom: 50px;
	max-width: 330px;
	padding: 30px;
	z-index: 99;
	@media (max-width: 960px) {
		left: 20px;
	}
	@media (max-width: 560px) {
		bottom: -50px;
	}
`;
const QuotesWrapper = styled.div`
	position: absolute;
	left: -20px;
	top: -10px;
`;
const DotsWrapper = styled.div`
	position: absolute;
	right: -100px;
	bottom: 100px;
	z-index: 2;
	@media (max-width: 960px) {
		right: 100px;
	}
	@media (max-width: 560px) {
		display: none;
	}
`;
