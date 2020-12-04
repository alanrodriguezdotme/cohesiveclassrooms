const homepageContent = {
	hero: {
		title: "Something inspiring that grabs your attention",
		image: 'graduation-cap.svg'
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
			title: "Margaret Schulze",
			subtitle: "Ph.D., BCBA-D",
			text: "Maggie has worked in the field of special education for many years in a variety of settings, including residential treatment, inpatient psychiatry and public schools, and has served in a variety of roles, as a paraprofessional, special education teacher and consultant. Maggie provides training and coaching to support the development of MTSS/PBIS systems and structures to schools throughout Washington state. She also supports school teams in creating sustainable and function-based support plans for students with challenging behaviors. She earned her doctorate in special education at the University of Washington, where she continues to mentor and teach special education pre-service teachers."
		}
	]
}

const content = { homepageContent, aboutUs }

export default content