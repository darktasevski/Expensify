import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBUqcdPodp_2950C2-Y0GZ4A7RNSjVsWJA',
    authDomain: 'expensify-react-81c0f.firebaseapp.com',
    databaseURL: 'https://expensify-react-81c0f.firebaseio.com',
    projectId: 'expensify-react-81c0f',
    storageBucket: 'expensify-react-81c0f.appspot.com',
    messagingSenderId: '44196604238',
};

firebase.initializeApp(config);
const database = firebase.database();

// firebase
//     .database()
//     .ref()
//     .set({
//         name: 'Darko',
//         age: 27,
//         location: {
//             country: 'Libya',
//             city: 'Josianefort',
//             zipcode: '51236',
//             address: '117 Denesik Road',
//         },
//         isOnline: true,
//     })
//     .then(() => {
//         console.info('data is set');
//     })
//     .catch((err) => {
//         console.warn('Error happened!', err);
//     });

// firebase
//     .database()
//     .ref('expenses')
//     .push(expenses[0]);

database
    .ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expensesArr = [];
        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.key);
            expensesArr.push({
                ...childSnapshot.val(),
                id: childSnapshot.key,
            });
            console.log(expensesArr);
        });
    });
