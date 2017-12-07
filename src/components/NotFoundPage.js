import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>Page not found</p>
    <p>
      Please go back to <Link to="/">home page</Link> and try again :){' '}
    </p>
  </div>
);

export default NotFoundPage;
