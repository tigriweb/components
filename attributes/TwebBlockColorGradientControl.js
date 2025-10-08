import {
	BaseControl,
	Button,
	Popover,
	ColorIndicator,
} from '@wordpress/components';

import {
	__experimentalColorGradientControl as ColorGradientControl,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

const TwebBlockColorGradientControl = ({ label, help, nameColor, nameGradient, onColorChange, onGradientChange, attributes, setAttributes }) => {
	const [isVisible, setIsVisible] = useState(false);

	const colorValue    = attributes[nameColor] ?? null;
	const gradientValue = attributes[nameGradient] ?? null;

	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
		>
			<Button
				variant="secondary"
				onClick={ () => setIsVisible(prev => !prev) }
				aria-expanded={ isVisible }
			>
				<ColorIndicator colorValue={ colorValue || gradientValue } />
				{ (colorValue || gradientValue) && (
					<span style={ {
						marginLeft: '8px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						maxWidth: '140px',
						display: 'inline-block',
						verticalAlign: 'middle',
					} }>
						{ colorValue || gradientValue }
					</span>
				) }
			</Button>

			{ isVisible && (
				<Popover
					placement="bottom-start"
					onClose={ () => setIsVisible(false) }
				>
					<div style={ { padding: '8px', maxWidth: '212px' } }>
						<ColorGradientControl
							label={ label }
							colorValue={ colorValue }
							gradientValue={ gradientValue }
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
					</div>
				</Popover>
			) }
		</BaseControl>
	);
};

export default TwebBlockColorGradientControl;