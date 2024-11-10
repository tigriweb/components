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

import {
	twebWithPostMeta,
} from './../helpers';

// Styles
import styled from '@emotion/styled';

import {
	twebMediaStyles,
} from './../helpers/styles';

const TwebMediaStyledComponent = styled.div(twebMediaStyles);

const TwebMetaMediaControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	const [mediaData, setMediaData] = useState();

	useEffect(() => {
		if (metaValue) {
			apiFetch({ path: `/wp/v2/media/${metaValue}` })
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
	}, [metaValue]);

	useStyleOverride({
		css: twebMediaStyles.styles,
	});

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{mediaData ? (
				<div className="editor-post-featured-image">
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
						setMetaValue(0);
					} }>{ (typeof twebI18n !== 'undefined' && twebI18n.removeMedia) || 'Remove Media' }</Button>
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						value={ metaValue  }
						render={ ({ open }) => (
							<Button className="components-button editor-post-featured-image__toggle" onClick={ open }>
								{ (typeof twebI18n !== 'undefined' && twebI18n.openMediaLibrary) || 'Open Media Library' }
							</Button>
						) }
						onSelect={ value => {
							setMetaValue(value.id);
						} }
					/>
				</MediaUploadCheck>
			)}
		</BaseControl>
	);
});

export default TwebMetaMediaControl;