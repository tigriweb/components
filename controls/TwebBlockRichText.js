import {
	RichText,
} from '@wordpress/block-editor';

const TwebBlockRichText = ({ tagName, className, value, allowedFormats, onChange, placeholder, name, attributes, setAttributes }) => {
	return (
		<RichText
			tagName={ tagName }
			className={ className }
			value={ value !== undefined ? value : attributes[name] }
			allowedFormats={ allowedFormats }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
			placeholder={ placeholder }
		/>
	);
};

// eslint-disable-next-line react/display-name
TwebBlockRichText.Content = ({ tagName, className, value }) => (
	<RichText.Content
		tagName={ tagName }
		className={ className }
		value={ value }
	/>
);

export default TwebBlockRichText;