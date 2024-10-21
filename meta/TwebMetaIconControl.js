/* global twebIcons */

import {
	__,
} from '@wordpress/i18n';

import {
	Button,
	BaseControl,
} from '@wordpress/components';

import {
	useState,
	useEffect,
} from '@wordpress/element';

import {
	TwebSVG,
} from './../primitives';

import {
	SVG,
	Path,
} from '@wordpress/primitives';

import {
	twebWithPostMeta,
} from './../helpers';

const twebFilterIcons = event => {
	const searchText = event.target.value.toLowerCase();
	const iconsNode  = event.target.parentNode.nextElementSibling;
	const areaNodes  = iconsNode.querySelectorAll('.tweb-icon-component__icons');

	areaNodes.forEach(areaNode => {
		const buttons = areaNode.querySelectorAll('button[aria-label]');

		buttons.forEach(button => {
			const buttonLabel = button.getAttribute('aria-label').toLowerCase();

			if (searchText === '' || buttonLabel.includes(searchText)) {
				button.style.display = 'inline-flex';
			} else {
				button.style.display = 'none';
			}
		});
	});
};


const TwebMetaIconControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	const [selectedIcon, setSelectedIcon] = useState(metaValue);
	const [isVisible, setIsVisible] = useState(false);
	const [iconButtons, setIconButtons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [iconChunks, setIconChunks] = useState([]);
	const iconsPerPage = 250;

	useEffect(() => {
		const chunks   = [];
		const iconKeys = Object.keys(twebIcons);

		for (let icon = 0; icon < iconKeys.length; icon += iconsPerPage) {
			chunks.push(iconKeys.slice(icon, icon + iconsPerPage));
		}

		setIconChunks(chunks);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		let requestId;

		const loadIcons = () => {
			const currentChunk = iconChunks.shift();

			if (currentChunk) {
				const buttons = currentChunk.map(icon => (
					<Button
						label={icon.replaceAll('-', ' ')}
						key={icon}
						onClick={() => {
							setSelectedIcon(icon);
							setMetaValue(icon);
						}}
					>
						<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<Path d={twebIcons[icon]} />
						</SVG>
					</Button>
				));

				setIconButtons(prevButtons => [...prevButtons, ...buttons]);

				requestId = requestAnimationFrame(loadIcons);
			}
		};

		if (!isLoading && isVisible && iconChunks.length > 0) {
			requestId = requestAnimationFrame(loadIcons);
		}

		return () => cancelAnimationFrame(requestId);
	}, [isVisible, isLoading, iconChunks]);

	return (
		<BaseControl help={help}>
			<div className="tweb-icon-component">
				<div className="tweb-icon-component__header">
					{label}:
					<Button
						variant="secondary"
						onClick={() => {
							setIsVisible(state => !state);
						}}
						icon={ <TwebSVG icon={ selectedIcon } /> }
					/>
					{selectedIcon && (
						<Button
							className="components-button is-link is-destructive"
							onClick={() => {
								setSelectedIcon(false);
								setMetaValue(false);
							}}>
							{__('Remove Icon', 'tweb')}
						</Button>
					)}
				</div>
				<div className={`tweb-icon-component${isVisible ? '' : ' is-hidden'}`}>
					<div className="tweb-icon-component__search">
						<input
							type="text"
							placeholder={__('Search Icon', 'tweb')}
							onChange={twebFilterIcons}
						/>
					</div>
					<div className="tweb-icon-component__content">
						<div className="tweb-icon-component__icons">
							{ iconButtons }
						</div>
					</div>
				</div>
			</div>
		</BaseControl>
	);
});

export default TwebMetaIconControl;
