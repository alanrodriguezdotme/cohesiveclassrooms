import React from 'react';
import styled from 'styled-components';
import { arrow } from '../content';
import { colors } from '../themes';

const Arrow = () => {
	console.log({arrow})
	return (
		<Wrapper>
			{ arrow.map((module, i) => (
				<Column key={"arrowColumn-" + i}>
					<Circle color={module.color}>
						<h3>{`MODULE ${i + 1}`}</h3>
						<div style={{lineHeight: '1.4em'}}>{module.title}</div>
					</Circle>
					<Text>{module.text}</Text>
				</Column>
			))}
		</Wrapper>
	)
}

export default Arrow

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	background-image: url("/images/arrow.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center 42px;
	min-height: 330px;
	margin: 60px auto;
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 166px;
	padding-right: 16px;
`

const Circle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: ${ p => p.color };
	color: ${colors.white};
	text-align: center;

	h3 {
		margin: 40px auto 8px;
	}
`

const Text = styled.div`
	margin-top: 20px;
	font-size: 0.9em;
	line-height: 1.4em;
`