import {
	BaseControl,
	FormTokenField,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockPostTypeMultipleControl = ({ label, help, postType, name, onChange, attributes, setAttributes }) => {
	const postTypeRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('postType', postType, { status: 'publish', per_page: -1 });
	});

	return (
		<BaseControl
			help={ help }
		>
			{(postTypeRecords !== null) && (postTypeRecords.length > 0) ? (
				<FormTokenField
					label={ label }
					value={
						attributes[name].map(postId => {
							const foundPost = postTypeRecords.find(post => {
								return post.id === parseInt(postId);
							});

							return (foundPost === undefined || ! foundPost) ? false : foundPost.title.rendered;
						})
					}
					suggestions={
						postTypeRecords.map(post => post.title.rendered)
					}
					maxLength="1"
					onChange={ onChange || (selectedPosts => {
						const selectedPostsIds = [];

						selectedPosts.map(postTitle => {
							const foundPost = postTypeRecords.find(post => {
								return post.title.rendered === postTitle;
							});

							if (foundPost !== undefined) {
								selectedPostsIds.push(foundPost.id);
							}
						});

						setAttributes({
							[name]: selectedPostsIds,
						});
					}) }
					__experimentalExpandOnFocus={ true }
				/>
			) : (
				<FormTokenField
					label={ label }
					placeholder={ '----' }
					disabled
				/>
			)}
		</BaseControl>
	);
};

export default TwebBlockPostTypeMultipleControl;