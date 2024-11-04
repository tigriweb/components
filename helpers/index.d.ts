declare module '@tigriweb/components/helpers' {
	export function twebGetTextFromArray(
		textData: string | string[],
		metaValue: any
	): string;

	export function twebSanitizeHTML(html: string): string;

	export function twebWithPostMeta(WrappedComponent: React.ComponentType<any>): (props: {
		metaKey: string;
		isNewProductEditor: boolean;
		defaultValue?: any;
	}) => React.JSX.Element;
}
