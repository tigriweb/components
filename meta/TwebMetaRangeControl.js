import {
	RangeControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaRangeControl = twebWithPostMeta(({ label, help, min, max, step = 1, metaValue, setMetaValue }) => {
	return (
		<RangeControl
			label={ label }
			help={ help }
			value={ metaValue }
			min={ min }
			max={ max }
			step={ step || 1 }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebMetaRangeControl;