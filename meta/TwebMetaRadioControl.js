import {
	BaseControl,
	RadioControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaRadioControl = twebWithPostMeta(({ label, help, choices, metaValue, setMetaValue, ...props }) => {
	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			<RadioControl
				selected={ metaValue }
				options={ Object.entries(choices).map(([value, label]) => ({
					value,
					label,
				})) }
				onChange={ value => {
					setMetaValue(value);
				} }
				{ ...props }
			/>
		</BaseControl>
	);
});

export default TwebMetaRadioControl;