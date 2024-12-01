declare module '@tigriweb/components/meta' {
	export function TwebMetaCheckboxControl(props: {
		label: string;
		help?: string;
		metaValue: boolean;
		setMetaValue: (value: boolean) => void;
	}): React.JSX.Element;

	export function TwebMetaColorControl(props: {
		label: string;
		help?: string;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaDateTimeControl(props: {
		label?: string;
		labelButtonText?: string;
		help?: string;
		currentDate?: string | Date;
		is12Hour?: boolean;
		dateOrder?: 'dmy' | 'mdy' | 'ymd';
		isInvalidDate?: (date: Date) => boolean;
		onMonthPreviewed?: (month: Date) => void;
		events?: Record<string, any>;
		startOfWeek?: number;
		type?: 'date' | 'datetime';
		attributes: Record<string, any>;
		setAttributes: (attributes: Record<string, any>) => void;
	}): React.JSX.Element;

	export function TwebMetaIconControl(props: {
		label: string;
		help?: string;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaMediaControl(props: {
		label: string;
		help?: string;
		metaValue: number;
		setMetaValue: (value: number) => void;
	}): React.JSX.Element;

	export function TwebMetaNumberControl(props: {
		label: string;
		help?: string;
		metaValue: number;
		setMetaValue: (value: number) => void;
		dragDirection?: 'horizontal' | 'vertical';
		dragThreshold?: number;
		spinControls?: boolean;
		isDragEnabled?: boolean;
		labelPosition?: 'top' | 'side';
		min?: number;
		max?: number;
		required?: boolean;
		step?: number;
		isShiftStepEnabled?: boolean;
		shiftStep?: number;
	}): React.JSX.Element;

	export function TwebMetaPostTypeControl(props: {
		label: string;
		help?: string;
		postType: string;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaPostTypeMultipleControl(props: {
		label: string;
		help?: string;
		postType: string;
		metaValue: string;
		setMetaValue: (value: number[]) => void;
	}): React.JSX.Element;

	export function TwebMetaRadioControl(props: {
		label: string;
		help?: string;
		choices: Record<string, string>;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaRangeControl(props: {
		label: string;
		help?: string;
		min: number;
		max: number;
		step?: number;
		metaValue: number;
		setMetaValue: (value: number) => void;
	}): React.JSX.Element;

	export function TwebMetaSelectControl(props: {
		label: string;
		help?: string;
		choices: Record<string, string>;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaTaxonomyControl(props: {
		label: string;
		help?: string;
		taxonomy: string;
		metaValue: number[];
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaTaxonomyMultipleControl(props: {
		label: string;
		help?: string;
		taxonomy: string;
		metaValue: number[];
		setMetaValue: (value: number[]) => void;
	}): React.JSX.Element;

	export function TwebMetaTextareaControl(props: {
		label: string;
		help?: string;
		type?: string;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaTextControl(props: {
		label: string;
		help?: string;
		type?: string;
		metaValue: string;
		setMetaValue: (value: string) => void;
	}): React.JSX.Element;

	export function TwebMetaToggleControl(props: {
		label: string | string[];
		help?: string | string[];
		metaValue: boolean;
		setMetaValue: (value: boolean) => void;
	}): React.JSX.Element;
}
