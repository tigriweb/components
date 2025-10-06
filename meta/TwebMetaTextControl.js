import {
	TextControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaTextControl = twebWithPostMeta(({ label, help, type, metaValue, setMetaValue }) => {
	return (
		<TextControl
			__next40pxDefaultSize
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
			type={ type }
			value={ metaValue }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebMetaTextControl;