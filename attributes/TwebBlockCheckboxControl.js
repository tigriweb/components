import {
	CheckboxControl,
} from '@wordpress/components';

const TwebBlockCheckboxControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	return (
		<CheckboxControl
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
			checked={ attributes[name] }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
		/>
	);
};

export default TwebBlockCheckboxControl;