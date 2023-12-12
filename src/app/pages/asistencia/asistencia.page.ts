import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  clasesHoy: any[]; // Inicializamos el array vacío
  nombreUsuario: string; // Variable para el nombre de usuario
  clasesAll: any[];
  asignaturasUnicas: string[] = [];
  gruposPorAsignatura: any = {};

  constructor(private router: Router) {
    // Ejemplo de cómo podrías obtener las clases programadas para hoy
    this.clasesHoy = this.obtenerClasesProgramadas();

    // Ejemplo de cómo podrías obtener el nombre de usuario (reemplaza esto con tu lógica real)
    const { name } = JSON.parse(localStorage.getItem('user'));
    this.nombreUsuario = name; // Reemplaza con el nombre real del usuario

    this.clasesGet(
      'users/' + JSON.parse(localStorage.getItem('user')).uid + '/Clases'
    );
  }

  organizarDatosPorAsignatura() {
    this.clasesAll.forEach((item) => {
      if (!this.gruposPorAsignatura[item.asignatura]) {
        this.gruposPorAsignatura[item.asignatura] = [];
        this.asignaturasUnicas.push(item.asignatura);
      }
      this.gruposPorAsignatura[item.asignatura].push(item);
    });
  }
  doRefresh(event) {
    // Aquí irá la lógica para actualizar los datos o realizar alguna acción
    // por ejemplo, realizar una solicitud HTTP para obtener datos actualizados

    // Simulando una solicitud HTTP con un retardo de 1.5 segundos
    setTimeout(() => {
      // Finalizar el componente de actualización
      window.location.reload();
    }, 1500);
  }

  utilsSvc = inject(UtilsService);
  FirebaseSvc = inject(FirebaseService);

  ionViewWillEnter() {}
  obtenerClasesProgramadas() {
    // Simulamos datos ficticios de clases programadas para hoy
    // Debes adaptar esto a tu fuente de datos real
    return [
      {
        asignatura: 'Lenguaje',
        horaInicio: '09:00 AM',
        horaFin: '10:30 AM',
        fecha: this.obtenerFechaActual(),
        alumnos: 25,
        profesorJefe: 'Juan Pérez',
      },
      {
        asignatura: 'Historia',
        horaInicio: '11:00 AM',
        horaFin: '12:30 PM',
        fecha: this.obtenerFechaActual(),
        alumnos: 30,
        profesorJefe: 'María Gómez',
      },
      {
        asignatura: 'Ciencias',
        horaInicio: '02:00 PM',
        horaFin: '03:30 PM',
        fecha: this.obtenerFechaActual(),
        alumnos: 20,
        profesorJefe: 'Carlos Rodríguez',
      },
    ];
  }

  obtenerFechaActual() {
    // Obtén la fecha actual en el formato deseado (puedes personalizarlo)
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Sumar 1 ya que enero es 0
    const año = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();

    // Formatea la fecha y hora como desees
    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${hora}:${minutos}`;

    return `${fechaFormateada} ${horaFormateada}`;
  }
  verDetalleClase(clase: any) {
    this.router.navigate([
      '/detalle-clase-alumno',
      { clase: JSON.stringify(clase) },
    ]);
  }

  clasesGet(path) {
    console.log(path);
    let sub = this.FirebaseSvc.getAsistencia(path).subscribe({
      next: (res) => {
        this.clasesAll = res;
        console.log(this.clasesAll);
        this.organizarDatosPorAsignatura();
        sub.unsubscribe();
      },
      error: (err) => {
        console.log(err);
        sub.unsubscribe();
      },
    });
  }
}
