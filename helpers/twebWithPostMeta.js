import {
	compose,
} from '@wordpress/compose';

import {
	useEntityProp,
} from '@wordpress/core-data';

import {
	useCallback,
	useMemo,
} from '@wordpress/element';

import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

const twebWithPostMeta = WrappedComponent => {
	// eslint-disable-next-line react/display-name
	return props => {
		const { metaKey, isNewProductEditor, defaultValue } = props;

		// New WooCommerce Product Editor
		if (isNewProductEditor) {
			const [metadata, setMetadata] = useEntityProp('postType', 'product', 'meta_data');

			const metadataItem = useMemo(
				() => metadata?.find(item => item.key === metaKey) || null,
				[metadata, metaKey]
			);

			const setMetaValue = useCallback(
				newValue => {
					if (!metadataItem) {
						setMetadata([...metadata, { key: metaKey, value: newValue }]);
					} else {
						setMetadata(
							metadata.map(item =>
								(item.key === metaKey ? { ...item, value: newValue } : item)
							)
						);
					}
				},
				[metadata, metaKey, metadataItem]
			);

			const metaValue = metadataItem?.value ?? defaultValue;

			return (
				<WrappedComponent
					{...props}
					metaValue={metaValue}
					setMetaValue={setMetaValue}
				/>
			);
		}

		// Gutenberg
		return compose(
			withDispatch(dispatch => ({
				setMetaValue: value => {
					dispatch('core/editor').editPost({ meta: { [metaKey]: value } });
				},
			})),
			withSelect(select => ({
				metaValue: select('core/editor').getEditedPostAttribute('meta')[metaKey],
			}))
		)(WrappedComponent)(props);
	};
};
export default twebWithPostMeta;