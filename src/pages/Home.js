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
					<Side>
						<img alt="graduation cap" src={ "images/" + hero.image } />
					</Side>
					<Side>
						<h1>{ hero.title }</h1>
					</Side>
				</Row>
				<Row>
					<Side>
						<h2>{ whatWeDo.title }</h2>
						<Text>{ whatWeDo.text }</Text>
					</Side>
					<Side>
						<img alt="presentation" src={ "images/" + whatWeDo.image } />
					</Side>
				</Row>
				<Row>
					<Side>
						<img alt="proactive, instructive, responsive circle" src={ "images/" + ourApproach.image } />
					</Side>
					<Side>
						<h2 className="blue">{ ourApproach.title }</h2>
						{ ourApproach.buckets && renderOurApproachBuckets(ourApproach.buckets) }
					</Side>
				</Row>
				<Row>
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
	max-width: 960px;
	margin: 0 auto;
`

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 50px 0;
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

const Text = styled.div`
	font-size: 14px;
	line-height: 22px;
`

const Bucket = styled.div`
	padding-bottom: 20px;

	h3 {
		color: ${ p => p.color };
		text-transform: uppercase;
	}
`