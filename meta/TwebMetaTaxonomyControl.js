import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

import {
	twebWithPostMeta,
} from '../helpers';

const TwebMetaTaxonomyControl = twebWithPostMeta(({ label, help, taxonomy, metaValue, setMetaValue, ...props }) => {
	const taxonomyRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('taxonomy', taxonomy, { per_page: -1, _fields: 'id,name' });
	});

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{taxonomyRecords !== null ? (
				<SelectControl
					__next40pxDefaultSize
					value={ metaValue }
					options={ [
						{ value: '', label: '----' },
						...taxonomyRecords.map(({ id, name }) => ({ value: id, label: name })),
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

export default TwebMetaTaxonomyControl;