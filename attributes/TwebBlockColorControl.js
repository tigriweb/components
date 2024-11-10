import {
	BaseControl,
} from '@wordpress/components';

import {
	ColorPaletteControl,
} from '@wordpress/block-editor';

const TwebBlockColorControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	return (
		<BaseControl
			help={ help }
		>
			<ColorPaletteControl
				label={ label }
				value={ attributes[name] ?? null }
				clearable={ true }
				enableAlpha={ false }
				onChange={ onChange || (value => {
					setAttributes({
						[name]: value,
					});
				}) }
			/>
		</BaseControl>
	);
};

export default TwebBlockColorControl;