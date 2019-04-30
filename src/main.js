// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAYlnYvh0boFJ3-tFJk7RA0CmsZFvLCqLk",
  authDomain: "egco427auth-e7d41.firebaseapp.com",
  databaseURL: "https://egco427auth-e7d41.firebaseio.com",
  projectId: "egco427auth-e7d41",
  storageBucket: "egco427auth-e7d41.appspot.com",
  messagingSenderId: "788332067516"
};
firebase.initializeApp(config);

window.firebase = firebase

let app 

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user) => {

  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
// Initialize Firebase
