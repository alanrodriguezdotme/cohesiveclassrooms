import React from 'react'
import styled from 'styled-components'

import { faq } from '../content'

const FAQ = () => {
	function renderBuckets() {
		return faq.buckets.map((bucket, i) => {
			return (
				<Bucket key={ 'bucket' + i }>
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
					<h1>{ faq.title }</h1>
				</Row>
				<Row>
					<Buckets>
						{ renderBuckets() }
					</Buckets>
				</Row>
			</Wrapper>
		</Container>
	)
}

export default FAQ

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

const Buckets = styled.div`
	width: 100%;
	max-width: 600px;
`

const Bucket = styled.div`
	padding-bottom: 36px;

	h3 {
		color: ${ p => p.theme.title };
	}
`

const Text = styled.div`
	color: ${ p => p.theme.color };
`