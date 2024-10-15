/* eslint-disable id-length */
import { sprintf, __ } from '@wordpress/i18n';

import Draggable from 'react-draggable';

import {
	useState,
} from '@wordpress/element';

import {
	useSelect,
} from '@wordpress/data';

import {
	PanelBody,
	BaseControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

import {
	InspectorControls,
} from '@wordpress/block-editor';

const TwebBlockDraggableSpots = ({ name, attributes, setAttributes }) => {
	const [spots, setSpots] = useState(attributes[name]);

	const postTypeRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('postType', 'product', { status: 'publish', per_page: -1 });
	});

	const handleSpotRemove = (event, spotIndex) => {
		event.stopPropagation();

		const updatedSpots = spots.filter((element, index) => index !== spotIndex);

		setSpots(updatedSpots);
		setAttributes({ hotspots: updatedSpots });
	};

	const handleSpotCreate = event => {
		if (event.target.classList.contains('spot__list')) {
			const rect = event.nativeEvent.target.parentElement.getBoundingClientRect();

			const left = `${(event.clientX + rect.left) / rect.width * 100}%`;
			const top = `${(event.clientY - rect.top) / rect.height * 100}%`;

			setSpots([...spots, { left, top }]);
			setAttributes({
				[name]: [...spots, { left, top }],
			});
		}
	};

	const handleSpotUpdate = (index, position) => {
		const updatedSpots = [...spots];
		updatedSpots[index] = {
			...updatedSpots[index],
			left: position.left,
			top: position.top,
		};

		setSpots(updatedSpots);
		setAttributes({ hotspots: updatedSpots });
	};

	const handleSpotDrag = (event, element) => {
		if (
			(!event.target.classList.contains('spot__remove')) &&
			(event.target.classList.contains('spot') || event.target.classList.contains('spot__list'))
		) {
			const index = parseInt(element.key);

			const rect = element.node.offsetParent.getBoundingClientRect();

			const posX = `${(event.clientX + rect.left) / rect.width * 100}%`;
			const posY = `${(event.clientY - rect.top) / rect.height * 100}%`;

			element.node.style.left = posX;
			element.node.style.top  = posY;

			handleSpotUpdate(index, { left: posX, top: posY });
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __('Settings Hotspots', 'tweb') }
					initialOpen={ true }
				>
					{spots.map((spot, index) => (
						<BaseControl
							key={ index }
							label={
								// translators: %d is replaced with the hotspot number
								sprintf(__('Hotspot %d', 'tweb'), parseInt(index) + 1)
							}
						>
							{postTypeRecords !== null ? (
								<SelectControl
									value={ attributes[name][index].id ?? 0 }
									options={[
										{ value: '', label: '----' },
										...postTypeRecords.map(({ id, title }) => ({ value: id, label: title.rendered })),
									]}
									onChange={ (value => {
										const updatedSpots = [...spots];
										updatedSpots[index].id = value;

										setSpots(updatedSpots);
										setAttributes({ hotspots: updatedSpots });
									}) }
								/>
							) : (
								<SelectControl disabled options={ [{
									value: '',
									label: '----',
								}] } />
							)}
							<ToggleControl
								label={ __('Is Opened', 'tweb') }
								checked={ (spots[index].open) }
								onChange={ (value => {
									const updatedSpots = [...spots];
									updatedSpots[index].open = value;

									setSpots(updatedSpots);
									setAttributes({ hotspots: updatedSpots });
								}) }
							/>
						</BaseControl>
					))}
				</PanelBody>
			</InspectorControls>

			<div className="spot__list" onClick={ handleSpotCreate }>
				{spots.map((spot, index) => (
					<Draggable
						key={ index }
						bounds="parent"
						defaultPosition={{ x: 0, y: 0 }}
						onStart={ (event, data) => handleSpotDrag(event, { ...data, key: index }) }
						onDrag={ (event, data) => handleSpotDrag(event, { ...data, key: index }) }
						onStop={(event, data) => handleSpotDrag(event, { ...data, key: index }) }
					>
						<div
							className="spot"
							data-count={ parseInt(index) + 1 }
							style={{
								left: spot.left,
								top : spot.top,
							}}
						>
							<div
								className="spot__remove"
								onClick={ event => handleSpotRemove(event, index) }
							>✕</div>
						</div>
					</Draggable>
				))}
			</div>
		</>
	);
};

export default TwebBlockDraggableSpots;