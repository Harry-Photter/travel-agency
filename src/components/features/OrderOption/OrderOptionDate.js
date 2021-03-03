import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ( props ) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.text}>
      <DatePicker 
        selected={startDate} 
        onChange={date => {
          setStartDate(date);
          props.setOptionValue(date);
        }} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;