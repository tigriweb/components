import {
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

const TwebToolbarButton = ({ label, icon, name, onClick, attributes, setAttributes, ...props }) => {
	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={ icon }
				label={ label }
				checked={ attributes[name] }
				onClick={ onClick || (() => {
					setAttributes({
						[name]: ! attributes[name],
					});
				}) }
				isActive={ attributes[name] }
				{ ...props }
			/>
		</ToolbarGroup>
	);
};

export default TwebToolbarButton;