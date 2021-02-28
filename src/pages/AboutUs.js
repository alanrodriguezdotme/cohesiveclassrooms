import React from 'react'
import styled from 'styled-components'

import content from '../content'
import { colors } from '../themes'

const AboutUs = () => {
	let { aboutUs } = content

	function renderBios() {
		return aboutUs.bios.map((bio, i) => {
			return (
				<Side key={ 'bio' + i }>
					<Photo 
						colors={ colors } 
						className={ i % 2 === 0 ? "blueOverlay" : "pinkOverlay" }>
						<img alt={ bio.name } src={ "images/" + bio.image } />
					</Photo>
					<Title 
						colors={ colors } 
						className={ i % 2 === 0 ? "blue" : "pink" }>
						<h2>{ bio.title }</h2>
						<h3>{ bio.subtitle }</h3>
					</Title>
					<Text>{ bio.text }</Text>
				</Side>
			)
		})
	}

	return (
		<Container>
			<Wrapper>
				<Row>
					<h1>About us</h1>
				</Row>
				<Row>
					{ renderBios() }
				</Row>
			</Wrapper>
		</Container>
	)
}

export default AboutUs

const Container = styled.div`
	width: 100%;
	min-height: 100px;
`

const Wrapper = styled.div`
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
`

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 50px 0;

	h1 {
		color: ${ p => p.theme.title };
		margin: 0;
	}
`

const Side = styled.div`
	width: 50%;
	padding: 0 40px 0 0;

	&:nth-child(even) {
		padding: 0 0 0 40px;
	}
`

const Photo = styled.div`
	width: 240px;
	height: 240px;
	border-radius: 120px;
	margin: 0 auto;
		
	img { mix-blend-mode: luminosity; }

	&.pinkOverlay {	background-color: ${ p => p.colors.pinkShade80 };	}
	&.blueOverlay {	background-color: ${ p => p.colors.blueShade80 };	}
`

const Title = styled.div`
	width: 100%;
	text-align: center;
	margin: 30px 0;

	&.blue { color: ${ p => p.colors.blue }; }
	&.pink { color: ${ p => p.colors.pink }; }

	h2 { margin: 0 0 8px 0; }
	h3 { margin: 8px 0 0 0; }
`

const Text = styled.div`
	color: ${ p => p.theme.color };
`