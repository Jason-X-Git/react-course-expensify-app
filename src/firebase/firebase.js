import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIRE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const printSnapshot = (snapshot) => {
//     const expenses = [];

//     snapshot.forEach(element => {
//         expenses.push({
//             id: element.key,
//             ...element.val()
//         })
//     });

//     console.log(expenses);
// };

// // database.ref('expenses')
// //     .on('value', printSnapshot)

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Removed: ', snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed: ', snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added: ', snapshot.val())
// });
    

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach(element => {
//             expenses.push({
//                 id: element.key,
//                 ...element.val()
//             })
//         });
        
//         console.log(expenses);
//     })

// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }];

// setTimeout(() => {
//     database.ref('expenses').push(expenses[2]);
// }, 3500)


// database.ref('notes/-L_L7Gg0ok6uqNxs4dKm').update({
//     body: 'fish'
// })

// database.ref('notes').push({
//     title: 'First note',
//     body: 'This my note'
// })

// const firebaseNotes = {
//     notes: {
//         amdaad: {
//             title: 'First note',
//             body: 'This my note'
//         },
//         dadfaf: {
//             title: 'Secode note',
//             body: 'This my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This my note'
// }, {
//     id: '11we1',
//     title: 'Secode note',
//     body: 'This my note'
// }];

// database.ref('notes').set(notes);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('The task failed', e)
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// });

// setTimeout(() => {
//     database.ref('age').set(11);
// }, 3500)

// setTimeout(() => {
//     database.ref().off();
// }, 3500)

// setTimeout(() => {
//     database.ref('age').set(99);
// }, 3500)



// database.ref().set({
//     name: 'Dave Xue',
//     age: 17,
//     isSingle: true,
//     location: {
//         city: 'Calgary',
//         country: 'Canada'
//     }
// }).then((data) => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('The task failed', e)
// });

// database.ref().update({
//     name: 'Edward',
//     age: 8,
//     job: 'Just layed off',
//     'location/city':'Houston'
// })

// // database.ref().set('This is my data.');

// database.ref('age').set(199);

// database.ref('location/city').set('Houston');

// database.ref('attributes').set({
//     height: 73,
//     width: 106
// }).then((data) => {
//     console.log('Second set call worked')
// }).catch((e) => {
//     console.log('Second task failed', e)
// });

// console.log('I made a request to chagne the data.')

// database.ref('isSingle')
//         .remove()
//         .then(() => {
//             console.log('Data is removed')
//         }).catch((e) => {
//             console.log('failed', e)
//         })

