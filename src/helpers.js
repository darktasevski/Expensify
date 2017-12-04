import moment from 'moment';

export function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export const formatDate = date => moment(date).format('MMM Do, Y');
