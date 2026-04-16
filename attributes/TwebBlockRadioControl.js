import {
	BaseControl,
	RadioControl,
} from '@wordpress/components';

const TwebBlockRadioControl = ({ label, help, choices, name, attributes, setAttributes, ...props }) => {
	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			<RadioControl
				selected={ attributes[name] }
				options={ Object.entries(choices).map(([value, label]) => ({
					value,
					label,
				})) }
				onChange={ value => {
					setAttributes({
						[name]: value,
					});
				} }
				{ ...props }
			/>
		</BaseControl>
	);
};

export default TwebBlockRadioControl;