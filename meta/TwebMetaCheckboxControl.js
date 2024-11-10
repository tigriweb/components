import {
	CheckboxControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaCheckboxControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	return (
		<CheckboxControl
			label={ label }
			help={ help }
			checked={ metaValue }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebMetaCheckboxControl;