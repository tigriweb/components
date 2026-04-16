import {
	TextareaControl,
} from '@wordpress/components';

const TwebBlockTextareaControl = ({ label, help, name, onChange, attributes, setAttributes, ...props }) => {
	return (
		<TextareaControl
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

export default TwebBlockTextareaControl;