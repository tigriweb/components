import {
	ToggleControl,
} from '@wordpress/components';

import {
	twebGetTextFromArray,
} from './../helpers';

const TwebBlockToggleControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	return (
		<ToggleControl
			label={ twebGetTextFromArray(label, attributes[name]) }
			help={ twebGetTextFromArray(help, attributes[name]) }
			checked={ attributes[name] }
			onChange={onChange || (value => {
				setAttributes({
					[name]: value,
				});
			})}
		/>
	);
};

export default TwebBlockToggleControl;