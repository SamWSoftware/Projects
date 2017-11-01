import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8e_PWfM2GEQKwtYea5KQd1IY1d67UEYc",
    authDomain: "goal-coach-5cbc1.firebaseapp.com",
    databaseURL: "https://goal-coach-5cbc1.firebaseio.com",
    projectId: "goal-coach-5cbc1",
    storageBucket: "",
    messagingSenderId: "180424190775"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completed');