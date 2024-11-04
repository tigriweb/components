import {
	__experimentalColorGradientControl as ColorGradientControl,
} from '@wordpress/block-editor';

const TwebBlockColorGradientControl = ({ label, nameColor, nameGradient, onColorChange, onGradientChange, attributes, setAttributes }) => {
	return (
		<ColorGradientControl
			label={ label }
			colorValue={ attributes[nameColor] ?? null }
			gradientValue={ attributes[nameGradient] ?? null }
			onColorChange={ onColorChange || (value => {
				setAttributes({
					[nameColor]: value,
				});
			}) }
			onGradientChange={ onGradientChange || (value => {
				setAttributes({
					[nameGradient]: value,
				});
			}) }
		/>
	);
};

export default TwebBlockColorGradientControl;