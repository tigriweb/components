import { useState } from '@wordpress/element';

import {
	Button,
	Popover,
	DatePicker,
	DateTimePicker,
	BaseControl,
} from '@wordpress/components';
import { twebWithPostMeta } from '../helpers';

const TwebBlockDateTimeControl = twebWithPostMeta(({ label, labelButtonText, help, currentDate, is12Hour, dateOrder = 'dmy', isInvalidDate, onMonthPreviewed, events, startOfWeek, type = 'datetime', metaValue, setMetaValue }) => {
	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const [popoverAnchor, setPopoverAnchor] = useState();

	const handleDateChange = newDate => {
		let formattedValue;

		switch (type) {
		case 'date': {
			const [date] = newDate.split('T');
			formattedValue = date;
			break;
		}
		case 'datetime':
		default: {
			const datetime = new Date(newDate);
			formattedValue = datetime.toISOString().replace('Z', '').replace('T', ' ').slice(0, 16);
			break;
		}
		}

		setMetaValue(formattedValue);
	};

	const renderPicker = () => {
		switch (type) {
		case 'date':
			return (
				<DatePicker
					currentDate={ metaValue || currentDate }
					onChange={ newDate => handleDateChange(newDate) }
					isInvalidDate={ isInvalidDate }
					startOfWeek={ startOfWeek }
				/>
			);
		case 'datetime':
		default:
			return (
				<DateTimePicker
					currentDate={ metaValue || currentDate }
					onChange={ newDate => handleDateChange(newDate) }
					is12Hour={ is12Hour }
					dateOrder={ dateOrder }
					isInvalidDate={ isInvalidDate }
					onMonthPreviewed={ onMonthPreviewed }
					events={ events }
					startOfWeek={ startOfWeek }
				/>
			);
		}
	};

	return (
		<>
			<BaseControl label={ label } help={ help }>
				<div ref={ setPopoverAnchor }>
					<Button
						onClick={ () => setIsPopoverVisible(state => !state) }
						variant="tertiary"
					>
						{metaValue || labelButtonText}
					</Button>
				</div>
			</BaseControl>
			{ isPopoverVisible && (
				<Popover
					anchor={ popoverAnchor }
					placement="right-start"
					onClose={ () => setIsPopoverVisible(false) }
				>
					<div style={ { padding: 16 } }>{ renderPicker() }</div>
				</Popover>
			) }
		</>
	);
}
);

export default TwebBlockDateTimeControl;
