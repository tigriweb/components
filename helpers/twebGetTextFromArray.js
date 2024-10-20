const twebGetTextFromArray = (textData, metaValue) => {
	let text;

	if (Array.isArray(textData)) {
		text = metaValue ? textData[0] : textData[1];
	} else {
		text = textData;
	}

	return text;
};

export default twebGetTextFromArray;