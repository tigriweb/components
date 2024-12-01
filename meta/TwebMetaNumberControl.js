import {
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from '../helpers';

const TwebMetaNumberControl = twebWithPostMeta(({ label, help, dragDirection, dragThreshold, spinControls, isDragEnabled, labelPosition, min, max, required, step, metaValue, setMetaValue }) => {
	return (
		<NumberControl
			label={ label }
			help={ help }
			value={ metaValue }
			dragDirection={ dragDirection }
			dragThreshold={ dragThreshold }
			spinControls={ spinControls }
			isDragEnabled={ isDragEnabled }
			labelPosition={ labelPosition }
			min={ min }
			max={ max }
			required={ required }
			step={ step }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebMetaNumberControl;
