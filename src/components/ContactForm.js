import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const ContactForm = ({ showMessage, templateID }) => {
	let [ name, setName ] = useState('')
	let [ email, setEmail ] = useState('')
	let [ message, setMessage ] = useState('')
	let [ status, setStatus ] = useState(null)

	// Email validation
	const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	function isFormValid() {
		let valid = true

		if (name.length === 0 || email.length === 0) {
			valid = false
		}

		if (showMessage && message.length === 0) {
			valid = false
		}

		if (!emailRegex.test(email)) {
			valid = false
		}

		return valid
	}

	function handleSubmit(e) {
		e.preventDefault()

		let content = showMessage ? { name, email, message } : { name, email }

		if (isFormValid()) {
			setStatus({ text: 'Sending...', type: 'loading' })
			emailjs.send(
				'service_l2g5555', 
				templateID, 
				content,
				'user_6pPAKuS9o5n4LxAMi5AZC')
				.then((response) => {
					if (response.status === 200) {
						setStatus({ text: 'Thanks! We will reach out soon.', type: 'success' })
						resetForm()
					}})
				.catch((error) => {
					console.error({ error })
					setStatus({ text: 'Sorry, something went wrong. Please try again later.', type: 'error' })
				})

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
			{ status ? 
				<Status className={ status.type }><h3>{ status.text }</h3></Status>
				:				
				<form id='contact-form' onSubmit={ (e) => handleSubmit(e) }>
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
						{ showMessage && 
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
						}
						<FormGroup>
							<button 
								type="submit"
								disabled={ !isFormValid() }>
								Send
							</button>
						</FormGroup>
					</Wrapper>
				</form>			
			}
		</Container>
	)
}

export default ContactForm

const Container = styled.div`
	width: 100%;
	max-width: 600px;

	input, textarea {	
		color: ${ p => p.theme.inputText };
		&::placeholder { color: ${ p => p.theme.inputPlaceholder }; }
	}

	button {
		color: ${ p => p.theme.buttonText };
		background-color: ${ p => p.theme.button };
		&:active { background-color: ${ p => p.theme.button }; }
		&:disabled { background-color: ${ p => p.theme.buttonDisabled }; }
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	label { color: ${ p => p.theme.text }; }

	input, textarea {	
		border-color: ${ p => p.theme.border };
		background: transparent;
	}
`

const Status = styled.div`
	text-align: center;
	color: ${ p => p.theme.title };

	&.success { color: ${ p => p.theme.success };	}
	&.error { color: ${ p => p.theme.error }; }
`