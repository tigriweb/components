import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockTaxonomySelectControl = ({ label, help, taxonomy, name, onChange, attributes, setAttributes }) => {
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
					value={ attributes[name] }
					options={[
						{ value: '', label: '----' },
						...taxonomyRecords.map(({ id, name }) => ({ value: id, label: name })),
					]}
					onChange={ onChange || (value => {
						setAttributes({
							[name]: value,
						});
					}) }
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
};

export default TwebBlockTaxonomySelectControl;