import {
	RangeControl,
} from '@wordpress/components';

const TwebBlockRangeControl = ({ label, help, min = 0, max, step = 1, name, onChange, attributes, setAttributes }) => {
	return (
		<RangeControl
			__next40pxDefaultSize
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
			value={ attributes[name] }
			min={ min || 0 }
			max={ max }
			step={ step || 1 }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
		/>
	);
};

export default TwebBlockRangeControl;