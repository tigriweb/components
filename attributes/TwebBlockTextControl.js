import {
	TextControl,
} from '@wordpress/components';

const TwebBlockTextControl = ({ label, help, name, onChange, attributes, setAttributes, ...props }) => {
	return (
		<TextControl
			__next40pxDefaultSize
			label={ label }
			help={ help }
			value={ attributes[name] }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
			{ ...props }
		/>
	);
};

export default TwebBlockTextControl;