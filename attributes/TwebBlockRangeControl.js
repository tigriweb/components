import {
	RangeControl,
} from '@wordpress/components';

const TwebBlockRangeControl = ({ label, help, min = 0, max, step = 1, name, beforeIcon, onChange, attributes, setAttributes, ...props }) => {
	const iconWithFixRailHeight = beforeIcon ? (
		<span style={ { marginTop: '-4px', display: 'flex' } }>{ beforeIcon }</span>
	) : undefined;

	return (
		<RangeControl
			__next40pxDefaultSize
			label={ label }
			help={ help }
			value={ attributes[name] }
			min={ min || 0 }
			max={ max }
			step={ step || 1 }
			beforeIcon={ iconWithFixRailHeight }
			onChange={ onChange || (value => {
				setAttributes({
					[name]: value,
				});
			}) }
			{ ...props }
		/>
	);
};

export default TwebBlockRangeControl;