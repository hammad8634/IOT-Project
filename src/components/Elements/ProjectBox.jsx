import React from 'react';
import styled from 'styled-components';

export default function ProjectBox({ img, title, text, id, value, staticImg }) {
	return (
		<Wrapper>
			<ImgBtn className='animate pointer'>
				<img
					id={id}
					className='radius8'
					src={value ? img : staticImg}
					alt='project'
				></img>
			</ImgBtn>
			<h3 className='font20 extraBold'>{title}</h3>
			<p className='font16'>{text}</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	margin-top: 30px;
	img {
		width: 100%;
		height: auto;
		margin: 20px 0;
	}
	h3 {
		padding-bottom: 10px;
	}
`;
const ImgBtn = styled.button`
	background-color: transparent;
	border: 0px;
	outline: none;
	padding: 0px;
	margin: 0px;
	:hover > img {
		opacity: 0.5;
	}
`;
