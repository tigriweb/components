'use strict';
/* global twebVars */

import {
	__,
} from '@wordpress/i18n';

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

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaMediaControl = twebWithPostMeta(({ label, help, metaValue, setMetaValue }) => {
	const [mediaData, setMediaData] = useState();

	useEffect(() => {
		if (metaValue) {
			fetch(`${twebVars.restApiUrl}media/${metaValue}`)
				.then(response => response.json())
				.then(data => {
					const tempData = {};

					tempData.url = data.media_details.sizes.medium ? data.media_details.sizes.medium.source_url : data.source_url;

					if ('image' !== data.media_type) {
						tempData.icon = data.mime_type.substring(0, data.mime_type.indexOf('/'));
						tempData.title = tempData.url.substring(tempData.url.lastIndexOf('/') + 1);
					}

					setMediaData(tempData);
				})
				.catch(error => console.log(error));
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
							<div className="tweb-media-component--file">
								<span className={`dashicons dashicons-media-${mediaData.icon} components-panel__icon`}></span>
								<span>{mediaData.title}</span>
							</div>
						) : (
							<img src={mediaData.url} alt={label} />
						)}
					</div>
					<Button className="components-button is-link is-destructive" onClick={ () => {
						setMediaData('');
						setMetaValue(0);
					}}>{ __('Remove Media', 'tweb-core') }</Button>
				</div>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						value={metaValue}
						render={({ open }) => (
							<Button className="components-button editor-post-featured-image__toggle" onClick={open}>
								{__('Open Media Library', 'tweb-core')}
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