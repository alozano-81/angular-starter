import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';
//import { ServiciosService } from 'src/app/services/servicios.service';
//import { environment } from 'src/environments/environment';

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
    public serviceLogin : ServiciosService,
    /*
    private route : ActivatedRoute,
    private spinner : NgxSpinnerService,
    public router : Router,
    public toastr : ToastrService,
    private serviceAuth : AutenticacionService,
    private modal : NgbModal,
    private changeDetector: ChangeDetectorRef,
    config: NgbModalConfig*/

    public router : Router,
    )
    {
      //config.backdrop = 'static';
    }

  ngOnInit():void {
    localStorage.clear();
    this.formLogin = this.serviceLogin.cargarFormLogin();
  }

  enviarDatos(){
    this.serviceLogin.validarCredenciales(this.formLogin.get('user').value,  this.formLogin.get('pass').value).subscribe(
      (result:any)=>{
        console.log('entra correcto', result);
        localStorage.setItem('rolUser',result.obj[0].nombre);
        this.router.navigate(['/', 'gestion-principal']);
        localStorage.setItem('user', this.formLogin.get('user').value);
        localStorage.setItem('token', result.token);
        localStorage.setItem('creado','ok');
      },
      (error)=>{
        console.log('entra incorrecto', error);
        this.formLogin.reset();
        localStorage.clear();
        Swal.fire({icon: 'error', title: error.error.status, text: error.error.msn});
      }
    );
  }

}
