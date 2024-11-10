declare module '@tigriweb/components/primitives' {
	export function TwebHTML(props: {
		label: string;
		help: string;
	}): React.JSX.Element;

	export function TwebSVG(props: {
		icon: string;
		size?: number;
		stroke?: number;
	}): React.JSX.Element;
}
