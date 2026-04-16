import {
	compose,
} from '@wordpress/compose';

import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

const twebWithPostMeta = WrappedComponent => {
	return props => {
		const { metaKey, ...restProps } = props;

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
		)(WrappedComponent)(restProps);
	};
};
export default twebWithPostMeta;