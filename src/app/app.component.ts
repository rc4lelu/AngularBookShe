import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAgzsbzNaGy3yBIwnoDcAjkL6tDj8dC7lU',
      authDomain: 'bookshelves-345a4.firebaseapp.com',
      databaseURL: 'https://bookshelves-345a4.firebaseio.com',
      projectId: 'bookshelves-345a4',
      storageBucket: 'bookshelves-345a4.appspot.com',
      messagingSenderId: '26054864488',
      appId: '1:26054864488:web:f93daaf8a8fed32c0a95dd',
      measurementId: 'G-LYZFW5TNFC'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
