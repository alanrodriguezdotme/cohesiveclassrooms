import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

import { contactUs } from '../content'

const ContactUs = () => {
	return (
		<Container>
			<Wrapper>
				<Row>
					<h1>{ contactUs.title }</h1>
				</Row>
				<Row>
					<Text>
						{ contactUs.text }
					</Text>
				</Row>
				<Row>					
					<ContactForm
						showMessage={ true }
						textColor='blue'
						templateID='template_e1p1led' />
				</Row>
			</Wrapper>
		</Container>
	)
}

export default ContactUs

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

const Text = styled.div`
	max-width: 600px;
	width: 100%;
	color: ${ p => p.theme.color };
`