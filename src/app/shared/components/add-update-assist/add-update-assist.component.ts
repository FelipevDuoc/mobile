import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { asignatura } from 'src/app/models/asignaturas.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { updateDoc } from 'firebase/firestore';
@Component({
  selector: 'app-add-update-assist',
  templateUrl: './add-update-assist.component.html',
  styleUrls: ['./add-update-assist.component.scss'],
})
export class AddUpdateAssistComponent implements OnInit {
  @Input() asignatura: asignatura;

  firebaseSvc = Inject(FirebaseService);
  utilsSvc = Inject(UtilsService);
  ngOnInit() {}
}
