import {
	BaseControl,
	FormTokenField,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

const TwebBlockTaxonomyMultipleControl = ({ label, help, taxonomy, name, onChange, attributes, setAttributes }) => {
	const taxonomyRecords = useSelect(select => {
		// eslint-disable-next-line camelcase
		return select('core').getEntityRecords('taxonomy', taxonomy, { per_page: -1 });
	});

	return (
		<BaseControl
			help={ help }
		>
			{(taxonomyRecords !== null) && (taxonomyRecords.length > 0) ? (
				<FormTokenField
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
				/>
			) : (
				<FormTokenField
					label={ label }
					placeholder={ '----' }
					disabled
				/>
			)}
		</BaseControl>
	);
};

export default TwebBlockTaxonomyMultipleControl;