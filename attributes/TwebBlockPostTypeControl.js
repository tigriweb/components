import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockPostTypeControl = ({ label, help, postType, name, onChange, attributes, setAttributes }) => {
	const postTypeRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('postType', postType, { status: 'publish', per_page: -1 });
	});

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{postTypeRecords !== null ? (
				<SelectControl
					value={ attributes[name] }
					options={ [
						{ value: '', label: '----' },
						...postTypeRecords.map(({ id, title }) => ({ value: id, label: title.rendered })),
					] }
					onChange={ onChange || (value => {
						setAttributes({
							[name]: value,
						});
					}) }
				/>
			) : (
				<SelectControl
					options={ [{
						value: '',
						label: '----',
					}] }
					disabled
				/>
			)}
		</BaseControl>
	);
};

export default TwebBlockPostTypeControl;