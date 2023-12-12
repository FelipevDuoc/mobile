export class Asignatura {
    nombre: string;
    sala: string;
    horaInicio: string;
    horaTermino: string;
    seccion: string;
    profesor: string;
    sede: string;
  
    constructor(
      nombre: string,
      sala: string,
      horaInicio: string,
      horaTermino: string,
      seccion: string,
      profesor: string,
      sede: string
    ) {
      this.nombre = nombre;
      this.sala = sala;
      this.horaInicio = horaInicio;
      this.horaTermino = horaTermino;
      this.seccion = seccion;
      this.profesor = profesor;
      this.sede = sede;
    }
  }
  