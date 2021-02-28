const homepageContent = {
	hero: {
		title: "Cultivating classrooms where every child is seen, valued, and accepted",
		image: 'colorful-hands-holding.jpg',
		imageAlt: 'mural art of colorful hands holding'
	},
	whatWeDo: {
		title: 'What we do',
		text: "Cohesive Classrooms is a series of comprehensive modules focused on creating collaborative communities, that center on: student voice, connections, and fostering equitable and respectful environments. We focus on how to build structure, predictability and communities in classroom contexts, paired with live coaching opportunities to support implementation. We created this series to support school staff in restoring and rebuilding relationships in the Covid-19 era.  The unique challenges that we have encountered necessitate a proactive, instructive and responsive approach to classroom management that takes into account all facets of our students.",
		image: 'presentation.svg'
	},
	ourApproach: {
		title: 'Our approach',
		image: 'circle.svg',
		buckets: [
			{
				title: 'Proactive',
				color: 'blue',
				text: 'We take a proactive approach in creating collaborative communities by implementing protocols that create structure and predictability and help students feel empowered and connected to adults and peers.  This fosters equitable  and respectful learning environments that increase feelings of safety and belonging.'
			},
			{
				title: 'Instructive',
				color: 'green',
				text: 'We take an instructive approach by teaching students specific skills and scaffolds to help increase their agency and ability to self-regulate their own behaviors and feel successful.'
			},
			{
				title: 'Responsive',
				color: 'pink',
				text: 'We take an responsive approach when we communicate and respond to students in ways which are mindful and respectful of who the student is personally, socially, academically, behaviorally, and linguistically to ensure we are providing the appropriate supports as needed.'
			}
		]
	},
	findOutMore: {
		title: 'Find out more',
		innerHTML: "Feel free to reach out anytime to us at <a href='mailto:info@cohesiveclassrooms.com'>info@cohesiveclassrooms.com</a> if you have any technical issues and please connect with us on social media (Facebook, Instagram)",
		image: 'mail.svg'
	}
}

const aboutUs = {
	title: "About us",
	bios: [
		{
			image: "yelena.png",
			title: "Yelena Patish",
			subtitle: "Ph.D.",
			text: "Yelena Patish received her PhD in Curriculum and Instruction, from the College of Education at University of Washington. Yelena’s line of research aims to contribute to the body of knowledge in improving our preparation of teachers working in diverse schools. Her areas of focus include: a) supporting pre-service and in-service teachers in their commitment to culturally responsive classroom management, b) increasing students’ hope and resiliency c) using a proactive behavioral management approach to support equitable practices of discipline in the classroom, and d) the application of classroom meetings as a social emotional curriculum approach for fostering students’ emotional, personal and social development. Yelena teaches the Culturally Responsive Classroom Management course in the Elementary Teacher Education program at University of Washington and in the Seattle Teacher Residency program. She is also a consultant for the Washington Education Association, designing and facilitating professional development for educators in Washington State on culturally responsive classroom management.  Yelena previously taught sixth grade in West Harlem, New York."
		},
		{
			image: "maggie.png",
			title: "Maggie Schulze",
			subtitle: "Ph.D., BCBA-D",
			text: "Maggie Schulze, Ph.D., BCBA-D is an educational consultant focused on building Positive Behavior Intervention and Supports systems at Tiers 1, 2, and 3.  Dr. Schulze has worked in the field of education for 20 years in settings that include residential treatment facilities, inpatient psychiatry, and public schools, with a focus on preventing and managing challenging behavior for students with a range of needs.  Dr. Schulze received her doctorate from the University of Washington where her research centered on Implementation Science as it relates to the use of evidence-based practices for students with and without disabilities.  She also has served as a coach and instructor for pre-service special education teachers in teacher preparation program at the University of Washington.  Dr. Schulze has experience with many districts and schools in creating and maintaining frameworks that allow for implementation of evidence-based practices for students at each tier, including program evaluations for students with the most intensive needs."
		}
	]
}

export const faq = {
	title: 'F.A.Q.',
	buckets: [
		{
			title: 'Are these modules geared toward elementary or secondary?',
			text: 'These modules are appropriate for teachers at levels K-12.'
		},
		{
			title: 'Are these modules geared toward special education or general education?',
			text: 'These modules discuss strategies that benefit all students and can be modified to meet the needs of a variety of student populations.'
		},
		{
			title: 'Are these modules meant for remote learning or in person?',
			text: 'These protocols are meant to support teacher practice in both in-person and with remote learning. While some practices are more applicable to one setting or the other, there are interventions and supports throughout these modules for both.'
		},
		{
			title: 'How often can I watch the modules?',
			text: 'You can watch the modules as often as you like over the course of your year long subscription.'
		},
		{
			title: 'How do I access the workbook?',
			text: 'The workbooks is a PDF file available for download when you register for the course.'
		},
		{
			title: 'What are the coaching sessions like?',
			text: 'The coaching sessions are twice per month and each session lasts one hour.  We view these sessions as opportunities to model opening activities that reflect the practices we are introducing in the modules, to problem solve classroom management and relationship building issues that you are encountering, and to network with other individuals in the Cohesive Classroom community.'
		}
	]
}

export const contactUs = {
	title: 'Contact us',
	text: 'Feel free to reach out with any questions you may have. We look forward to working with you.'
}

const content = { homepageContent, aboutUs, faq }

export default content