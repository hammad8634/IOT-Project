import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import LogoIcon from '../../assets/svg/logo.png';

export default function TopNavbar() {
	const [y, setY] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', () => setY(window.scrollY));
		return () => {
			window.removeEventListener('scroll', () => setY(window.scrollY));
		};
	}, [y]);

	return (
		<>
			<Wrapper
				className='flexCenter animate whiteBg'
				style={y > 100 ? { height: '60px' } : { height: '80px' }}
			>
				<NavInner className='container flexSpaceCenter'>
					<Link className='pointer flexNullCenter' to='home' smooth={true}>
						<img height={'30px'} width='20px' src={LogoIcon} alt='Logo' />
						<h1 style={{ marginLeft: '15px' }} className='font20 extraBold'>
							SIS
						</h1>
					</Link>
					<UlWrapper className='flexNullCenter'>
						<li className='semiBold font15 pointer'>
							<Link
								activeClass='active'
								style={{ padding: '10px 15px' }}
								to='home'
								spy={true}
								smooth={true}
								offset={-80}
							>
								Home
							</Link>
						</li>
						<li className='semiBold font15 pointer'>
							<Link
								activeClass='active'
								style={{ padding: '10px 15px' }}
								to='dashboard'
								spy={true}
								smooth={true}
								offset={-80}
							>
								Dashboard
							</Link>
						</li>
						<li className='semiBold font15 pointer'>
							<Link
								activeClass='active'
								style={{ width: 0 }}
								to='pricing'
								spy={true}
								smooth={true}
								offset={-80}
							></Link>
						</li>
						<li className='semiBold font15 pointer'>
							<Link
								activeClass='active'
								style={{ padding: '10px 15px' }}
								to='sensors'
								spy={true}
								smooth={true}
								offset={-80}
							>
								Sensors
							</Link>
						</li>
					</UlWrapper>
					<UlWrapperRight className='flexNullCenter'></UlWrapperRight>
				</NavInner>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;
const NavInner = styled.div`
	position: relative;
	height: 100%;
`;
const UlWrapper = styled.ul`
	display: flex;
	@media (max-width: 760px) {
		display: none;
	}
`;
const UlWrapperRight = styled.ul`
	@media (max-width: 760px) {
		display: none;
	}
`;
