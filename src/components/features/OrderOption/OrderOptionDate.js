import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ( props ) => {
  
  return (
    <div className={styles.text}>
      <DatePicker 
        selected={props.currentValue} 
        placeholderText={'chose start day'}
        onChange={date => {
          props.setOptionValue(date);
        }} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;