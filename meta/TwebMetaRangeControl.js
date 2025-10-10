import {
	RangeControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaRangeControl = twebWithPostMeta(({ label, help, min, max, step = 1, beforeIcon, metaValue, setMetaValue }) => {
	const iconWithFixRailHeight = beforeIcon ? (
		<span style={ { marginTop: '-4px', display: 'flex' } }>{ beforeIcon }</span>
	) : undefined;

	return (
		<RangeControl
			__next40pxDefaultSize
			__nextHasNoMarginBottom
			label={ label }z
			help={ help }
			value={ metaValue }
			min={ min }
			max={ max }
			step={ step || 1 }
			beforeIcon={ iconWithFixRailHeight }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebMetaRangeControl;