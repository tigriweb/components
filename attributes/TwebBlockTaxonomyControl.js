import {
	BaseControl,
	SelectControl,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockTaxonomyControl = ({ label, help, taxonomy, name, onChange, attributes, setAttributes }) => {
	const taxonomyRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('taxonomy', taxonomy, { per_page: -1, _fields: 'id,name' });
	});

	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={ label }
			help={ help }
		>
			{taxonomyRecords !== null ? (
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					value={ attributes[name] }
					options={ [
						{ value: '', label: '----' },
						...taxonomyRecords.map(({ id, name }) => ({ value: id, label: name })),
					] }
					onChange={ onChange || (value => {
						setAttributes({
							[name]: value,
						});
					}) }
				/>
			) : (
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
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

export default TwebBlockTaxonomyControl;