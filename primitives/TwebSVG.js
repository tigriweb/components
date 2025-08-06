/* global twebIcons */

import { SVG, Path } from '@wordpress/primitives';

// Check if twebIcons is loaded.
if (typeof twebIcons === 'undefined') {
	console.error('Warning: twebIcons not loaded. See docs: https://tigriweb.gitbook.io/components/primitives/svg.');
}

const TwebSVG = function ({ icon, size = 24, stroke = 1.5, fill = 'none' }) {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={ size } height={ size } strokeWidth={ stroke } stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
			<Path d={ (typeof twebIcons !== 'undefined' && twebIcons[icon]) || 'M18 6l-12 12 M6 6l12 12' } fill={ fill } />
		</SVG>
	);
};

export default TwebSVG;