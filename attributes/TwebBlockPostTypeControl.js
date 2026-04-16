import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockPostTypeControl = ({ label, help, postType, name, onChange, attributes, setAttributes, ...props }) => {
	const postTypeRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('postType', postType, { status: 'publish', per_page: -1, _fields: 'id,title' });
	});

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{postTypeRecords !== null ? (
				<SelectControl
					__next40pxDefaultSize
					value={ attributes[name] }
					options={ [
						{ value: '', label: '----' },
						...postTypeRecords.map(({ id, title }) => ({ value: id, label: title.raw })),
					] }
					onChange={ onChange || (value => {
						setAttributes({
							[name]: value,
						});
					}) }
					{ ...props }
				/>
			) : (
				<SelectControl
					__next40pxDefaultSize
					options={ [{
						value: '',
						label: '----',
					}] }
					disabled
					{ ...props }
				/>
			)}
		</BaseControl>
	);
};

export default TwebBlockPostTypeControl;