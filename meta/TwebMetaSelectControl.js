import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaSelectControl = twebWithPostMeta(({ label, help, choices, metaValue, setMetaValue }) => {
	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			<SelectControl
				value={ metaValue }
				options={ Object.entries(choices).map(([value, label]) => ({
					value,
					label,
				})) }
				onChange={ value => {
					setMetaValue(value);
				} }
			/>
		</BaseControl>
	);
});

export default TwebMetaSelectControl;