/* global twebI18n */

import {
	useState,
	useEffect,
} from '@wordpress/element';

import {
	Button,
	BaseControl,
} from '@wordpress/components';

import {
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

import apiFetch from '@wordpress/api-fetch';

const TwebBlockMediaControl = ({ label, help, name, onSelect, attributes, setAttributes }) => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		if (attributes[name]) {
			apiFetch({ path: `/wp/v2/media/${attributes[name]}` })
				.then(data => {
					const imageURL = data.media_details.sizes.medium ? data.media_details.sizes.medium.source_url : data.source_url;

					setImageUrl(imageURL);
				})
				.catch(error => console.error(error));
		} else {
			setImageUrl('');
		}
	}, [attributes[name]]);

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{imageUrl ? (
				<div className="editor-post-featured-image">
					<div className="editor-post-featured-image__container">
						<img src={ imageUrl } alt={ label } />
					</div>
					<Button
						className="components-button is-link is-destructive"
						onClick={ () => {
							setImageUrl('');
							setAttributes({
								[name]: 0,
							});
						}}>
						{ (typeof twebI18n !== 'undefined' && twebI18n.removeImage) || 'Remove Image' }
					</Button>
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={ ['image'] }
						value={ attributes[name] }
						render={ ({ open }) => (
							<Button className="components-button editor-post-featured-image__toggle" onClick={open}>
								{ (typeof twebI18n !== 'undefined' && twebI18n.openMediaLibrary) || 'Open Media Library' }
							</Button>
						) }
						onSelect={ onSelect || (value => {
							setAttributes({
								[name]: value.id,
							});
						}) }
					/>
				</MediaUploadCheck>
			)}
		</BaseControl>
	);
};

// eslint-disable-next-line react/display-name
TwebBlockMediaControl.Render = ({ mediaId = 0, isBackground = false, className = '' }) => {
	const [media, setMedia] = useState(null);

	useEffect(() => {
		if (mediaId) {
			apiFetch({ path: `/wp/v2/media/${mediaId}` })
				.then(media => {
					setMedia(media);
				})
				.catch(error => console.error(error));
		} else {
			setMedia(null);
		}
	}, [mediaId, isBackground]);

	if (media) {
		if (media.media_type === 'image') {
			return (isBackground) ? (
				<div className={ className } style={ { backgroundImage: `url(${media.source_url})` } }></div>
			) : (
				<div className={ className }>
					<img
						src={ media.source_url }
						alt={ media.alt_text }
						width={ media.media_details.width }
						height={ media.media_details.height }
					/>
				</div>
			);
		}
	}

	return null;
};

export default TwebBlockMediaControl;