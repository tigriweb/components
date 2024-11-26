declare module '@tigriweb/components/attributes' {
	export function TwebBlockCheckboxControl(props: {
		label: string;
		help?: string;
		name: string;
		onChange?: (value: boolean) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockColorControl(props: {
		label: string;
		help?: string;
		name: string;
		onChange?: (value: string | null) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockColorGradientControl(props: {
		label: string;
		nameColor: string;
		nameGradient: string;
		onColorChange?: (value: string | null) => void;
		onGradientChange?: (value: string | null) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockIconControl(props: {
		label: string;
		help?: string;
		name: string;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockMediaControl(props: {
		label: string;
		help?: string;
		name: string;
		onSelect?: (media: any) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockNumberControl(props: {
		label: string;
		help?: string;
		name: string;
		onChange?: (value: number) => void;
		isShiftStepEnabled?: boolean;
		shiftStep?: number;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export namespace TwebBlockMediaControl {
		export function Render(props: {
			mediaId?: number;
			isBackground?: boolean;
			className?: string;
		}): React.JSX.Element | null;
	}

	export function TwebBlockPostTypeControl(props: {
		label: string;
		help?: string;
		postType: string;
		name: string;
		onChange?: (value: string) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockPostTypeMultipleControl(props: {
		label: string;
		help?: string;
		postType: string;
		name: string;
		onChange?: (selectedPosts: string[]) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockRadioControl(props: {
		label: string;
		help?: string;
		choices: Record<string, string>;
		name: string;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockRangeControl(props: {
		label: string;
		help?: string;
		min?: number;
		max: number;
		step?: number;
		name: string;
		onChange?: (value: number) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockSelectControl(props: {
		label: string;
		help?: string;
		choices: Record<string, string>;
		name: string;
		onChange?: (value: string) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockTaxonomyControl(props: {
		label: string;
		help?: string;
		taxonomy: string;
		name: string;
		onChange?: (value: string) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockTaxonomyMultipleControl(props: {
		label: string;
		help?: string;
		taxonomy: string;
		name: string;
		onChange?: (selectedTerms: string[]) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockTextareaControl(props: {
		label: string;
		help?: string;
		name: string;
		onChange?: (value: string) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockTextControl(props: {
		label: string;
		help?: string;
		name: string;
		onChange?: (value: string) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebBlockToggleControl(props: {
		label: string | string[];
		help?: string | string[];
		name: string;
		onChange?: (value: boolean) => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebToolbarButton(props: {
		label: string;
		icon: React.ReactNode;
		name: string;
		onClick?: () => void;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebToolbarGroup(props: {
		label: string;
		groupData: Array<{
			value: string;
			icon: React.ReactNode;
			title?: string;
			label?: string;
		}>;
		name: string;
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;
}
