import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.text}>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

// OrderOptionDate.propTypes = {

// };

export default OrderOptionDate;