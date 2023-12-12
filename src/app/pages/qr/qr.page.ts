import { Component, OnInit, inject } from '@angular/core';
import { User } from 'firebase/auth';
import * as QRCode from 'qrcode'; // Importa la biblioteca qrcode
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  constructor() {}

  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);
  clases = {} as any;
  user = {} as User;
  ngOnInit() {
    // Llama a la función que espera 3 segundos después de que la pantalla se cargue.
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);

    this.waitForThreeSeconds();
  }

  data = {
    asignatura: 'Matemática',
    horaInicio: '09:00 AM',
    horaFin: '10:30 AM',
    fecha: this.obtenerFechaActual(),
    alumnos: 25,
    profesorJefe: 'Juan Pérez',
    ubicacion: 'Ubicación Ficticia', // Agrega la ubicación ficticia aquí
    horaDeGuardado: this.obtenerHoraDeGuardado(), // Agrega la hora de guardado ficticia aquí
  };

  // Función para obtener la fecha actual en el formato 'YYYY-MM-DD'.
  obtenerFechaActual() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Función para obtener la hora de guardado ficticia.
  obtenerHoraDeGuardado() {
    const horaGuardado = new Date();
    horaGuardado.setHours(horaGuardado.getHours() - 1); // Resta una hora para obtener la hora de guardado ficticia.
    const hour = horaGuardado.getHours().toString().padStart(2, '0');
    const minute = horaGuardado.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute} AM`;
  }

  envioDeDatos() {
    let path = 'users/' + this.user.uid + '/' + this.data.asignatura;
    this.firebaseSvc.addAsistencia(path, this.data).then((res) => {
      console.log('Se guardó correctamente');
    });
  }

  waitForThreeSeconds() {
    // Utiliza setTimeout para esperar 3 segundos (3000 milisegundos).

    setTimeout(() => {
      // Realiza la acción de "atrás" para volver a la ventana anterior.
      this.envioDeDatos();
      this.utilsSvc.saveInLocalStorage('clase', this.data);
      window.history.back();
    }, 3000);
  }
}
