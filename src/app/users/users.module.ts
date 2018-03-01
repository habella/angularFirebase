import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserFormComponent } from '../components/user-form/user-form.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs'
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { AngularFireModule } from 'angularfire2';

//Variable que almacenará la configuración de la bbdd de firebase
export const config = {
  apiKey: "AIzaSyDTWydwrnYyZyj90w9l9-LmkrN5-RkpGws",
  authDomain: "angularfirebaseiv.firebaseapp.com",
  databaseURL: "https://angularfirebaseiv.firebaseio.com",
  projectId: "angularfirebaseiv",
  storageBucket: "angularfirebaseiv.appspot.com",
  messagingSenderId: "731050793967"
};

//Módulo de usuarios, donde se importará todos los componentes y y módulos necesarios para el correcto funcionamiento del módulo.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config)
  ],
  declarations: [
                 UserFormComponent,
                 UserListComponent                 
                ]
})
export class UsersModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [AngularFireDatabase, UserService]
    };
  }
}
