import {
	ToggleControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
	twebGetTextFromArray,
} from './../helpers';

const TwebMetaToggleControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue, ...props }) => {
	return (
		<ToggleControl
			label={ twebGetTextFromArray(label, metaValue) }
			help={ twebGetTextFromArray(help, metaValue) }
			checked={ metaValue }
			onChange={ value => {
				setMetaValue(value);
			} }
			{ ...props }
		/>
	);
});

export default TwebMetaToggleControl;