import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ( props ) => {
  return (
    <div className={styles.text}>
      <input
        type="text"
        placeholder={'text'}
        value={props.currentValue}
        onChange={event => props.setOptionValue(event.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;