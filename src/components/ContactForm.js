import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const ContactForm = () => {
	let [ name, setName ] = useState('')
	let [ email, setEmail ] = useState('')
	let [ message, setMessage ] = useState('')

	// Email validation
	const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	function isFormValid() {
		let valid = true

		if (name.length === 0 || email.length === 0 || message.length === 0) {
			valid = false
		}

		if (!emailRegex.test(email)) {
			valid = false
		}

		return valid
	}

	function handleSubmit(e) {
		e.preventDefault()

		if (isFormValid()) {
			emailjs.send(
				'service_l2g5555', 
				'template_e1p1led', 
				{ name, email, message },
				'user_6pPAKuS9o5n4LxAMi5AZC')

			resetForm()
		} else {
			console.error('form invalid')
		}
	}

	function resetForm() {
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<Container>
			<form id='contact-form' onSubmit={ () => handleSubmit() }>
				<Wrapper>
					<FormGroup>
						<label>Name</label>
						<input
							type='text'
							placeholder='Name'
							name='name'
							onChange={ (e) => setName(e.target.value) }
							value={ name } />
					</FormGroup>
					<FormGroup>
						<label>Email</label>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={ (e) => setEmail(e.target.value) }
							value={ email } />
					</FormGroup>
					<FormGroup>
						<label>Questions/Comments</label>
						<textarea
							rows='5'
							placeholder='Your message'
							name='message'
							onChange={ (e) => setMessage(e.target.value) }
							value={ message }>
						</textarea>
					</FormGroup>
					<FormGroup>
						<button 
							type="submit"
							disabled={ !isFormValid() }>
							Send
						</button>
					</FormGroup>
				</Wrapper>
			</form>
		</Container>
	)
}

export default ContactForm

const Container = styled.div`
	
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	input, textarea {
		color: ${ p => p.theme.blue };
		border-color: ${ p => p.theme.black };

		&::placeholder {
			color: ${ p => p.theme.blueShade50 };
		}
	}

	button {
		&:active {
			background-color: ${ p => p.theme.blue };
		}

		&:disabled {
			background-color: ${ p => p.theme.blueShade50 };
		}
	}
`