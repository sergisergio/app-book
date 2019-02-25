import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
    apiKey: "AIzaSyAh3dcnuiazGLj7sFNOPGoZm410niz7Y9U",
    authDomain: "app-book-42dba.firebaseapp.com",
    databaseURL: "https://app-book-42dba.firebaseio.com",
    projectId: "app-book-42dba",
    storageBucket: "app-book-42dba.appspot.com",
    messagingSenderId: "1018665915571"
    };
    firebase.initializeApp(config);
  }
}
