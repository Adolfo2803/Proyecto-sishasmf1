import { Injectable } from '@angular/core';
import Tabla_cirugias from '../interfaces/Tabla_cirugias';

@Injectable({
  providedIn: 'root'
})
export class TablaCirugiasService {
  tabla_cirugias: Tabla_cirugias[];

  constructor() {
    this.tabla_cirugias = [
      {
        id: 1,
        fechaCirugia: "28/90/27",
        numCirugia: 1,
        numExpediente: 1,
        nomPaciente: "Enrique",
        apellidoPPaciente: "Ramirez",
        apellidoMPaciente: "Olmedo",
        nomCirujano: "Jesus",
        nomAnestesiologo: "Estesy",
        nomResidente: "Residente01",
        nomCirugia: "Cirugia01",
        nomEnfeInt: "EnfermeroInterno01",
        nomEnfeCir: "EnfermeroCirculante01",
        tipoAnes: "TipoAnestecia01",
        iniciaAnes: "2024-04-03",
        finAnes: "2022-02-02",
        medicamento: "medicamento01",
        suturas: "susturas01",
        material: "material01",
        validCheck: "hola",
      },
      {
        id: 1,
        fechaCirugia: "28/90/27",
        numCirugia: 2,
        numExpediente: 2,
        nomPaciente: "Ivan",
        apellidoPPaciente: "Dominguez",
        apellidoMPaciente: "Alejo",
        nomCirujano: "Adolfo",
        nomAnestesiologo: "Jesus",
        nomResidente: "Residente02",
        nomCirugia: "Cirugia02",
        nomEnfeInt: "EnfermeroInterno02",
        nomEnfeCir: "EnfermeroCirculante02",
        tipoAnes: "TipoAnestecia02",
        iniciaAnes: "2024-04-03",
        finAnes: "2022-02-02",
        medicamento: "medicamento02",
        suturas: "susturas02",
        material: "material02",
        validCheck: "hola02",
      }
    ]
   }
   //Metodo para llamarlo
   agregarPaciente(tabla_cirugias: Tabla_cirugias){
    this.tabla_cirugias.push(tabla_cirugias);

   }
}

