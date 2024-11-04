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

import {
	twebWithPostMeta,
} from './../helpers';

import {
	TwebMediaStyledComponent,
} from './../helpers/styles';

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

	return (
		<BaseControl
			label={label}
			help={help}
		>
			{mediaData ? (
				<div className="editor-post-featured-image">
					<div className="editor-post-featured-image__container">
						{mediaData.title ? (
							<TwebMediaStyledComponent className="tweb-media-component--file">
								<span className={ `dashicons dashicons-media-${mediaData.icon} components-panel__icon` }></span>
								<span>{ mediaData.title }</span>
							</TwebMediaStyledComponent>
						) : (
							<img src={ mediaData.url } alt={ label } />
						)}
					</div>
					<Button className="components-button is-link is-destructive" onClick={ () => {
						setMediaData('');
						setMetaValue(0);
					}}>{ (typeof twebI18n !== 'undefined' && twebI18n.removeMedia) || 'Remove Media' }</Button>
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						value={metaValue}
						render={({ open }) => (
							<Button className="components-button editor-post-featured-image__toggle" onClick={open}>
								{ (typeof twebI18n !== 'undefined' && twebI18n.openMediaLibrary) || 'Open Media Library' }
							</Button>
						)}
						onSelect={value => {
							setMetaValue(value.id);
						}}
					/>
				</MediaUploadCheck>
			)}
		</BaseControl>
	);
});

export default TwebMetaMediaControl;