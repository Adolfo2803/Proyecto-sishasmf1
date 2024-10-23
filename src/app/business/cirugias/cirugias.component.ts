import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TablaCirugiasService } from './services/tabla-cirugias.service';

@Component({
  selector: 'app-cirugias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cirugias.component.html',
  styleUrl: './cirugias.component.css'
})
export default class CirugiasComponent {

  constructor(public tablaCirugiasService: TablaCirugiasService){}


  cirugiaForm: FormGroup = new FormGroup({
    fechaCirugia: new FormControl('', ),
    numCirugia: new FormControl(''),
    numExpediente: new FormControl(''),
    nomPaciente: new FormControl(''),
    apellidoPPaciente: new FormControl(''),
    apellidoMPaciente: new FormControl(''),
    nomCirujano: new FormControl(''),
    nomAnestesiologo: new FormControl(''),
    nomResidente: new FormControl(''),
    nomCirugia: new FormControl(''),
    nomEnfeInt: new FormControl(''),
    nomEnfeCir: new FormControl(''),
    tipoAnes: new FormControl(''),
    iniciaAnes: new FormControl(''),
    finAnes: new FormControl(''),
    medicamento: new FormControl(''),
    suturas: new FormControl(''),
    material: new FormControl(''),
    validCheck: new FormControl(false),
    
  });

  onSubmit() {
    console.log(this.cirugiaForm.value);

  }

  ConfirmarDatos() {
    if (this.cirugiaForm.valid) {
      console.log('Datos del formulario:', this.cirugiaForm.value);
      
      // Lógica para agregar el paciente y guardar en sessionStorage
      this.tablaCirugiasService.agregarPaciente(this.cirugiaForm.value);
      sessionStorage.setItem('form', JSON.stringify(this.cirugiaForm.value));
      const formStorage = JSON.parse(sessionStorage.getItem('form')!) as TablaCirugiasService;
  
      alert('Formulario guardado correctamente!');
      
      // Limpiar el formulario
      this.cirugiaForm.reset();
    } else {
      alert('El formulario no es válido. Por favor, rellena todos los campos requeridos.');
    }
  }

}


