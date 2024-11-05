import { css } from '@emotion/react';

const twebIconStyles = css`
.components-tweb-icon-field {
	--tweb-admin--border-color: rgba(0, 0, 0, 0.1);
}
.components-tweb-icon-field.is-hidden {
	display: none;
}
.components-tweb-icon-field svg {
	width: 24px;
	height: 24px;
	stroke-width: 1.5;
	stroke: currentColor;
	fill: none;
	stroke-linecap: round;
	stroke-linejoin: round;
}
.components-tweb-icon-field__header {
	align-items: center;
	display: flex;
	text-transform: uppercase;
}
.components-tweb-icon-field__header .components-button {
	margin-left: 10px;
	min-width: 36px;
}
.components-tweb-icon-field__search {
	margin: 8px 0;
}
.components-tweb-icon-field__search input[type="text"] {
	border-radius: 2px;
	padding: 2px 7px;
	width: 100%;
}
.components-tweb-icon-field__content {
	border: 1px solid var(--tweb-admin--border-color);
	border-radius: 2px;
	max-height: 300px;
	min-height: 36px;
	overflow-y: auto;
	padding: 2px;
}
.components-tweb-icon-field__content .components-button {
	padding: 6px 7px;
}
`;

export default twebIconStyles;