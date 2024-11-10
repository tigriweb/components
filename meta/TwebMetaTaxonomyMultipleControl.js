import {
	BaseControl,
	FormTokenField,
} from '@wordpress/components';

import {
	useSelect,
} from '@wordpress/data';

import {
	twebWithPostMeta,
} from '../helpers';

const TwebMetaTaxonomyMultipleControl = twebWithPostMeta(({ label, help, taxonomy, metaValue, setMetaValue }) => {
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
						metaValue.map(termId => {
							const foundTerm = taxonomyRecords.find(term => {
								return term.id === parseInt(termId);
							});

							return (foundTerm === undefined || ! foundTerm) ? false : foundTerm.name;
						})
					}
					suggestions={
						taxonomyRecords.map(term => term.name)
					}
					onChange={ selectedTerms => {
						const selectedTermsIds = [];

						selectedTerms.map(termName => {
							const foundTerm = taxonomyRecords.find(term => {
								return term.name === termName;
							});


							console.log(foundTerm);

							if (foundTerm !== undefined) {
								selectedTermsIds.push(foundTerm.id);
							}
						});


						console.log({ metaValue });
						console.log({ selectedTermsIds });

						setMetaValue(selectedTermsIds);
					} }
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
});

export default TwebMetaTaxonomyMultipleControl;