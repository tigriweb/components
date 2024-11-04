import {
	TextareaControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaTextareaControl = twebWithPostMeta(({ label, help, type, metaValue, setMetaValue }) => {
	return (
		<TextareaControl
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

export default TwebMetaTextareaControl;