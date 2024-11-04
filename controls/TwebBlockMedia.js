/* global twebI18n */

import {
	useState,
	useEffect,
} from '@wordpress/element';

import {
	Button,
	Popover,
} from '@wordpress/components';

import {
	MediaUpload,
	MediaUploadCheck,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';

import {
	Icon,
	edit,
	close,
	media,
	link,
} from '@wordpress/icons';

import apiFetch from '@wordpress/api-fetch';

import {
	TwebMediaStyledComponent,
} from './../helpers/styles';

const TwebBlockMedia = ({ name, size, value, onSelect, customUrl, attributes, setAttributes }) => {
	const [mediaData, setMediaData] = useState(null);
	const [popoverOpen, setPopoverOpen] = useState(false);

	const imageId = value !== undefined ? value : attributes[name]?.id;

	useEffect(() => {
		if (imageId) {
			apiFetch({ path: `/wp/v2/media/${imageId}` })
				.then(data => {
					const mediaData = {
						id: data.id,
						alt: data.alt_text ?? '',
						url: data.media_details.sizes[size] ? data.media_details.sizes[size].source_url : data.source_url,
						width: data.media_details.sizes[size] ? data.media_details.sizes[size].width : data.width,
						height: data.media_details.sizes[size] ? data.media_details.sizes[size].height : data.height,
					};

					setMediaData(mediaData);

					// Fix when image size was changed
					if (!onSelect && mediaData.url !== attributes[name].url) {
						setAttributes({
							[name]: mediaData,
						});
					}
				})
				.catch(error => console.error(error));
		} else {
			setMediaData(null);
		}
	}, [imageId]);

	return (
		<TwebMediaStyledComponent className="tweb-media-component">
			{mediaData && (
				<>
					<div className="tweb-media-component__image">
						<img src={mediaData.url} alt={mediaData.alt} />
					</div>
					<Button
						className="tweb-media-component__remove"
						label={ (typeof twebI18n !== 'undefined' && twebI18n.removeMedia) || 'Remove Media' }
						showTooltip={ true }
						onClick={ () => {
							setMediaData('');
							setAttributes({
								[name]: {},
							});
						}}>
						<Icon icon={ close } />
					</Button>
					{customUrl && (
						<>
							<Button
								className="tweb-media-component__link"
								label={ (typeof twebI18n !== 'undefined' && twebI18n.editLink) || 'Edit Link' }
								showTooltip={ true }
								onClick={() => setPopoverOpen(!popoverOpen)}
							>
								<Icon icon={link} />
							</Button>
							{popoverOpen && (
								<Popover
									position="top right"
									onClose={() => setPopoverOpen(false)}
								>
									<LinkControl
										value={ attributes[name].customUrl }
										onChange={
											newUrl => setAttributes({
												[name]: {
													...attributes[name],
													customUrl: newUrl,
												},
											})
										}
									/>
								</Popover>
							)}
						</>
					)}
				</>
			)}

			{attributes?.[name]?.preview ? (
				<div className="tweb-media-component__image">
					<img src={attributes[name].preview} />
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={['image']}
						value={imageId}
						render={({ open }) => (
							<Button
								className={mediaData ? 'tweb-media-component__toggle' : 'tweb-media-component__bg' }
								label={ (typeof twebI18n !== 'undefined' && twebI18n.toggleMedia) || 'Toggle Media' }
								showTooltip={ true }
								onClick={open}
							>
								<Icon icon={mediaData ? edit : media } />
							</Button>
						)}
						onSelect={onSelect || (value => {
							setAttributes({
								[name]: {
									id: value.id,
									alt: value.alt ?? '',
									url: value.sizes[size] ? value.sizes[size].url : value.url,
									customUrl: attributes[name].customUrl,
									width: value.sizes[size] ? value.sizes[size].width : value.width,
									height: value.sizes[size] ? value.sizes[size].height : value.height,
								},
							});
						})}
					/>
				</MediaUploadCheck>
			)}
		</TwebMediaStyledComponent>
	);
};

// eslint-disable-next-line react/display-name
TwebBlockMedia.Content = ({ value }) => (
	<>
		{value.customUrl && value.customUrl.url ? (
			<a href={value.customUrl.url} target={value.customUrl.opensInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" title={value.alt}>
				<img src={value.url} alt={value.alt} width={value.width} height={value.height} loading="lazy" decoding="async" />
			</a>
		) : (
			<img src={value.url} alt={value.alt} width={value.width} height={value.height} loading="lazy" decoding="async" />
		)}
	</>
);

export default TwebBlockMedia;