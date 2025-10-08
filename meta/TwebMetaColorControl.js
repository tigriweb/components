import {
	BaseControl,
	ColorPalette,
	Button,
	Popover,
	ColorIndicator,
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaColorControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	const [isVisible, setIsVisible] = useState(false);

	const colors = useSelect(
		select => select('core/block-editor')?.getSettings()?.colors || [],
		[]
	);

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
				<ColorIndicator colorValue={ metaValue } />
				{ metaValue && (
					<span style={ {
						marginLeft: '8px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						maxWidth: '140px',
						display: 'inline-block',
						verticalAlign: 'middle',
					} }>
						{ metaValue }
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
							value={ metaValue }
							onChange={ value => {
								setMetaValue(value);
							} }
						/>
					</div>
				</Popover>
			) }
		</BaseControl>
	);
});

export default TwebMetaColorControl;