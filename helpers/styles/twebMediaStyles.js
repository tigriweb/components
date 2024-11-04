import { css } from '@emotion/react';

const twebMediaStyles = css`
.components-tweb-media-field {
	--tweb-admin--bg-color: rgba(0, 0, 0, 0.1);
	--tweb-admin--button-color: rgba(255, 255, 255, 0.5);
	max-height: unset;
	padding: 0;
	position: relative;
}
.components-tweb-media-field:hover .components-tweb-media-field__button {
	opacity: 1;
}
.components-tweb-media-field__button {
	background: var(--tweb-admin--button-color);
	border-radius: 4px;
	opacity: 0;
	padding: 6px !important;
	position: absolute;
	right: 2px;
	top: 2px;
	transition: opacity .1s, color .1s;
}
.components-tweb-media-field__toggle {
	right: 40px;
}
.components-tweb-media-field__link {
	right: 80px;
}
.components-tweb-media-field__bg {
	background: var(--tweb-admin--bg-color);
	border-radius: 4px;
	height: 100%;
	justify-content: center;
	min-height: 90px;
	opacity: 1;
	position: static;
	transition: background-color .1s, color .1s;
	width: 100%;
}
.components-tweb-media-field__bg svg {
	width: 36px;
}
.components-tweb-media-field__image img {
	width: 100%;
}
.components-tweb-media-field--file {
	alignItems: center;
	background-color: var(--tweb-admin--bg-color);
	display: flex;
	marginBottom: 8px;
	padding: 8px;
}
.components-tweb-media-field--file__icon {
	font-size: 30px;
	height: 30px;
	margin-left: 0;
	margin-right: 6px;
	width: 30px;
}
.components-tweb-media-field--file__title {
	word-wrap: anywhere;
}
`;

export default twebMediaStyles;