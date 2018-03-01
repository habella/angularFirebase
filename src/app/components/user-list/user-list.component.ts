//Importaciones que me harán falta en el componente
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../Interfaces/IUser';

//Componente de lista de usuarios
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit 
{  
    //Inyecto el servicio previamente creado el cual utilizo en este caso para recuperar la lista de usuarios.
    constructor(private _user: UserService){ }  
    //evento de cuando se inicia el componente.
    ngOnInit(): void {
      this._user.listUser().then((isTrue:boolean)=>{      
        //console.log(isTrue);       
      });
    }


  onDelete(item:IUser) {
    if (confirm('¿Desea eliminar el registro?') == true) {
      this._user.deleteUser(item);
    }   
  }
}