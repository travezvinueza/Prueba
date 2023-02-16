import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'appApp.region.home.title' },
        loadChildren: () => import('./region/region.module').then(m => m.RegionModule),
      },
      {
        path: 'pais',
        data: { pageTitle: 'appApp.pais.home.title' },
        loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule),
      },
      {
        path: 'direccion',
        data: { pageTitle: 'appApp.direccion.home.title' },
        loadChildren: () => import('./direccion/direccion.module').then(m => m.DireccionModule),
      },
      {
        path: 'departamento',
        data: { pageTitle: 'appApp.departamento.home.title' },
        loadChildren: () => import('./departamento/departamento.module').then(m => m.DepartamentoModule),
      },
      {
        path: 'tarea',
        data: { pageTitle: 'appApp.tarea.home.title' },
        loadChildren: () => import('./tarea/tarea.module').then(m => m.TareaModule),
      },
      {
        path: 'empleado',
        data: { pageTitle: 'appApp.empleado.home.title' },
        loadChildren: () => import('./empleado/empleado.module').then(m => m.EmpleadoModule),
      },
      {
        path: 'trabajo',
        data: { pageTitle: 'appApp.trabajo.home.title' },
        loadChildren: () => import('./trabajo/trabajo.module').then(m => m.TrabajoModule),
      },
      {
        path: 'contrato',
        data: { pageTitle: 'appApp.contrato.home.title' },
        loadChildren: () => import('./contrato/contrato.module').then(m => m.ContratoModule),
      },
      {
        path: 'persona',
        data: { pageTitle: 'appApp.persona.home.title' },
        loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
