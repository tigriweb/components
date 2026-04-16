import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

const TwebBlockSelectControl = ({ label, help, choices, name, onChange, attributes, setAttributes, ...props }) => {
	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			<SelectControl
				__next40pxDefaultSize
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
				{ ...props }
			/>
		</BaseControl>
	);
};

export default TwebBlockSelectControl;