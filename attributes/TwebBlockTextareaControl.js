import {
	TextareaControl,
} from '@wordpress/components';

const TwebBlockTextareaControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	return (
		<TextareaControl
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
			value={ attributes[name] }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
		/>
	);
};

export default TwebBlockTextareaControl;