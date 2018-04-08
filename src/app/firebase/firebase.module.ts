import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConfig } from '../../environments/firebase.config';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule
  ],
  declarations: []
})
export class FirebaseModule { }
