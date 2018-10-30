import firebase from "firebase/app";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCUbg-EEvCJcHzUFRl6w1gAwZrQsdDy-8U",
  authDomain: "skep-618ba.firebaseapp.com",
  databaseURL: "https://skep-618ba.firebaseio.com",
  projectId: "skep-618ba",
  storageBucket: "skep-618ba.appspot.com",
  messagingSenderId: "116627694819"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
