import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profesor',
    loadChildren: () =>
      import('./pages/profesor/profesor.module').then(
        (m) => m.ProfesorPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'horario',
    loadChildren: () =>
      import('./pages/horario/horario.module').then((m) => m.HorarioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'escanear',
    loadChildren: () =>
      import('./pages/escanear/escanear.module').then(
        (m) => m.EscanearPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'asignaturaprofesor',
    loadChildren: () =>
      import('./pages/asignaturaprofesor/asignaturaprofesor.module').then(
        (m) => m.AsignaturaprofesorPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'qr',
    loadChildren: () =>
      import('./pages/qr/qr.module').then((m) => m.QRPageModule),
  },
  {
    path: 'asistencia',
    loadChildren: () =>
      import('./pages/asistencia/asistencia.module').then(
        (m) => m.AsistenciaPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'asistenciaprofe',
    loadChildren: () =>
      import('./pages/asistenciaprofe/asistenciaprofe.module').then(
        (m) => m.AsistenciaprofePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'horarioprofesor',
    loadChildren: () =>
      import('./pages/horarioprofesor/horarioprofesor.module').then(
        (m) => m.HorarioprofesorPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'detalleprofesor',
    loadChildren: () =>
      import('./pages/detalleprofesor/detalleprofesor.module').then(
        (m) => m.DetalleprofesorPageModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
