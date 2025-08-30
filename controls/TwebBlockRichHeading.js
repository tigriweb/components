/* global twebI18n */

import {
	sprintf,
} from '@wordpress/i18n';

import {
	RichText,
	BlockControls,
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarItem,
	DropdownMenu,
} from '@wordpress/components';

import {
	useState,
} from '@wordpress/element';

import {
	headingLevel1,
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from '@wordpress/icons';

const TwebBlockRichHeading = ({ className, value, allowedFormats, onChange, placeholder, name, attributes, setAttributes }) => {
	const [level, setLevel] = useState(attributes[name]?.level ?? 'h2');

	const headingLevels  = [
		{ value: 'h1', icon: headingLevel1 },
		{ value: 'h2', icon: headingLevel2 },
		{ value: 'h3', icon: headingLevel3 },
		{ value: 'h4', icon: headingLevel4 },
		{ value: 'h5', icon: headingLevel5 },
		{ value: 'h6', icon: headingLevel6 },
		{ value: 'p', icon: paragraph },
	];

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarItem>
						{ toolbarItemHTMLProps => (
							<DropdownMenu
								icon={ level ? headingLevels.find(item => item.value === level).icon : headingLevels[0].icon }
								label={ (typeof twebI18n !== 'undefined' && twebI18n.heading) || 'Heading' }
								toggleProps={ toolbarItemHTMLProps }
								controls={ headingLevels.map(data => ({
									icon: data?.icon,
									label: sprintf(
										(typeof twebI18n !== 'undefined' && twebI18n.headingTag) || 'Heading %s',
										data.value.toUpperCase()
									),
									isActive: level === data.value,
									onClick: () => {
										setLevel(data.value);

										setAttributes({
											[name]: {
												...attributes[name],
												level: data.value,
											},
										});
									},
								})) }
							/>
						) }
					</ToolbarItem>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				tagName={ level }
				className={ className }
				value={ value !== undefined ? value : attributes[name]?.content  }
				allowedFormats={ allowedFormats }
				onChange={ onChange || (value => {
					setAttributes({
						[name]: {
							...attributes[name],
							content : value,
						},
					});
				}) }
				placeholder={ placeholder }
			/>
		</>
	);
};

// eslint-disable-next-line react/display-name
TwebBlockRichHeading.Content = ({ className, value }) => {
	const level   = value.level ?? 'h2';
	const content = value.content  ?? '';

	return (
		<RichText.Content
			tagName={ level }
			className={ className }
			value={ content  }
		/>
	);
};

export default TwebBlockRichHeading;