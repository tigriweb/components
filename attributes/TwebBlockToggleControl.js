import {
	ToggleControl,
} from '@wordpress/components';

import {
	twebGetTextFromArray,
} from './../helpers';

const TwebBlockToggleControl = ({ label, help, name, onChange, attributes, setAttributes, ...props }) => {
	return (
		<ToggleControl
			label={ twebGetTextFromArray(label, attributes[name]) }
			help={ twebGetTextFromArray(help, attributes[name]) }
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

export default TwebBlockToggleControl;