export const colors = {
	blue: '#2A32D1',
	green: '#20D68E',
	yellow: '#E0E026',
	orange: '#DE9221',
	pink: '#E82376',
	black: '#333',
	white: '#fff',
	blueShade03: 'rgba(42, 50, 209, 0.03)',
	blueShade50: 'rgba(42, 50, 209, 0.5)',
	greenShade50: 'rgba(32, 214, 142, 0.5)',
	pinkShade03: 'rgba(232, 35, 118, 0.03)',
	pinkShade50: 'rgba(232, 35, 118, 0.5)',
	pinkShade80: 'rgba(232, 35, 118, 0.8)',
	blackShade03: 'rgba(0, 0, 0, 0.03)',
	blackShade20: 'rgba(0, 0, 0, 0.2)',
	blackShade50: 'rgba(0, 0, 0, 0.5)',
	blackShade80: 'rgba(0, 0, 0, 0.8)',
	blueShade80: 'rgba(42, 50, 209, 0.8)',
	greenShade03: 'rgba(32, 214, 142, 0.03)',
	greenShade80: 'rgba(32, 214, 142, 0.8)',
}

const {
	blue,
	pink,
	green,
	black,
	white,
	blackShade03,
	blackShade20,
	blackShade50,
	blackShade80,
	blueShade03,
	blueShade50,
	pinkShade03,
	pinkShade50,
	greenShade03,
	greenShade50,
} = colors

export const lightTheme = {
	bg: white,
	text: black,
	title: blue,
	overlay: blackShade80,
	inputText: blue,
	inputPlaceholder: blueShade50,
	border: black,
	button: blue,
	buttonDisabled: blueShade50,
	buttonText: white,
	navLink: black,
	navLinkHover: green,
	link: blue,
	linkHover: green,
	success: green,
	error: pink,
	rowBgBlue: blueShade03,
	rowBgPink: pinkShade03,
	rowBgGreen: greenShade03
}

export const darkBlueTheme = {
	bg: blue,
	text: white,
	title: white,
	overlay: blackShade80,
	inputText: green,
	inputPlaceholder: greenShade50,
	border: white,
	button: pink,
	buttonDisabled: pinkShade50,
	buttonText: white,
	navLink: white,
	navLinkHover: pink,
	link: green,
	linkHover: pink,
	success: green,
	error: pink,
	rowEvenBg: blackShade50
}

const themes = { lightTheme, darkBlueTheme }

export default themes