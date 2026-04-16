import {
	TextControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaTextControl = twebWithPostMeta(({ label, help, type, metaValue, setMetaValue, ...props }) => {
	return (
		<TextControl
			__next40pxDefaultSize
			label={ label }
			help={ help }
			type={ type }
			value={ metaValue }
			onChange={ value => {
				setMetaValue(value);
			} }
			{ ...props }
		/>
	);
});

export default TwebMetaTextControl;