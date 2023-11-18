import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-login',
  templateUrl: './gestion-login.component.html',
  styleUrls: ['./gestion-login.component.scss'],
})
export class GestionLoginComponent implements OnInit{

  prueba:string="e";
  hide:any = true;

  public formLogin: any;

  lbl_login:string="Iniciar sesión";


  constructor(

    )
    {
      //config.backdrop = 'static';
    }

  ngOnInit():void {


  }



}
