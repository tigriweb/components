import {
	BaseControl,
	RadioControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from '@tweb/modules';

const TwebMetaRadioControl = twebWithPostMeta(({ label, help, choices, metaValue, setMetaValue }) => {
	return (
		<BaseControl
			label={label}
			help={help}
		>
			<RadioControl
				selected={metaValue}
				options={Object.entries(choices).map(([value, label]) => ({
					value,
					label,
				}))}
				onChange={value => {
					setMetaValue(value);
				}}
			/>
		</BaseControl>
	);
});

export default TwebMetaRadioControl;