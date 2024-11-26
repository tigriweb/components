import {
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

const TwebBlockNumberControl = ({ label, help, name, onChange, attributes, setAttributes, isShiftStepEnabled = false, shiftStep = 1 }) => {
	return (
		<NumberControl
			label={ label }
			help={ help }
			value={ attributes[name] }
			isShiftStepEnabled={ isShiftStepEnabled }
			shiftStep={ shiftStep }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
		/>
	);
};

export default TwebBlockNumberControl;
