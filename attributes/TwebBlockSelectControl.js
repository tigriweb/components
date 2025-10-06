import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

const TwebBlockSelectControl = ({ label, help, choices, name, onChange, attributes, setAttributes }) => {
	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
		>
			<SelectControl
				__next40pxDefaultSize
				__nextHasNoMarginBottom
				value={ attributes[name] }
				options={ Object.entries(choices).map(([value, label]) => ({
					value,
					label,
				})) }
				onChange={ onChange || (value => {
					setAttributes({
						[name]: value,
					});
				}) }
			/>
		</BaseControl>
	);
};

export default TwebBlockSelectControl;