import {
	BaseControl,
	ColorPalette,
	Button,
	Popover,
	ColorIndicator,
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

const TwebBlockColorControl = ({ label, help, name, onChange, attributes, setAttributes }) => {
	const [isVisible, setIsVisible] = useState(false);

	const colors = useSelect(
		select => select('core/block-editor')?.getSettings()?.colors || [],
		[]
	);

	const value = attributes[name] ?? null;

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
				<ColorIndicator colorValue={ value } />
				{ value && (
					<span style={ {
						marginLeft: '8px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						maxWidth: '140px',
						display: 'inline-block',
						verticalAlign: 'middle',
					} }>
						{ value }
					</span>
				) }
			</Button>

			{ isVisible && (
				<Popover
					placement="bottom-start"
					onClose={ () => setIsVisible(false) }
				>
					<div style={ { padding: '8px', maxWidth: '212px' } }>
						<ColorPalette
							colors={ colors }
							value={ value }
							onChange={ onChange || (value => {
								setAttributes({
									[name]: value,
								});
							}) }
						/>
					</div>
				</Popover>
			) }
		</BaseControl>
	);
};

export default TwebBlockColorControl;