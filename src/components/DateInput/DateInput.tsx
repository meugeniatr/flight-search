import React, { FC, ReactElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDatePicker {
  startDate: Date | null;
  onChange: (update: any) => void;
}

const DateInput: FC<IDatePicker> = ({ startDate, onChange }): ReactElement<any, any> => (
  <DatePicker selected={startDate} onChange={onChange} startDate={startDate} popperPlacement="bottom" isClearable />
);

export default DateInput;
// const [startDate, setStartDate] = useState(new Date());
// const [endDate, setEndDate] = useState(null);
// const onChange = (dates) => {
//   const [start, end] = dates;
//   setStartDate(start);
//   setEndDate(end);
// };
