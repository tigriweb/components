import {
	BaseControl,
} from '@wordpress/components';

import {
	twebSanitizeHTML,
} from './../helpers';

const TwebMetaHtmlControl = ({ label, help }) => {
	return (
		<BaseControl label={ label } >
			<div dangerouslySetInnerHTML={{
				__html: twebSanitizeHTML(help),
			}} />
		</BaseControl>
	);
};

export default TwebMetaHtmlControl;