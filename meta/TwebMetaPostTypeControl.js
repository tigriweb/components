import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

import {
	twebWithPostMeta,
} from './../helpers';

const TwebMetaPostTypeControl = twebWithPostMeta(({ label, help, postType, metaValue, setMetaValue, ...props }) => {
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
					value={ metaValue }
					options={ [
						{ value: '', label: '----' },
						...postTypeRecords.map(({ id, title }) => ({ value: id, label: title.raw })),
					] }
					onChange={ value => {
						setMetaValue(value);
					} }
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
});

export default TwebMetaPostTypeControl;