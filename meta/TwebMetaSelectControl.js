import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaSelectControl = twebWithPostMeta(({ label, help, choices, metaValue, setMetaValue, ...props }) => {
	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			<SelectControl
				__next40pxDefaultSize
				value={ metaValue }
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

export default TwebMetaSelectControl;