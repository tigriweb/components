import {
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import {
	twebWithPostMeta,
} from '../helpers';

const TwebBlockNumberControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue, isShiftStepEnabled = false, shiftStep = 1 }) => {
	return (
		<NumberControl
			label={ label }
			help={ help }
			value={ metaValue }
			isShiftStepEnabled={ isShiftStepEnabled }
			shiftStep={ shiftStep }
			onChange={ value => {
				setMetaValue(value);
			} }
		/>
	);
});

export default TwebBlockNumberControl;
