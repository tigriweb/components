import {
	ToolbarGroup,
	ToolbarItem,
	DropdownMenu,
} from '@wordpress/components';

import {
	useState,
} from '@wordpress/element';

const TwebToolbarGroup = ({ label, groupData, name, attributes, setAttributes }) => {
	const [value, setValue] = useState(attributes[name]);

	return (
		<ToolbarGroup>
			<ToolbarItem>
				{ toolbarItemHTMLProps => (
					<DropdownMenu
						icon={ value ? groupData.find(item => item.value === value).icon : groupData[0].icon }
						label={ label }
						toggleProps={ toolbarItemHTMLProps }
						controls={groupData.map(data => ({
							icon: data?.icon,
							title: data?.title,
							label: data?.label,
							isActive: value === data.value,
							onClick: () => {
								setValue(data.value);

								setAttributes({
									[name]: data.value,
								});
							},
						}))}
					/>
				) }
			</ToolbarItem>
		</ToolbarGroup>
	);
};

export default TwebToolbarGroup;