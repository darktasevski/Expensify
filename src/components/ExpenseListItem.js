import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, formatDate } from '../helpers'; // or just use Numeral.js for formating currency

const ExpenseListItem = ({
  description, amount, createdAt, id, dispatch
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h4>{description}</h4>
      <span>{formatDate(createdAt)}</span>
    </div>
    <h3>{formatPrice(amount)}</h3>
  </Link>
);

export default ExpenseListItem;
