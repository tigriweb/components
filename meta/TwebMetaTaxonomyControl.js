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

const TwebMetaTaxonomyControl = twebWithPostMeta(({ label, help, taxonomy, metaValue, setMetaValue }) => {
	const taxonomyRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('taxonomy', taxonomy, { per_page: -1 });
	});

	return (
		<BaseControl
			label={ label }
			help={ help }
		>
			{taxonomyRecords !== null ? (
				<SelectControl
					value={ metaValue }
					options={ [
						{ value: '', label: '----' },
						...taxonomyRecords.map(({ id, name }) => ({ value: id, label: name })),
					] }
					onChange={ value => {
						setMetaValue(value);
					} }
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
});

export default TwebMetaTaxonomyControl;