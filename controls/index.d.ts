declare module '@tigriweb/components/controls' {
	export function TwebBlockAppenderButton(props: {
		className?: string;
		label: string;
		labelText: string;
		clientId: string;
	}): React.JSX.Element;

	export interface TwebBlockMediaProps {
		name: string;
		size: string;
		value?: {
			id: number;
			alt: string;
			url: string;
			customUrl?: {
				url: string;
				opensInNewTab?: boolean;
			};
			width: number;
			height: number;
		};
		onSelect?: (value: {
			id: number;
			alt: string;
			url: string;
			width: number;
			height: number;
		}) => void;
		customUrl?: boolean;
		attributes: {
			[name: string]: {
				id?: number;
				alt?: string;
				url?: string;
				customUrl?: string;
				preview?: string;
				width?: number;
				height?: number;
			};
		};
		setAttributes: (attributes: {
			[name: string]: {
				id?: number;
				alt?: string;
				url?: string;
				customUrl?: string;
				width?: number;
				height?: number;
			};
		}) => void;
	}

	export default function TwebBlockMedia(props: TwebBlockMediaProps): React.JSX.Element;

	declare namespace TwebBlockMedia {
		export function Content(props: {
			value: {
				url: string;
				alt: string;
				width: number;
				height: number;
				customUrl?: {
					url: string;
					opensInNewTab?: boolean;
				};
			};
		}): React.JSX.Element;
	}

	export interface TwebBlockRichHeadingProps {
		className?: string;
		value?: string;
		allowedFormats?: string[];
		onChange?: (value: string) => void;
		placeholder?: string;
		name: string;
		attributes: {
			[name: string]: {
				level?: string;
				content?: string;
			};
		};
		setAttributes: (attributes: {
			[name: string]: {
				level?: string;
				content?: string;
			};
		}) => void;
	}

	export default function TwebBlockRichHeading(props: TwebBlockRichHeadingProps): React.JSX.Element;

	declare namespace TwebBlockRichHeading {
		export function Content(props: {
			className?: string;
			value: {
				level?: string;
				content?: string;
			};
		}): React.JSX.Element;
	}

	export interface TwebBlockRichTextProps {
		tagName: string;
		className?: string;
		value?: string;
		allowedFormats?: string[];
		onChange?: (value: string) => void;
		placeholder?: string;
		name: string;
		attributes: {
			[name: string]: string;
		};
		setAttributes: (attributes: {
			[name: string]: string;
		}) => void;
	}

	export default function TwebBlockRichText(props: TwebBlockRichTextProps): React.JSX.Element;

	declare namespace TwebBlockRichText {
		export function Content(props: {
			tagName: string;
			className?: string;
			value: string;
		}): React.JSX.Element;
	}
}
