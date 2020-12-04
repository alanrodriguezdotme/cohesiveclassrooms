import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Header = () => {
	return (
			<Container>
				<Gradient />
				<Wrapper>
					<Link to="/">
						<Title>
							<img src="/logo.svg" alt="Cohesive Classrooms Logo" />
							<span>Cohesive Classrooms</span>
						</Title>
					</Link>
					<Navigation>
						<Link to="/about">About Us</Link>
						<a 
							href="https://cohesiveclassrooms.teachable.com/" 
							target="_blank"
							rel="noreferrer" >
							<span>
								Courses & Coaching
								<img 
									className="new-window" 
									src="icons/new-window.svg"
									alt="new window icon" />
							</span>
						</a>
						<Link to="/faq">F.A.Q.</Link>
						<Link to="/contact">Contact Us</Link>
					</Navigation>
				</Wrapper>
			</Container>
	)
}

export default Header

const Container = styled.header`
	width: 100%;
`

const Gradient = styled.div`
	width: 100%;
	height: 4px;
	background: rgb(222,146,33);
	background: linear-gradient(90deg, rgba(222,146,33,1) 0%, rgba(232,35,118,1) 25%, rgba(42,50,209,1) 50%, rgba(32,214,142,1) 75%, rgba(0,212,255,1) 100%);
`

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	max-width: 960px;
	margin: 0 auto;
	display: flex;
	align-items: center;
`

const Title = styled.div`
	color: ${ p => p.theme.black };
	display: flex;
	align-items: center;
	height: 100%;

	img {
		margin-right: 12px;
	}

	span {
		font-weight: 400;
		text-transform: uppercase;
		font-size: 18px;
	}
`

const Navigation = styled.nav`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	a {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 14px;
		margin-left: 20px;
		color: ${ p => p.theme.black };
		transition: color 150ms ease-in-out;

		&:hover {
			color: ${ p => p.theme.green };

			.new-window {
				fill: ${ p => p.theme.green };
			}
		}

		.new-window {
			height: 10px;
			margin-left: 4px;
			fill: ${ p => p.theme.black };
			transition: fill 200ms ease-in-out;
		}
	}
`