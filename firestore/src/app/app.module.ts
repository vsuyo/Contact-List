import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


// Paste in your credentials that you saved earlier
var firebaseConfig = {
  apiKey: "AIzaSyBeFZvpbkcfDv5jbhcRZyPCIVEwR-ntEEc",
    authDomain: "firestore-54f18.firebaseapp.com",
    databaseURL: "https://firestore-54f18.firebaseio.com",
    projectId: "firestore-54f18",
    storageBucket: "firestore-54f18.appspot.com",
    messagingSenderId: "434716151002"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}