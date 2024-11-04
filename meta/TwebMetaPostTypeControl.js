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

const TwebMetaPostTypeControl = twebWithPostMeta(({ label, help, postType, metaValue, setMetaValue }) => {
	const postTypeRecords = useSelect(select => {
		return select('core').getEntityRecords('postType', postType, { status: 'publish' });
	});

	return (
		<BaseControl
			label={label}
			help={help}
		>
			{postTypeRecords !== null ? (
				<SelectControl
					value={metaValue}
					options={[
						{ value: '', label: '----' },
						...postTypeRecords.map(({ id, title }) => ({ value: id, label: title.rendered })),
					]}
					onChange={value => {
						setMetaValue(value);
					}}
				/>
			) : (
				<SelectControl
					options={[{
						value: '',
						label: '----',
					}]}
					disabled
				/>
			)}
		</BaseControl>
	);
});

export default TwebMetaPostTypeControl;