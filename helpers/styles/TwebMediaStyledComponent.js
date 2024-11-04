import styled from '@emotion/styled';

const TwebMediaStyledComponent = styled.div(() => ({
	'--tweb-admin--bg-color': 'rgba(0, 0, 0, 0.1)',
	'--tweb-admin--button-color': 'rgba(255, 255, 255, 0.5)',
	maxHeight: 'unset',
	padding: '0',
	position: 'relative',

	'.components-button': {
		background: 'var(--tweb-admin--button-color)',
		borderRadius: '4px',
		opacity: 0,
		padding: '6px !important',
		position: 'absolute',
		right: '2px',
		top: '2px',
		transition: 'opacity .1s, color .1s',
	},

	'&:hover': {
		'.components-button': {
			opacity: 1,
		},
	},

	'.tweb-media-component': {
		'&__bg': {
			background: 'var(--tweb-admin--bg-color)',
			borderRadius: '4px',
			height: '100%',
			justifyContent: 'center',
			minHeight: '90px',
			opacity: 1,
			position: 'static',
			transition: 'background-color .1s, color .1s',
			width: '100%',

			'svg': {
				width: '36px',
			},
		},

		'&__image img': {
			width: '100%',
		},

		'&__toggle': {
			right: '40px',
		},

		'&__link': {
			right: '80px',
		},

		'&--file': {
			alignItems: 'center',
			backgroundColor: 'var(--tweb-admin--bg-color)',
			display: 'flex',
			marginBottom: '8px',
			padding: '8px',

			'.components-panel': {
				'&__icon': {
					fontSize: '30px',
					height: '30px',
					marginLeft: '0',
					marginRight: '6px',
					width: '30px',
				},

				'&__icon + span': {
					wordWrap: 'anywhere',
				},
			},
		},
	},
}));

export default TwebMediaStyledComponent;