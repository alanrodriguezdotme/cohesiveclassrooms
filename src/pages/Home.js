import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

import content from '../content'
import { colors } from '../themes'

const Home = () => {
	let { homepageContent } = content
	let { hero, whatWeDo, ourApproach, findOutMore } = homepageContent

	function renderOurApproachBuckets(buckets) {
		return buckets.map((bucket, i) => {
			return (
				<Bucket color={ colors[bucket.color] } key={ 'bucket' + i }>
					<h3>{ bucket.title }</h3>
					<Text>{ bucket.text }</Text>
				</Bucket>
			)
		})
	}

	return (
		<Container>
			<Wrapper>
				<Row>
					<Content>
						<Side>
							<Circle alt={ hero.imageAlt } image={ 'url("images/' + hero.image + '")' } />
						</Side>
						<Side>
							<h1>{ hero.title }</h1>
						</Side>
					</Content>
				</Row>
				{/* <Divider /> */}
				<Row className="rowBgPink">
					<Content>
						<Side>
							<h2>{ whatWeDo.title }</h2>
							<Text>{ whatWeDo.text }</Text>
						</Side>
						<Side>
							<img alt="presentation" src={ "images/" + whatWeDo.image } />
						</Side>
					</Content>
				</Row>
				{/* <Divider /> */}
				<Row>
					<Content>
						<Side>
							<img alt="proactive, instructive, responsive circle" src={ "images/" + ourApproach.image } />
						</Side>
						<Side>
							<h2 className="blue">{ ourApproach.title }</h2>
							{ ourApproach.buckets && renderOurApproachBuckets(ourApproach.buckets) }
						</Side>
					</Content>
				</Row>
				{/* <Divider /> */}
				<Row className="rowBgBlue">
					<Content>
						<Side>
							<h2 className="blue">Find out more</h2>
							<Text dangerouslySetInnerHTML={{ __html: findOutMore.innerHTML }} />
							<img className="mail" alt="mail" src={ "images/" + findOutMore.image } />
						</Side>
						<Side>
							<ContactForm
								showMessage={ true }
								textColor='blue'
								templateID='template_e1p1led' />
						</Side>
					</Content>
				</Row>
			</Wrapper>
		</Container>
	)
}

export default Home

const Container = styled.div`
	width: 100%;
	min-height: 100px;
`

const Wrapper = styled.div`
	width: 100%;
`

const Row = styled.div`
	width: 100%;

	&.rowBgBlue {
		background-color: ${ p => p.theme.rowBgBlue}
	}

	&.rowBgPink {
		background-color: ${ p => p.theme.rowBgPink}
	}

	&.rowBgGreen {
		background-color: ${ p => p.theme.rowBgGreen}
	}
`

const Content = styled.div`
	max-width: 960px;
	padding: 50px 0;
	display: flex;
	align-items: center;
	margin: 0 auto;

`

const Side = styled.div`
	width: 50%;
	padding: 0 16px 0 0;

	h1, h2 { color: ${ p => p.theme.title }; }

	img {
		width: 90%;

		&.mail {
			width: 60%;
			margin: 40px auto 0 auto;
			display: block;
		}
	}

	&:nth-child(even) {
		padding: 0 0 0 16px;
	}
`

const Circle = styled.div`
	background-image: ${ p => p.image };
	height: 420px;
	width: 420px;
	border-radius: 210px;
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: 50% 18%;
`

const Text = styled.div`
	color: ${ p => p.theme.color };
`

const Bucket = styled.div`
	padding-bottom: 20px;

	h3 {
		color: ${ p => p.color };
		text-transform: uppercase;
	}
`

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${ p => p.theme.divider };
	display: flex;
	align-items: center;
	margin: 50px 0;
`