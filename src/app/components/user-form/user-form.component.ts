//Imports que voy a utilizar en el componente
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../Interfaces/IUser';
import { Router } from '@angular/router';

//Componente para el formulario donde crear usuarios.
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user :IUser = {nombre:"",apellidos:""};
  // Constructor del componente donde le inyecto el servicio para las diferentes funciones con los usuario y Router para la navegación entre páginas.
  constructor(private _user: UserService, private router: Router) { }
  ngOnInit() { }
  // Función para crear usuarios 
  createUser()
  {
    this._user.saveUser(this.user).then((isTrue:boolean)=>{
      if(isTrue){
        this.router.navigateByUrl('/list');
      }
    });
  }
}
