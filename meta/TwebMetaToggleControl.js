import {
	ToggleControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
	twebGetTextFromArray,
} from '@tweb/modules';

const TwebMetaToggleControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	return (
		<ToggleControl
			label={ twebGetTextFromArray(label, metaValue) }
			help={ twebGetTextFromArray(help, metaValue) }
			checked={metaValue}
			onChange={value => {
				setMetaValue(value);
			}}
		/>
	);
});

export default TwebMetaToggleControl;