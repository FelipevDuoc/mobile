import { Component } from '@angular/core';
import { Asignatura } from './asignatura';
import { Horario } from './horario';

@Component({
  selector: 'app-horario',
  templateUrl: 'horario.page.html',
  styleUrls: ['horario.page.scss'],
})
export class HorarioPage {
  diasSemana = ['L', 'M', 'X', 'J', 'V', 'S'];
  diaSeleccionado: string = '';
  asignaturasPorDia: Asignatura[] = [];

  mostrarAsignaturas(dia: string) {
    this.diaSeleccionado = dia;

    // Accede a las asignaturas correspondientes al día seleccionado desde la estructura de datos Horario.
    this.asignaturasPorDia = Horario[dia] || [];
  }
}
