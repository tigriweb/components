import {
	BaseControl,
} from '@wordpress/components';

import {
	twebSanitizeHTML,
} from '../helpers';

const TwebHTML = ({ label, help }) => {
	return (
		<BaseControl label={ label } >
			<div dangerouslySetInnerHTML={ {
				__html: twebSanitizeHTML(help),
			} } />
		</BaseControl>
	);
};

export default TwebHTML;