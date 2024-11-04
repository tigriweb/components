import styled from '@emotion/styled';

const TwebIconStyledComponent = styled.div(() => ({
	'--tweb-admin--border-color': 'rgba(0, 0, 0, 0.1)',

	'svg': {
		width: '24px',
		height: '24px',
		strokeWidth: '1.5',
		stroke: 'currentColor',
		fill: 'none',
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
	},

	'.tweb-icon-component': {
		'&__header': {
			alignItems: 'center',
			display: 'flex',
			textTransform: 'uppercase',

			'.components-button': {
				marginLeft: '10px',
				minWidth: '36px',
			},
		},

		'&__search': {
			margin: '8px 0',

			'input[type="text"]': {
				borderRadius: '2px',
				padding: '2px 7px',
				width: '100%',
			},
		},

		'&__content': {
			border: '1px solid var(--tweb-admin--border-color)',
			borderRadius: '2px',
			maxHeight: '300px',
			minHeight: '36px',
			overflowY: 'auto',
			padding: '2px',

			'.components-button': {
				padding: '6px 7px',
			},
		},

		'&.is-hidden': {
			display: 'none',
		},
	},
}));

export default TwebIconStyledComponent;