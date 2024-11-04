const twebSanitizeHTML = html => {
	const sanitizedHtml = html.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g, (match, tagName) => {
		if (/^(h1|h2|h3|h4|h5|h6|p|strong|b|i|em|u|sup|sub|br|ul|ol|li|a)$/i.test(tagName)) {
			return `<${tagName}>`;
		}

		return '';
	});

	return sanitizedHtml;
};

export default twebSanitizeHTML;