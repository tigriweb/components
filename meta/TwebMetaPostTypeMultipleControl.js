import {
	BaseControl,
	FormTokenField,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

import {
	twebWithPostMeta,
} from '../helpers';

const TwebMetaPostTypeMultipleControl = twebWithPostMeta(({ label, help, postType, metaValue, setMetaValue }) => {
	const postTypeRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('postType', postType, { status: 'publish', per_page: -1, _fields: 'id,title' });
	});

	return (
		<BaseControl
			__nextHasNoMarginBottom
			help={ help }
		>
			{(postTypeRecords !== null) && (postTypeRecords.length > 0) ? (
				<FormTokenField
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ label }
					value={
						metaValue.map(postId => {
							const foundPost = postTypeRecords.find(post => {
								return post.id === parseInt(postId);
							});

							return (foundPost === undefined || ! foundPost) ? false : foundPost.title.raw;
						})
					}
					suggestions={
						postTypeRecords.map(post => post.title.raw)
					}
					maxSuggestions={ -1 }
					onChange={ selectedPosts => {
						const selectedPostsIds = [];

						selectedPosts.map(postTitle => {
							const foundPost = postTypeRecords.find(post => {
								return post.title.raw === postTitle;
							});

							if (foundPost !== undefined) {
								selectedPostsIds.push(foundPost.id);
							}
						});

						setMetaValue(selectedPostsIds);
					} }
					__experimentalExpandOnFocus={ true }
				/>
			) : (
				<FormTokenField
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ label }
					placeholder={ '----' }
					disabled
				/>
			)}
		</BaseControl>
	);
});

export default TwebMetaPostTypeMultipleControl;