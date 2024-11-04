import {
	Inserter,
} from '@wordpress/block-editor';

import {
	Button,
} from '@wordpress/components';

const TwebBlockAppenderButton = function ({ className, label, labelText, clientId }) {
	return (
		<Inserter
			rootClientId={ clientId }
			renderToggle={ ({ onToggle, disabled }) => (
				<Button
					className={ className }
					onClick={ onToggle }
					disabled={ disabled }
					label={ label }
					icon={
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
							<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						</svg>
					}
				>
					{ labelText }
				</Button>
			) }
			isAppender
		/>
	);
};

export default TwebBlockAppenderButton;