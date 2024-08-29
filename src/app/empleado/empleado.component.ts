import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre = "Will";
  apellido = "Martin";
  edadg = 0;
  empresa = "Google";
  mensaje = "No hay nadie registrado";

  guardaedad(value:String){
    this.edadg = Number(value)
  }

  habilitarBoton = true;
  usuregistrado = false;

  getregistroUsuario(){
    this.usuregistrado = false;
  }

  setregistrousuario(event:Event){
    //alert("El usuario se registro")
    //alert(event.target)
    //prueba git
    //prueba git 2
    if((<HTMLInputElement>event.target).value == "si"){
      this.mensaje = "Usuario registrado";
    }
    else{
      this.mensaje = "No hay nadie registrado";
    }
  }

  cambiaEmpresa(event:Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }

}

