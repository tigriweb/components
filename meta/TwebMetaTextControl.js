import {
	TextControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from '@tweb/modules';

const TwebMetaTextControl = twebWithPostMeta(({ label, help, type, metaValue, setMetaValue }) => {
	return (
		<TextControl
			label={label}
			help={help}
			type={type}
			value={metaValue}
			onChange={value => {
				setMetaValue(value);
			}}
		/>
	);
});

export default TwebMetaTextControl;