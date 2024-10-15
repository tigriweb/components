import {
	BaseControl,
	CardDivider,
} from '@wordpress/components';

const TwebBlockHtmlControl = ({ label, help }) => {
	return (
		<>
			<CardDivider />
			<BaseControl
				label={ label }
				help={ help }
			/>
			<CardDivider />
		</>
	);
};

export default TwebBlockHtmlControl;