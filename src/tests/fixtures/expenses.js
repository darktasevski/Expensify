import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gym',
        notes: '',
        amount: 190,
        createdAt: 0,
    },
    {
        id: '2',
        description: 'Cable',
        notes: '',
        amount: 1000,
        createdAt: moment(0)
            .subtract(4, 'days')
            .valueOf(),
    },
    {
        id: '3',
        description: 'Food',
        notes: '',
        amount: 410,
        createdAt: moment(0)
            .add(4, 'days')
            .valueOf(),
    },
];
