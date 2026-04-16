import {
	BaseControl,
	FormTokenField,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockTaxonomyMultipleControl = ({ label, help, taxonomy, name, onChange, attributes, setAttributes, ...props }) => {
	const taxonomyRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('taxonomy', taxonomy, { per_page: -1, _fields: 'id,name' });
	});

	return (
		<BaseControl
			help={ help }
		>
			{(taxonomyRecords !== null) && (taxonomyRecords.length > 0) ? (
				<FormTokenField
					__next40pxDefaultSize
					label={ label }
					value={
						attributes[name].map(termId => {
							const foundTerm = taxonomyRecords.find(term => {
								return term.id === parseInt(termId);
							});

							return (foundTerm === undefined || ! foundTerm) ? false : foundTerm.name;
						})
					}
					suggestions={
						taxonomyRecords.map(term => term.name)
					}
					maxSuggestions={ 1000 }
					onChange={ onChange || (selectedTerms => {
						const selectedTermsIds = [];

						selectedTerms.map(termName => {
							const foundTerm = taxonomyRecords.find(term => {
								return term.name === termName;
							});

							if (foundTerm !== undefined) {
								selectedTermsIds.push(foundTerm.id);
							}
						});

						setAttributes({
							[name]: selectedTermsIds,
						});
					}) }
					__experimentalExpandOnFocus={ true }
					{ ...props }
				/>
			) : (
				<FormTokenField
					__next40pxDefaultSize
					label={ label }
					placeholder={ '----' }
					disabled
					{ ...props }
				/>
			)}
		</BaseControl>
	);
};

export default TwebBlockTaxonomyMultipleControl;