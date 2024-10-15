import {
	BaseControl,
	CardDivider,
} from '@wordpress/components';

const TwebMetaHtmlControl = ({ label, help }) => {
	return (
		<>
			<CardDivider />
			<BaseControl
				label={label}
				help={help}
			/>
			<CardDivider />
		</>
	);
};

export default TwebMetaHtmlControl;