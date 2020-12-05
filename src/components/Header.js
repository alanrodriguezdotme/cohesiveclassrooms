import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import EmailCapture from './EmailCapture'

const Header = () => {
	let [ showEmailCapture, setShowEmailCapture ] = useState(false)

	return (
			<Container>
				<Gradient />
				<Wrapper>
					<Link className="logo-link" to="/">
						<Title>
							<img src="/logo.svg" alt="Cohesive Classrooms Logo" />
							<span>Cohesive Classrooms</span>
						</Title>
					</Link>
					<Navigation>
						<Link to="/about">About Us</Link>
						<a 
							// href="https://cohesiveclassrooms.teachable.com/" 
							onClick={ () => setShowEmailCapture(true) }
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
				{ 
					showEmailCapture && 
					// <ThemeProvider theme={ darkBlueTheme }>
						<EmailCapture
							closeAction={ () => setShowEmailCapture(false) }
							title="Coming soon!"
							text="We're busy building out the content right now, but leave us your name and email, and we'll let you know as soon as it's available." />
					// </ThemeProvider> 
				}
			</Container>
	)
}

export default Header

const Container = styled.header`
	width: 100%;
	position: relative;
`

const Gradient = styled.div`
	width: 100%;
	height: 4px;
	background: rgb(222,146,33);
	background: linear-gradient(90deg, rgba(222,146,33,1) 0%, rgba(232,35,118,1) 25%, rgba(42,50,209,1) 50%, rgba(32,214,142,1) 75%, rgba(0,212,255,1) 100%);
`

const animateGradient = keyframes`
	0% { color: rgba(32,214,142,1); }
	20% { color: rgba(0,212,255,1); }
	40% { color: rgba(222,146,33,1); }
	60% { color: rgba(232,35,118,1); }
	80% { color: rgba(42,50,209,1); }
	100% { color: rgba(32,214,142,1); }
`

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	max-width: 960px;
	margin: 0 auto;
	display: flex;
	align-items: center;

	.logo-link {
		span { transition: color 150ms ease-in-out; }
		&:hover {
			span{ 
				color: ${ p => p.theme.navLinkHover };
				animation-name: ${ animateGradient };
				animation-delay: 150ms;
				animation-duration: 5s;
				animation-iteration-count: infinite;
			}
		}
	}
`

const Title = styled.div`
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
		color: ${ p => p.theme.text };
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
		color: ${ p => p.theme.navLink };
		cursor: pointer;

		&:hover {
			color: ${ p => p.theme.navLinkHover };

			.new-window {
				fill: ${ p => p.theme.navLinkHover };
			}
		}

		.new-window {
			height: 10px;
			margin-left: 4px;
			fill: ${ p => p.theme.navLink };
			transition: fill 200ms ease-in-out;
		}
	}
`