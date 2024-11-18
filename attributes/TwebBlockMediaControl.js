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
	useStyleOverride,
} from '@wordpress/block-editor';

import apiFetch from '@wordpress/api-fetch';

// Styles
import styled from '@emotion/styled';

import {
	twebMediaStyles,
} from './../helpers/styles';

const TwebMediaStyledComponent = styled.div(twebMediaStyles);

const TwebBlockMediaControl = ({ label, help, name, onSelect, attributes, setAttributes }) => {
	const [mediaData, setMediaData] = useState();

	useEffect(() => {
		if (attributes[name]) {
			apiFetch({ path: `/wp/v2/media/${attributes[name]}` })
				.then(data => {
					const tempData = {};

					tempData.url = data.media_details.sizes.medium ? data.media_details.sizes.medium.source_url : data.source_url;

					if ('image' !== data.media_type) {
						tempData.icon = data.mime_type.substring(0, data.mime_type.indexOf('/'));
						tempData.title = tempData.url.substring(tempData.url.lastIndexOf('/') + 1);
					}

					setMediaData(tempData);
				})
				.catch(error => console.error(error));
		}
	}, [attributes[name]]);

	// Backward compatibility: Check if useStyleOverride is available (added in WP 6.7).
	if (typeof useStyleOverride === 'function') {
		useStyleOverride({
			css: twebMediaStyles.styles,
		});
	}

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{mediaData ? (
				<div className="editor-post-featured-image">
					{/* Backward compatibility: Check if useStyleOverride is unavailable (added in WP 6.7). */}
					{typeof useStyleOverride !== 'function' && (
						<style>{twebMediaStyles.styles}</style>
					)}
					<div className="editor-post-featured-image__container">
						<TwebMediaStyledComponent className="components-base-control components-tweb-media">
							{mediaData.title ? (
								<div className="components-tweb-media-field components-tweb-media-field--file">
									<span className={ `dashicons dashicons-media-${mediaData.icon} components-tweb-media-field--file__icon` }></span>
									<span className="components-tweb-media-field--file__title">{ mediaData.title }</span>
								</div>
							) : (
								<div className="components-tweb-media-field components-tweb-media-field--image">
									<img src={ mediaData.url } alt={ label } />
								</div>
							)}
						</TwebMediaStyledComponent>
					</div>
					<Button className="components-button is-link is-destructive" onClick={ () => {
						setMediaData('');
						setAttributes({
							[name]: 0,
						});
					} }>{ (typeof twebI18n !== 'undefined' && twebI18n.removeMedia) || 'Remove Media' }</Button>
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						value={ attributes[name] }
						render={ ({ open }) => (
							<Button className="components-button editor-post-featured-image__toggle" onClick={ open }>
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