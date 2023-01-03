import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Assets
import TechLogo01 from '../../assets/img/techs/logo01.png';
import TechLogo02 from '../../assets/img/techs/logo02.png';
import TechLogo03 from '../../assets/img/techs/logo03.png';

export default function TechSlider() {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo01} alt='client logo' />
				</LogoWrapper>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo02} alt='client logo' />
				</LogoWrapper>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo03} alt='client logo' />
				</LogoWrapper>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo01} alt='client logo' />
				</LogoWrapper>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo02} alt='client logo' />
				</LogoWrapper>
				<LogoWrapper className='flexCenter'>
					<ImgStyle src={TechLogo03} alt='client logo' />
				</LogoWrapper>
			</Slider>
		</div>
	);
}

const LogoWrapper = styled.div`
	width: 100%;
	height: 100px;
	cursor: pointer;
	:focus-visible {
		outline: none;
		border: 0px;
	}
`;
const ImgStyle = styled.img`
	width: 60%;
	height: 100%;
	padding: 10%;
`;
