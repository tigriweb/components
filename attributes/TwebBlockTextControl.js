import {
	TextControl,
} from '@wordpress/components';

const TwebBlockTextControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	return (
		<TextControl
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

export default TwebBlockTextControl;