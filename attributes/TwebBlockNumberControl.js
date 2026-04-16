import {
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

const TwebBlockNumberControl = ({ label, help, name, onChange, dragDirection, dragThreshold, spinControls, isDragEnabled, labelPosition, min, max, required, step, attributes, setAttributes, ...props }) => {
	return (
		<NumberControl
			__next40pxDefaultSize
			label={ label }
			help={ help }
			value={ attributes[name] }
			dragDirection={ dragDirection }
			dragThreshold={ dragThreshold }
			spinControls={ spinControls }
			isDragEnabled={ isDragEnabled }
			labelPosition={ labelPosition }
			min={ min }
			max={ max }
			required={ required }
			step={ step }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: parseInt(value),
				});
			}) }
			{ ...props }
		/>
	);
};

export default TwebBlockNumberControl;
