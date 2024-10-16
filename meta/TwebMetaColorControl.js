import {
	BaseControl,
} from '@wordpress/components';

import {
	ColorPaletteControl,
} from '@wordpress/block-editor';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaColorControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	return (
		<BaseControl
			help={help}
		>
			<ColorPaletteControl
				label={label}
				help={help}
				value={metaValue}
				clearable={false}
				enableAlpha={false}
				onChange={value => {
					setMetaValue(value);
				}}
			/>
		</BaseControl>
	);
});

export default TwebMetaColorControl;