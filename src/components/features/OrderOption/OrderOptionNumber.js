import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ( props ) => {
  return (
    <div className={styles.number}>
      <input type='number'
        className={styles.inputSmall}
        vlaue={props.currentValue}
        min={props.limits.min}
        max={props.limits.max}
        onChange={event => props.setOptionValue(event.currentTarget.value)} />
      {props.price} of price
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;