import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  select = {
    title: 'Happy hours!',
    promoDescription: 'Clock is ticking, hurry up!',
  };
  
  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.countdown}></div>
        <p className={styles.promoDescription}>{this.props.promoDescription}</p>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};


export default HappyHourAd;
