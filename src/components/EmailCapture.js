import React from 'react'
import styled, { keyframes } from 'styled-components'
import ContactForm from './ContactForm'

const EmailCapture = ({ title, text, closeAction }) => {

	return (
		<Container>
			<Overlay onClick={ () => closeAction() } />
			<Card>
				<Gradient />
				<Wrapper>
					<Text>
						<h2>{ title }</h2>
						<p>{ text }</p>
					</Text>
					<ContactForm
						showMessage={ false }
						textColor='blue'
						templateID='template_eelrfyk' />
				</Wrapper>
			</Card>
		</Container>
	)
}

export default EmailCapture

const fadeIn = keyframes`
	0% {
		opacity: 0.001;
	}
	100% {
		opacity: 1;
	}
`

const fadeInDown = keyframes`
	0% {
		opacity: 0.001;
		transform: translateY(-100px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const Container = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Text = styled.div`
	
	h2 {
		color: ${ p => p.theme.title };
		margin-top: 0;
	}
`

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	background-color: ${ p => p.theme.overlay };
	opacity: 0;
	animation-name: ${ fadeIn };
	animation-fill-mode: forwards;
	animation-duration: 300ms;
	animation-timing-function: ease-in-out;
`

const Card = styled.div`
	max-width: 600px;
	min-height: 200px;
	position: absolute;
	background-color: ${ p => p.theme.bg };
	color: ${ p => p.theme.text };
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
	opacity: 0;
	animation-name: ${ fadeInDown };
	animation-fill-mode: forwards;
	animation-duration: 200ms;
	animation-delay: 200ms;
	animation-timing-function: ease-in-out;
`

const Wrapper = styled.div`
	padding: 36px;
`

const Gradient = styled.div`
	width: 100%;
	height: 4px;
	background: rgb(222,146,33);
	background: linear-gradient(90deg, rgba(222,146,33,1) 0%, rgba(232,35,118,1) 25%, rgba(42,50,209,1) 50%, rgba(32,214,142,1) 75%, rgba(0,212,255,1) 100%);
`