import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => {
  return (
    <div className={styles.component}>
      {required ? (false || '') : (
        <div className={styles.icon} onClick={() => setOptionValue('')}  value="">
          <Icon name="times-circle" />
          {'none'}
        </div>
      )}

      {values.map(value => (
        <div
          className={`${styles.icon} ${value.id == currentValue ? styles.iconActive : ''}`}
          key={value.id}
          value={currentValue}
          onClick={() => setOptionValue(value.id)}>
          <Icon name={value.name} />
          {value.name}
            ({formatPrice(value.price)})
        </div>
      ))}

    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;