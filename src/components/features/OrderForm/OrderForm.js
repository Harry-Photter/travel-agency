import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import styles from './OrderForm.scss';
// import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
);

export default OrderForm;