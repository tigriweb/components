/* global twebCoreIcons */

import { SVG, Path } from '@wordpress/primitives';

const TwebSVG = function ({ icon, size = 24, stroke = 1.5 }) {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={ size } height={ size } strokeWidth={ stroke } stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<Path d={twebCoreIcons?.[icon] || 'M18 6l-12 12 M6 6l12 12'} />
		</SVG>
	);
};

export default TwebSVG;