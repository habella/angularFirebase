import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IUser } from '../Interfaces/IUser';

//Servicio para las operaciones con usuarios
@Injectable()
export class UserService 
{  
  //Declaración de variables 
  users: IUser[] =[];
  private data: AngularFireList<IUser>;

  //Inyecto el servicio de Firebase para angular
  constructor(public afDB: AngularFireDatabase)
  {
  
  }
  //Almacena la lista de usuarios
  getData(){
    this.data = this.afDB.list("listUsers");

    console.log(this.data);
    return this.data;
  }
  //Función para guardar registro en el servidor
  saveUser(user:IUser)
  {
    //Creo una promesa para esperar que me devuelva un true en caso de haber guardado el registro satisfactorio o un error en caso de haber fallado.
    let promesa = new Promise((resolve, reject) => {
      this.getData().push(user);
      resolve(true);
    }).catch((error) => {
      console.log("Error promesa saveUser: ", error);
    });
  
    return promesa;
  }
  //Función para devolver la lista de usuarios
  listUser()
  {
    //Creo una promesa para esperar que me retorne la lista de registros almacenados en el servidor.
    let promesa = new Promise((resolve, reject) => {
      this.getData()
               .snapshotChanges()
               .map(actions => {
                 return actions.map(action => ({ key: action.key, ...action.payload.val() }));
               })
               .subscribe((items:any)=>{
                  this.users = items;
                  resolve(true);
               });
    }).catch((error) => {
      console.log("Error promesa saveUser: ", error);
    });  
    return promesa;
  }
  //Función para eliminar un registro 
  deleteUser(user: IUser) {
       this.getData().remove(user.key);
  }

}
