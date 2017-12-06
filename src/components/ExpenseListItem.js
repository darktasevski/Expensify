import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, formatDate } from '../helpers'; // or just use Numeral.js for formating currency

const ExpenseListItem = ({
  description, amount, createdAt, id, dispatch
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>{description}</h4>
    </Link>
    <p>
      {formatPrice(amount)} -- {formatDate(createdAt)}
    </p>
  </div>
);

export default ExpenseListItem;
