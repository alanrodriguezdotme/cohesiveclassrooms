import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Envelope } from '../icons/envelope.svg'
import { ReactComponent as TwitterLogo } from '../icons/twitter.svg'

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Left>COHESIVE CLASSROOMS ©2020</Left>
				<Right>
					<a href="mailto:info@cohesiveclassrooms.com">
						<Envelope fill="blue" />
					</a>
					<a href="#">
						<TwitterLogo fill="blue" />
					</a>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Footer

const Container = styled.footer`
	width: 100%;
	height: 100px;
`

const Wrapper = styled.div`
	width: 100%;
	max-width: 960px;
	height: 100%;
	margin: 0 auto;
	display: flex;
`

const Left = styled.div`
	display: flex;
	align-items: center;	
	font-weight: 400;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	svg {
		height: 24px;
		fill: ${ p => p.theme.link };
		transition: fill 150ms ease-in-out;

		&:hover {
			fill: ${ p => p.theme.linkHover };
		}
	}
`