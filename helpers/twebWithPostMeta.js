import {
	compose,
} from '@wordpress/compose';

import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

const twebWithPostMeta = WrappedComponent => {
	return compose(
		withDispatch((dispatch, props) => ({
			setMetaValue: value => {
				dispatch('core/editor').editPost({
					meta: {
						[props.metaKey]: value,
					},
				});
			},
		})),
		withSelect((select, props) => ({
			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey],
		}))
	)(WrappedComponent);
};

export default twebWithPostMeta;