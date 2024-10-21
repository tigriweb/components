import { __ } from '@wordpress/i18n';

import {
	useState,
} from '@wordpress/element';

import {
	Button,
	Popover,
	TextControl,
} from '@wordpress/components';


const TwebBlockRingText = ({ className, name, attributes, setAttributes }) => {
	const [isOpen, setIsOpen] = useState(false);

	const buttonText = attributes[name].text ? attributes[name].text : __('Ring Button', 'tweb');
	const buttonLink = attributes[name].link ? attributes[name].link : '#';

	return (
		<>
			<Button
				className={className}
				onClick={ () => setIsOpen(true) }
			>
				<span className="text">
					<a
						href={ buttonLink }
						style={{ '--total': buttonText.length }}
					>
						<span className="text__wrap" aria-hidden="true">
							{ buttonText.split('').map((char, index) => (
								<span key={index} style={{ '--index': index }}>
									{char}
								</span>
							)) }
						</span>
						<span className="screen-reader-text">{ buttonText }</span>
					</a>
				</span>
				<span className="icon">
					<svg width="40" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 25">
						<path d="M39.3 13a.5.5 0 0 0 0-1v1Zm-39 0h39v-1H.3v1Z" fill="currentColor"/>
						<path d="m23.6.7 15.7 11.9M23.6 24.5l15.7-12" stroke="currentColor"/>
					</svg>
				</span>
			</Button>
			{ isOpen && (
				<Popover
					position="top right"
					onClose={ () => setIsOpen(false) }
				>
					<div style={{
						padding: '16px',
						width: '350px',
					}}>
						<TextControl
							label={ __('Text', 'tweb') }
							value={ attributes[name].text }
							onChange={ (value => {
								setAttributes({
									[name]: {
										...attributes[name],
										text: value,
									},
								});
							}) }
						/>
						<TextControl
							label={ __('URL', 'tweb') }
							value={ attributes[name].link }
							onChange={ (value => {
								setAttributes({
									[name]: {
										...attributes[name],
										link: value,
									},
								});
							}) }
						/>
					</div>
				</Popover>
			) }
		</>
	);
};

TwebBlockRingText.Content = ({ className, value }) => {
	const buttonText = value.text ? value.text : __('Ring Button', 'tweb');
	const buttonLink = value.link ? value.link : '#';

	return (
		<div className={className} >
			<span className="text">
				<a
					href={ buttonLink }
					style={{ '--total': `${buttonText.length}` }}
				>
					<span className="text__wrap" aria-hidden="true">
						{ buttonText.split('').map((char, index) => (
							<span key={index} style={{ '--index': `${index}` }}>
								{char}
							</span>
						)) }
					</span>
					<span className="screen-reader-text">{ buttonText }</span>
				</a>
			</span>
			<span className="icon">
				<svg width="40" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 25">
					<path d="M39.3 13a.5.5 0 0 0 0-1v1Zm-39 0h39v-1H.3v1Z" fill="currentColor"/>
					<path d="m23.6.7 15.7 11.9M23.6 24.5l15.7-12" stroke="currentColor"/>
				</svg>
			</span>
		</div>
	);
};

export default TwebBlockRingText;