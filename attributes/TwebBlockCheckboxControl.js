import {
	CheckboxControl,
} from '@wordpress/components';

const TwebBlockCheckboxControl = ({ label, help, name, onChange, attributes, setAttributes, ...props }) => {
	return (
		<CheckboxControl
			label={ label }
			help={ help }
			checked={ attributes[name] }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
			{ ...props }
		/>
	);
};

export default TwebBlockCheckboxControl;